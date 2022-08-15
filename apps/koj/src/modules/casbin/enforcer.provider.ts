import path = require('path');
import * as casbin from 'casbin';
import { context, trace } from '@opentelemetry/api';

import { tracer } from '@/tracing/tracer';
import { AdapterService } from '@koj/adapter';

import { ADAPTER_ENFORCER } from './casbin.constant';

export const enforcerProvider = {
  provide: ADAPTER_ENFORCER,
  useFactory: async () => {
    const span = tracer.startSpan('bootstrap.policy', {});
    return context.with(trace.setSpan(context.active(), span), async () => {
      const policyAdapter = await AdapterService.newAdapter();
      const e = await casbin.newEnforcer();
      e.initWithAdapter(process.env.MODEL_CONFIG_PATH, policyAdapter);
      span.end();
      return e;
    });
  }
};
