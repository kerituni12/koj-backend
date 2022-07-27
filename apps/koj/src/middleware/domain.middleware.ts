import { DomainService } from '@/modules/domain/domain.service';
import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';

@Injectable()
export class DomainMiddleware implements NestMiddleware {
  constructor(private readonly domain: DomainService) {}
  async use(req, res, next) {
    const host = req.headers['x-domain'] || req.hostname;
    const domain = await this.domain.getDomainFromHost(host);

    if (!domain) {
      throw new NotFoundException('khong co domain id');
    }
    req.domainId = domain.id;
    next();
  }
}
