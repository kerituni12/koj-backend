import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { LoggerModule } from 'nestjs-pino';
import { SubmissionStatisticController } from './submission-statistic.controller';
import { SubmissionStatisticService } from './submission-statistic.service';

@Module({
  imports: [
    LoggerModule.forRoot(),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' }
        // middlewares: [loggingMiddleware()],
      })
    })
  ],
  controllers: [SubmissionController, SubmissionStatisticController],
  providers: [SubmissionService, SubmissionStatisticService]
})
export class AppModule {}
