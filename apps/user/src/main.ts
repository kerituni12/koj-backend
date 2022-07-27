// import './tracing';

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

import { UserModule } from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  const globalPrefix = "users";
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: ["nats://localhost:4222"],
      queue: "user_queue"
    }
  });

  await app.startAllMicroservices();

  const port = 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
