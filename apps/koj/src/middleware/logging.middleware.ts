import { Prisma } from '@prisma/client';

export function loggingMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const before = Date.now();

    const result = await next(params);

    const after = Date.now();

    const identity = params.model
      ? `${params.model}.${params.action}`
      : `${params.action}`;

    console.log(`Prisma Query ${identity} took ${after - before}ms`);

    return result;
  };
}

export function minifyString(string: string) {
  return string.replace(/\s+/g, ' ').trim();
}
