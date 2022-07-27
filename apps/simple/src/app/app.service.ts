import { Injectable, Logger } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  // constructor(
  //   // @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger
  // ) {}
  getData(): { message: string } {
    this.logger.log('hello');
    return { message: 'Welcome to simple!' };
  }
}
