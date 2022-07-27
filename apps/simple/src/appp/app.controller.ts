import { Controller, Get, Req, Headers, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PinoLogger } from 'nestjs-pino';

import { ApppService } from './app.service';

@Controller({ scope: Scope.REQUEST, path: '/hi' })
export class ApppController {
  constructor(
    private readonly appService: ApppService,
  ) // private readonly logger: PinoLogger,
  {}

  @Get()
  getData() {
    // this.logger.assign({ userid: 1 });
    return this.appService.getData();
  }
}
