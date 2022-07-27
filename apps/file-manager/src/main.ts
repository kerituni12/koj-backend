/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { FileManagerModule } from './file-manager.module';
import { AllExceptionsFilter } from './exceptions';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(FileManagerModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  const globalPrefix = 'fm';
  app.setGlobalPrefix(globalPrefix);
  app.use(cookieParser());
  const port = 3333;
  app.enableCors({ origin: true, credentials: true });

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
