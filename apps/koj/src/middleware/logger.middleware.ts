import { PinoLogger } from 'nestjs-pino';
import { storage, Store } from 'nestjs-pino/storage';
import { pinoHttp } from 'pino-http';

export function loggerMiddleware(pinoHttpConfig) {
  return (req, res, next) => {
    console.log('middleware');
    const pinoMw = pinoHttp(pinoHttpConfig as any);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    PinoLogger.root = pinoMw.logger;

    pinoMw(req, res, () => {
      storage.run(new Store(req.log), () => {
        next();
      });
    });
  };
}
