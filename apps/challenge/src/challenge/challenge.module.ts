import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' }
        // middlewares: [loggingMiddleware()],
      })
    })
  ],
  controllers: [AppController],
  providers: [ChallengeService]
})
export class AppModule {}
