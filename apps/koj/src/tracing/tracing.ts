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
import { NetInstrumentation } from '@opentelemetry/instrumentation-net';

import {
  ExpressInstrumentation,
  ExpressLayerType,
} from '@opentelemetry/instrumentation-express';

import {
  GraphQLInstrumentation,
  NestInstrumentation,
  RpcTraceContextPropagator,
} from '@koj/instrumentation';

// Using to debug otel
// import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

const tracerProvider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'graphql-service',
    'service.node.name': 'haha',
  }),
});

// tracerProvider.addSpanProcessor(
//   new BatchSpanProcessor(new OTLPTraceExporter(), {
//     maxQueueSize: 1000,
//     scheduledDelayMillis: 5000,
//   }),
// );
// tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Dung de register propagator va context manager
// Mac dinh khi register se dung w3c propagator
tracerProvider.register({ propagator: new RpcTraceContextPropagator() });

registerInstrumentations({
  tracerProvider: tracerProvider,
  instrumentations: [
    // Duplicate with Nest-otel, if not use nest otel must enable to work with express instrument
    new HttpInstrumentation(),

    new ExpressInstrumentation({
      ignoreLayersType: [
        ExpressLayerType.MIDDLEWARE,
        ExpressLayerType.ROUTER,
        ExpressLayerType.ROUTER,
      ],
    }),
    //Not working
    new GraphQLInstrumentation({
      allowValues: true,
      depth: 5,
      mergeItems: true,
    }),
    new PrismaClientInstrumentation(),
    new NestInstrumentation(),
    // new NetInstrumentation(),

    // Not Working using formatter of pino instead
    // new PinoInstrumentation(),
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
