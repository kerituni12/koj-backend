import { Controller, Get, Req, Headers, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PinoLogger } from 'nestjs-pino';

@Controller('/role')
export class RoleController {
  constructor(private readonly logger: PinoLogger) {}

  @Get()
  getData() {
    this.logger.info('hihi');
  }
}
