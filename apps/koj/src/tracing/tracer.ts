import { trace } from '@opentelemetry/api';

export const tracer = trace.getTracer('graphql-api-gateway', '2.2.2');
console.log('🚀 ~ file: tracer.ts ~ line 4 ~ tracer', tracer);
