import path = require('path');
import * as casbin from 'casbin';
import { context, trace } from '@opentelemetry/api';

import { AdapterService } from '@koj/adapter';

import { ADAPTER_ENFORCER } from '@koj/common/constants';

export const enforcerProvider = {
  provide: ADAPTER_ENFORCER,
  useFactory: async () => {
    const tracer = trace.getTracer('auth');
    const span = tracer.startSpan('bootstrap.policy', {});
    return context.with(trace.setSpan(context.active(), span), async () => {
      const policyAdapter = await AdapterService.newAdapter();
      const e = await casbin.newEnforcer();
      e.initWithAdapter(path.resolve('apps/koj/model.conf'), policyAdapter);
      span.end();
      return e;
    });
  },
};
