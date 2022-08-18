import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { CodeGeneratorController } from './code-generator.controller';
import { CodeGeneratorService } from './code-generator.service';

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [CodeGeneratorController],
  providers: [CodeGeneratorService],
})
export class CodeGeneratorModule {}
