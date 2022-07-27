import { PinoLogger } from 'nestjs-pino';
// import { storage, Store } from 'nestjs-pino/storage';
import { pinoHttp } from 'pino-http';

export function loggerMiddleware(pinoHttpConfig) {
  return (req, res, next) => {
    console.log('middleware');
    next();
    // const pinoMw = pinoHttp(pinoHttpConfig as any);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // PinoLogger.root = pinoMw.logger;
    // pinoMw(req, res, () => {
    //   storage.run(new Store(req.log), () => {
    //     next();
    //   });
    // });
  };
}

// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }
