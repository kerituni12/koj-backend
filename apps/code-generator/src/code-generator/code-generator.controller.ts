import { Span } from '@koj/instrumentation';
import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { Ctx, MessagePattern, NatsContext, Payload } from '@nestjs/microservices';

import { CodeGeneratorService } from './code-generator.service';

@Controller()
export class CodeGeneratorController {
  constructor(private readonly codeGeneratorService: CodeGeneratorService) {}

  @MessagePattern()
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_saveCode(@Payload() payload, @Ctx() ctx: NatsContext) {
    const { data, domainId, slug } = payload;
    return this.codeGeneratorService.saveCode(data, domainId, slug);
  }
}
