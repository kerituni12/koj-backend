import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

import { DomainService } from './modules/domain/domain.service';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  constructor(private readonly domain: DomainService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    if (context.getType<GqlContextType>() === 'graphql') {
      console.log('attack domain');
      const gqlContext = GqlExecutionContext.create(context);
      const request = gqlContext.getContext().req;
      const info = gqlContext.getInfo();
      const parentType = info.parentType.name;
      if (parentType === 'Query') {
        const host = gqlContext.getContext().req.headers['x-domain'];
        const domain = await this.domain.getDomainFromHost(host);

        if (!domain) {
          return throwError(() => new NotFoundException('khong co domain id'));
        }
        request.domainId = domain.id;
      }
    }

    return next.handle();

    // Tam thoi khong can vi da filter o filterException
    // return next.handle().pipe(
    //   catchError((error) => {
    //     if (error instanceof PrismaClientInitializationError) {
    //       return throwError(() => new ServiceUnavailableException());
    //     }

    //     return throwError(() => new InternalServerErrorException(error.message));
    //   }),
    // );
  }
}
