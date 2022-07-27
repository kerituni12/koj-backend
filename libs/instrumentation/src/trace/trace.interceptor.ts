import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, tap } from 'rxjs';
import { context, trace, propagation, defaultTextMapGetter } from '@opentelemetry/api';
import { NatsContext, RedisContext, TcpContext } from '@nestjs/microservices';
import { Request as ExpressReq } from 'express';
import { StoreContext } from './store-context';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class TraceInterceptor implements NestInterceptor {
  intercept(
    ctx: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const reflector = new Reflector();
    const except = reflector.get<boolean>('ExceptTracerInterceptor', ctx.getHandler());
    if (except) return next.handle();

    const _logger = new Logger(TraceInterceptor.name);

    const tracer = trace.getTracer('default');
    if (!tracer) return next.handle();

    const getRPCSpan = (ctx: ExecutionContext) => {
      const rpcContext = ctx
        .switchToRpc()
        .getContext<NatsContext | TcpContext | RedisContext>();

      const attributes: any = {};
      const methodKey = ctx.getHandler().name;
      let spanName = `rpc::${methodKey}`;

      if (rpcContext instanceof NatsContext) {
        attributes.type = 'nats';
        spanName = 'nats::' + (<NatsContext>rpcContext).getSubject();
      }

      const data = ctx.switchToRpc().getData();
      const parentCtx = propagation.extract(context.active(), data, defaultTextMapGetter);

      const currentSpan =
        trace.getSpan(context.active()) ??
        tracer.startSpan(spanName, undefined, parentCtx);

      currentSpan.setAttributes(attributes);

      _logger.log(`traceid: ${currentSpan.spanContext().traceId}`);

      StoreContext.cls.enterWith(new StoreContext(parentCtx));

      return currentSpan;
    };

    const getHTTPSpan = (ctx: ExecutionContext) => {
      const req: ExpressReq = ctx.switchToHttp().getRequest();
      // const res: ExpressRes = ctx.switchToHttp().getResponse();

      // ** instrumentation-http wll auto inject and extract parentCtx
      // const parentCtx = Array.isArray(req.headers.spanContext)
      //   ? req.headers.spanContext[0]
      //   : req.headers.spanContext;
      // const traceCtx = parentCtx
      //   ? trace.setSpanContext(context.active(), JSON.parse(parentCtx))
      //   : undefined;
      const host = req.hostname;
      const path = req.path;
      _logger.log(`httpSpan: ${host} ${path}`);
      const span = trace.getSpan(context.active()) ?? tracer.startSpan(host + path);
      span.updateName(`http-xxx`);
      _logger.log(`traceid: ${span.spanContext().traceId}`);
      span.setAttribute('request.body', JSON.stringify(req.body) || 'UNKNOW');
      span.setAttribute('request.query', JSON.stringify(req.query) || 'UNKNOW');

      return span;
    };

    const getGraphqlSpan = (ctx: ExecutionContext) => {
      const gqlContext = GqlExecutionContext.create(ctx);
      const { operation, fieldName, path } = gqlContext.getInfo();

      const req = gqlContext.getContext().req;
      const span = trace.getSpan(context.active()) || tracer.startSpan('default');

      span.setAttribute('request.body', JSON.stringify(req.body) || 'UNKNOW');
      span.setAttribute('request.query', JSON.stringify(req.query) || 'UNKNOW');
      span.setAttribute('type', 'graphql');

      const typeNames = ['Mutation', 'Query'];

      if (typeNames.includes(path.typename)) {
        span.updateName(`gql::${operation.operation}:${fieldName}`.toLocaleLowerCase());
      }
      if (typeNames.includes(path.prev?.typename)) {
        span.updateName(
          `gql::${operation.operation}:${path.prev.key}.${fieldName}`.toLocaleLowerCase(),
        );
      }

      _logger.log(`traceid: ${span.spanContext().traceId}`);

      return span;
    };

    const ctxType = ctx.getType<'http' | 'ws' | 'graphql' | 'rpc'>();

    const span =
      ctxType === 'rpc'
        ? getRPCSpan(ctx)
        : ctxType === 'graphql'
        ? getGraphqlSpan(ctx)
        : getHTTPSpan(ctx);

    if (ctxType === 'graphql') return next.handle();

    return next.handle().pipe(
      tap({
        next: () => {
          span.end();
        },
        error: () => {
          span.end();
        },
      }),
    );
  }
}
