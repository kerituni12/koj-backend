// Monkeypatching must at top level of code
// import './tracing';

import { BadRequestException, Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import { PrismaService } from "nestjs-prisma";
import { ConfigService } from "@nestjs/config";

import { AppModule } from "./app/app.module";
import { NestConfig } from "./interfaces/config.interface";
import { AllExceptionsFilter } from "./exceptions/exceptions";
import { TraceInterceptor } from "@koj/instrumentation";
import { ValidationError } from "class-validator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const configService = app.get(ConfigService);
  const globalPrefix =
    configService.get<NestConfig["globalPrefix"]>("app.globalPrefix");

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        // Get first property from first error
        return new BadRequestException(
          Object.values(validationErrors[0].constraints)[0]
        );
      }
    })
  );
  app.use(cookieParser());

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const appConfig = configService.get<NestConfig>("app");
  app.useGlobalInterceptors(new TraceInterceptor());
  // Cors
  if (appConfig.cors.enabled) {
    app.enableCors({ origin: true, credentials: true });
  }

  await app.listen(appConfig.port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${appConfig.port}/${globalPrefix}`
  );
}

bootstrap();
