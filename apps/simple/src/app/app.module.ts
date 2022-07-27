import { Module, RequestMethod, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { ApppController } from '../appp/app.controller';
import { ApppService } from '../appp/app.service';
import { loggerMiddleware } from './logger.middleware';

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
    //   forRoutes: ['*', AppController],
    //   exclude: [{ method: RequestMethod.ALL, path: 'check' }],
    // }),
  ],
  controllers: [AppController, ApppController],
  providers: [AppService, ApppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   public configure(consumer: MiddlewareConsumer) {
//     consumer.apply(loggerMiddleware({})).forRoutes('*');
//   }
// }
