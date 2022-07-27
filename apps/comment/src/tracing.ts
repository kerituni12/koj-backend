/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from '@nestjs/common';
import { trace } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { PrismaClientInstrumentation } from 'opentelemetry-instrumentation-prisma-client';

import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import {
  registerInstrumentations,
  InstrumentationOption,
} from '@opentelemetry/instrumentation';
// import { MongoDBInstrumentation } from '@opentelemetry/instrumentation-mongodb';
// import { MongooseInstrumentation } from 'opentelemetry-instrumentation-mongoose';
import {
  GraphQLInstrumentation,
  NestInstrumentation,
  RpcTraceContextPropagator,
  MongooseInstrumentation,
} from '@koj/instrumentation';

// Using to debug otel
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

const tracerProvider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'comment-service',
    'service.node.name': 'comment',
  }),
});

tracerProvider.addSpanProcessor(
  new BatchSpanProcessor(new OTLPTraceExporter(), {
    maxQueueSize: 1000,
    scheduledDelayMillis: 5000,
  }),
);
// tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
tracerProvider.register({ propagator: new RpcTraceContextPropagator() });

registerInstrumentations({
  tracerProvider: tracerProvider,
  instrumentations: [
    // new MongoDBInstrumentation({
    //   // see under for available configuration
    // }),
    new MongooseInstrumentation({
      // see under for available configuration
    }),
    // Duplicate with Nest-otel, if not use nest otel must enable to work with express instrument
    // new HttpInstrumentation(),
  ] as InstrumentationOption[],
});

const gracefulShutdown = () => {
  Logger.log('Closing server and ending process...');

  const promises: Promise<unknown>[] = [];
  if (tracerProvider) {
    promises.push(tracerProvider.shutdown());
  }

  // Todo implement meterProvider
  // if (meterProvider) {
  //   promises.push(meterProvider.shutdown());
  // }

  return (
    Promise.all(promises)
      // return void instead of the array from Promise.all
      .then(() => process.exit())
  );
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

export const tracer = trace.getTracer('comment', '2.2.2');
