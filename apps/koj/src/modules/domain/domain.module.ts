import { PrismaService } from '@/koj.prisma.service';
import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

@Module({
  providers: [DomainService, PrismaService],
  exports: [DomainService]
})
export class DomainModule {}
