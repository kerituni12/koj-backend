// import './tracing';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './submission/submission.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'submission';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL],
      queue: 'submission_queue'
    }
  });

  await app.startAllMicroservices();

  const port = process.env.PORT || 3005;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
