import { CallHandler } from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { nanoid } from 'nanoid';

import { ApmService } from './apm.service';
import { ApmInterceptorConstructor, UserContextKeys } from '../interface';
import { GqlContextType, GqlExecutionContext, Context } from '@nestjs/graphql';
import { getInstance } from '../apm.util';

@Injectable()
export class ApmHttpUserContextInterceptor extends ApmInterceptorConstructor {
  constructor(
    protected readonly apmService: ApmService,
    protected readonly mapFunction?: (request: any) => UserContextKeys,
  ) {
    super(apmService);
  }

  public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const { body } = gqlContext.getContext().req;
      const { operation, fieldName } = gqlContext.getInfo();
      const apm = getInstance();
      const transaction = apm.currentTransaction;
      transaction.name = `gql-${operation.operation}-${fieldName}`;
      transaction.type = 'graphql';
      const uuid = nanoid();

      apm.setCustomContext({ body, uuid });

      // return parentType !== 'Query' && parentType !== 'Mutation';
    }

    const httpArgumentsHost = context.switchToHttp();
    const request = httpArgumentsHost.getRequest();

    if (this.mapFunction) {
      console.log('vo day');
      const { email, id, username } = this.mapFunction(request);

      this.apmService.setUserContext(id, email, username);
    }

    return next.handle();
  }
}
