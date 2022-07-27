import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class ApppService {
  // constructor() // @InjectPinoLogger(ApppService.name) private readonly logger: PinoLogger
  // {}
  getData(): { message: string } {
    // this.logger.info('hiii');
    return { message: 'hiiii!' };
  }
}
