// import './tracing';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './comment/comment.module';

async function bootstrap() {
  const globalPrefix = 'comments';
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL],
      queue: 'comment_queue'
    }
  });

  await app.startAllMicroservices();

  const port = process.env.PORT || 3004;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
