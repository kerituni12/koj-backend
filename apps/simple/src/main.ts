/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import { Logger } from '@nestjs/common';
// import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { propagation } from '@opentelemetry/api';
import { SelectivePropagator } from 'opentelemetry-propagator-selective';
console.log('propagation registor', propagation.fields());
import { AppModule } from './app/app.module';
import { loggerMiddleware } from './app/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const globalPrefix = '/api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  app.use(loggerMiddleware(null));
  await app.listen(port);
  // app.useLogger(app.get(Logger));
  // Logger.log(
  //   `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  // );
}

bootstrap();
