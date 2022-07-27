import { Controller, Get, Req, Headers, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PinoLogger } from 'nestjs-pino';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) // private readonly logger: PinoLogger,
  {}

  @Get()
  getData() {
    // this.logger.assign({ userid: 1 });
    return this.appService.getData();
  }
}
