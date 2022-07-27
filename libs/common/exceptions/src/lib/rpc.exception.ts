import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import { context, trace } from '@opentelemetry/api';
import { StoreContext } from '@koj/instrumentation';

const tracer = trace.getTracer('rpc-trace', '2.2.2');

@Catch(RpcException)
export class AllRpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    return tracer.startActiveSpan(
      'rpc-exception',
      {},
      StoreContext?.currentContext?.context,
      (span) => {
        span.recordException(exception);
        span.end();
        return throwError(() => exception.message);
      },
    );
  }
}
