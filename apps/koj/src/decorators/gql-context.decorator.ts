import { GqlExecutionContext } from '@nestjs/graphql';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GqlContext = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const gqlCtx = GqlExecutionContext.create(ctx);
  const request = gqlCtx.getContext().req;
  return request.context;
});
