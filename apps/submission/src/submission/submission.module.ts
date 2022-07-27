import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";

import { SubmissionService } from "./submission.service";
import { SubmissionController } from "./submission.controller";
import { LoggerModule } from "../../../koj/src/logger/logger.module";
import { SubmissionStatisticController } from "./submission-statistic.controller";
import { SubmissionStatisticService } from "./submission-statistic.service";

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ["info", "query"], errorFormat: "minimal" }
        // middlewares: [loggingMiddleware()],
      })
    }),
    LoggerModule
  ],
  controllers: [SubmissionController, SubmissionStatisticController],
  providers: [SubmissionService, SubmissionStatisticService]
})
export class AppModule {}
