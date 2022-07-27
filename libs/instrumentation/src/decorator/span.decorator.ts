import { context, Span as ApiSpan, SpanStatusCode, trace } from '@opentelemetry/api';
import { StoreContext } from '../trace/store-context';
import { copyMetadataFromFunctionToFunction } from '../utils';

const recordException = (span: ApiSpan, error: any) => {
  span.recordException(error);
  span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
};

export function Span(name?: string, attributes: any = {}) {
  return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
    const originalFunction = propertyDescriptor.value;
    const wrappedFunction = function PropertyDescriptor(...args: any[]) {
      console.log(
        '🚀 ~ file: span.decorator.ts ~ line 14 ~ wrappedFunction ~ args',
        args,
      );
      const tracer = trace.getTracer('default');
      //   const currentSpan =
      //   trace.getSpan(context.active()) ?? tracer.startSpan('default');

      const parentCtx = StoreContext?.currentContext?.context;

      const spanName = name || `${target.constructor.name}.${propertyKey}`;

      return tracer.startActiveSpan(spanName, {}, parentCtx, (span) => {
        // const span = tracer.startSpan(spanName, undefined, parentCtx);
        span.setAttributes(attributes);
        if (originalFunction.constructor.name === 'AsyncFunction') {
          return originalFunction
            .apply(this, args)
            .catch((error) => {
              recordException(span, error);
              // Throw error to propagate it further
              throw error;
            })
            .finally(() => {
              span.end();
            });
        }

        try {
          return originalFunction.apply(this, args);
        } catch (error) {
          recordException(span, error);
          // Throw error to propagate it further
          throw error;
        } finally {
          span.end();
        }
      });
    };
    // eslint-disable-next-line no-param-reassign
    propertyDescriptor.value = wrappedFunction;

    copyMetadataFromFunctionToFunction(originalFunction, wrappedFunction);
  };
}
