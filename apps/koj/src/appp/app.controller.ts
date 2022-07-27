import { Controller, Get, Req, Headers, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PinoLogger } from 'nestjs-pino';

import { ApppService } from './app.service';

@Controller('/hi')
export class ApppController {
  constructor(
    private readonly appService: ApppService,
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  getData() {
    this.logger.info('hihi');
    return this.appService.getData();
  }
}
