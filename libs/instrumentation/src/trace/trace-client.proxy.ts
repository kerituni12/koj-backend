import { lastValueFrom } from 'rxjs';
import { Injectable, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { context, defaultTextMapSetter, propagation, trace } from '@opentelemetry/api';

@Injectable()
export class RPCTraceClientProxy {
  async send(client: ClientProxy, pattern, payload) {
    const span = trace.getSpan(context.active());
    if (span?.spanContext()) {
      propagation.inject(context.active(), payload, defaultTextMapSetter);
    }
    try {
      const res = await lastValueFrom(client.send(pattern, payload));
      return res;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
