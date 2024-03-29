/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-this-alias */
import { context, Span, trace, diag } from '@opentelemetry/api';
import { suppressTracing } from '@opentelemetry/core';
import type mongoose from 'mongoose';
import { MongooseInstrumentationConfig, SerializerPayload } from './types';
import { startSpan, handleCallbackResponse, handlePromiseResponse } from './utils';
import {
  InstrumentationBase,
  InstrumentationModuleDefinition,
  InstrumentationNodeModuleDefinition,
} from '@opentelemetry/instrumentation';
import { VERSION } from './version';
import { SemanticAttributes } from '@opentelemetry/semantic-conventions';

const contextCaptureFunctions = [
  'remove',
  'deleteOne',
  'deleteMany',
  'find',
  'findOne',
  'estimatedDocumentCount',
  'countDocuments',
  'count',
  'distinct',
  'where',
  '$where',
  'findOneAndUpdate',
  'findOneAndDelete',
  'findOneAndReplace',
  'findOneAndRemove',
];

// when mongoose functions are called, we store the original call context
// and then set it as the parent for the spans created by Query/Aggregate exec()
// calls. this bypass the unlinked spans issue on thenables await operations.
export const _STORED_PARENT_SPAN: unique symbol = Symbol('stored-parent-span');

export class MongooseInstrumentation extends InstrumentationBase<typeof mongoose> {
  static readonly component = 'mongoose';
  protected override _config: MongooseInstrumentationConfig;
  private moduleVersion: string;

  constructor(config: MongooseInstrumentationConfig = {}) {
    super('opentelemetry-instrumentation-mongoose', VERSION, Object.assign({}, config));

    // According to specification, statement is not set by default on mongodb spans.
    if (!config.dbStatementSerializer)
      this._config.dbStatementSerializer = () => undefined;
  }

  override setConfig(config: MongooseInstrumentationConfig = {}) {
    this._config = Object.assign({}, config);
    if (!config.dbStatementSerializer)
      this._config.dbStatementSerializer = () => undefined;
  }

  protected init(): InstrumentationModuleDefinition<typeof mongoose> {
    const module = new InstrumentationNodeModuleDefinition<typeof mongoose>(
      MongooseInstrumentation.component,
      ['*'],
      this.patch.bind(this),
      this.unpatch.bind(this),
    );
    return module;
  }

  protected patch(moduleExports: typeof mongoose, moduleVersion: string) {
    diag.debug('mongoose instrumentation: patching');
    this.moduleVersion = moduleVersion;

    this._wrap(moduleExports.Model.prototype, 'save', this.patchOnModelMethods('save'));
    this._wrap(
      moduleExports.Model.prototype,
      'remove',
      this.patchOnModelMethods('remove'),
    );
    this._wrap(moduleExports.Query.prototype, 'exec', this.patchQueryExec());
    this._wrap(moduleExports.Aggregate.prototype, 'exec', this.patchAggregateExec());

    contextCaptureFunctions.forEach((funcName: string) => {
      this._wrap(
        moduleExports.Query.prototype,
        funcName as any,
        this.patchAndCaptureSpanContext(funcName),
      );
    });
    this._wrap(moduleExports.Model, 'aggregate', this.patchModelAggregate());

    return moduleExports;
  }

  protected unpatch(moduleExports: typeof mongoose): void {
    diag.debug('mongoose instrumentation: unpatch mongoose');
    this._unwrap(moduleExports.Model.prototype, 'save');
    this._unwrap(moduleExports.Model.prototype, 'remove');
    this._unwrap(moduleExports.Query.prototype, 'exec');
    this._unwrap(moduleExports.Aggregate.prototype, 'exec');

    contextCaptureFunctions.forEach((funcName: string) => {
      this._unwrap(moduleExports.Query.prototype, funcName as any);
    });
    this._unwrap(moduleExports.Model, 'aggregate');
  }

  private patchAggregateExec() {
    const self = this;
    diag.debug('mongoose instrumentation: patched mongoose Aggregate exec prototype');
    return (originalAggregate: Function) => {
      return function exec(this: any, callback?: Function) {
        if (
          self._config.requireParentSpan &&
          trace.getSpan(context.active()) === undefined
        ) {
          return originalAggregate.apply(this, arguments);
        }

        const parentSpan = this[_STORED_PARENT_SPAN];
        const attributes = {
          [SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer(
            'aggregate',
            {
              options: this.options,
              aggregatePipeline: this._pipeline,
            },
          ),
        };

        const span = startSpan({
          tracer: self.tracer,
          modelName: this._model?.modelName,
          operation: 'aggregate',
          attributes,
          collection: this._model.collection,
          parentSpan,
        });
        self._addModuleVersionIfNeeded(span);

        return self._handleResponse(span, originalAggregate, this, arguments, callback);
      };
    };
  }

  private patchQueryExec() {
    const self = this;
    diag.debug('mongoose instrumentation: patched mongoose Query exec prototype');
    return (originalExec: Function) => {
      return function exec(this: any, callback?: Function) {
        if (
          self._config.requireParentSpan &&
          trace.getSpan(context.active()) === undefined
        ) {
          return originalExec.apply(this, arguments);
        }

        const parentSpan = this[_STORED_PARENT_SPAN];
        const attributes = {
          [SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer(this.op, {
            condition: this._conditions,
            updates: this._update,
            options: this.options,
            fields: this._fields,
          }),
        };
        const span = startSpan({
          tracer: self.tracer,
          modelName: this.model.modelName,
          operation: this.op,
          attributes,
          parentSpan,
          collection: this.mongooseCollection,
        });
        self._addModuleVersionIfNeeded(span);

        return self._handleResponse(span, originalExec, this, arguments, callback);
      };
    };
  }

  private patchOnModelMethods(op: string) {
    const self = this;
    diag.debug(`mongoose instrumentation: patched mongoose Model ${op} prototype`);
    return (originalOnModelFunction: Function) => {
      return function method(this: any, options?: any, callback?: Function) {
        if (
          self._config.requireParentSpan &&
          trace.getSpan(context.active()) === undefined
        ) {
          return originalOnModelFunction.apply(this, arguments);
        }

        const serializePayload: SerializerPayload = { document: this };
        if (options && !(options instanceof Function)) {
          serializePayload.options = options;
        }
        const parentSpan = this[_STORED_PARENT_SPAN];
        const attributes = {
          [SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer(
            op,
            serializePayload,
          ),
        };
        const span = startSpan({
          tracer: self.tracer,
          modelName: this.constructor.modelName,
          operation: op,
          attributes,
          parentSpan,
          collection: this.constructor.collection,
        });
        self._addModuleVersionIfNeeded(span);

        if (options instanceof Function) {
          callback = options;
          options = undefined;
        }

        return self._handleResponse(
          span,
          originalOnModelFunction,
          this,
          arguments,
          callback,
        );
      };
    };
  }

  // we want to capture the otel span on the object which is calling exec.
  // in the special case of aggregate, we need have no function to path
  // on the Aggregate object to capture the context on, so we patch
  // the aggregate of Model, and set the context on the Aggregate object
  private patchModelAggregate() {
    const self = this;
    diag.debug(`mongoose instrumentation: patched mongoose model aggregate`);
    return (original: Function) => {
      return function captureSpanContext(this: any) {
        const currentSpan = trace.getSpan(context.active());
        const aggregate = self._callOriginalFunction(() =>
          original.apply(this, arguments),
        );
        if (aggregate) aggregate[_STORED_PARENT_SPAN] = currentSpan;
        return aggregate;
      };
    };
  }

  private patchAndCaptureSpanContext(funcName: string) {
    const self = this;
    diag.debug(`mongoose instrumentation: patched mongoose query ${funcName} prototype`);
    return (original: Function) => {
      return function captureSpanContext(this: any) {
        this[_STORED_PARENT_SPAN] = trace.getSpan(context.active());
        return self._callOriginalFunction(() => original.apply(this, arguments));
      };
    };
  }

  private _handleResponse(
    span: Span,
    exec: Function,
    originalThis: any,
    args: IArguments,
    callback?: Function,
  ) {
    const self = this;
    if (callback instanceof Function) {
      return self._callOriginalFunction(() =>
        handleCallbackResponse(
          callback,
          exec,
          originalThis,
          span,
          self._config.responseHook,
        ),
      );
    } else {
      const response = self._callOriginalFunction(() => exec.apply(originalThis, args));
      return handlePromiseResponse(response, span, self._config.responseHook);
    }
  }

  private _callOriginalFunction<T>(originalFunction: (...args: any[]) => T): T {
    if (this._config?.suppressInternalInstrumentation) {
      return context.with(suppressTracing(context.active()), originalFunction);
    } else {
      return originalFunction();
    }
  }

  private _addModuleVersionIfNeeded(span: Span) {
    if (this._config.moduleVersionAttributeName) {
      span.setAttribute(this._config.moduleVersionAttributeName, this.moduleVersion);
    }
  }
}
