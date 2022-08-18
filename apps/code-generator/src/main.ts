// import './tracing';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { CodeGeneratorModule } from './code-generator/code-generator.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeGeneratorModule);

  const globalPrefix = 'code-generators';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL],
      queue: 'code-generator_queue'
    }
  });

  await app.startAllMicroservices();

  const port = process.env.PORT || 3010;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
