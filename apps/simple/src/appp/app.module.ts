import { Module, RequestMethod } from '@nestjs/common';

import { ApppController } from './app.controller';
import { ApppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    // LoggerModule.forRoot({
    //   pinoHttp: [
    //     {
    //       name: 'add some name to every JSON line',
    //       level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    //       // install 'pino-pretty' package in order to use the following option
    //       transport:
    //         process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
    //       useLevelLabels: true,
    //       autoLogging: false,
    //       // and all the others...
    //     },
    //   ],
    //   forRoutes: ['*', ApppController],
    //   exclude: [{ method: RequestMethod.ALL, path: 'check' }],
    // }),
  ],
  controllers: [ApppController],
  providers: [ApppService],
})
export class ApppModule {}
