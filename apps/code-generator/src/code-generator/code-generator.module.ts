import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { CodeGeneratorController } from './code-generator.controller';
import { CodeGeneratorService } from './code-generator.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot()],
  controllers: [CodeGeneratorController],
  providers: [CodeGeneratorService]
})
export class CodeGeneratorModule {}
