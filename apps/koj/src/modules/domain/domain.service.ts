import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { Domain } from '@koj/generated/domain/domain.model';
import { PrismaService } from '@/koj.prisma.service';

@Injectable()
export class DomainService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    private prisma: PrismaService
  ) {}

  async getDomainFromHost(host: string): Promise<Domain | null> {
    if (!host) return null;

    const domainCahe = await this.redis.get('domain:' + host);
    if (domainCahe) return JSON.parse(domainCahe);

    const domain = await this.prisma.domain.findFirst({
      where: { domain: host }
    });
    await this.redis.setex('domain:' + host, 3600, JSON.stringify(domain));
    return domain;
  }
}
