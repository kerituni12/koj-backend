import { Module, RequestMethod } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule, PinoLogger } from 'nestjs-pino';

import { logger } from './logger.config';
import { Logger } from './logger.service';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        logger: logger,
        autoLogging: false,
        customProps: function (req: any) {
          return {
            ip: req.userIp || ''
          };
        }
      },
      forRoutes: ['*'],
      exclude: [{ method: RequestMethod.ALL, path: '/health' }]
    })
  ],
  providers: [Logger, PinoLogger],
  exports: [Logger, PinoLogger]
})
export class LoggerModule {}
