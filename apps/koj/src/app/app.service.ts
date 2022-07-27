import { tracer } from '@/tracing/tracer';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { trace, context } from '@opentelemetry/api';

@Injectable()
export class AppService {
  getData(): { message: string; result: any } {
    // throw new NotImplementedException({ message: 'heelo', level: 1 });
    const result = this.testError(1);
    return { message: 'hello', result };
    // return { message: 'Welcome to koj!' };
  }

  testError(a) {
    return tracer.startActiveSpan('hello', (span) => {
      try {
        if (a) {
          const error = new NotImplementedException({ message: 'test error' });
          span.recordException(error);
          throw error;
        }
        return 'ok';
      } finally {
        span.end();
      }
    });
  }
}
