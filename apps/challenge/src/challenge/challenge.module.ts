import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { LoggerModule } from '../../../koj/src/logger/logger.module';

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' },
        // middlewares: [loggingMiddleware()],
      }),
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [ChallengeService],
})
export class AppModule {}
