import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';
import { PinoLogger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: PinoLogger,
  ) {}

  @Get('/')
  getData(@Req() req) {
    this.logger.info('hello controllere');
    return this.appService.getData();
  }
}
