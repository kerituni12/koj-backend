import { ExecutionContext } from '@nestjs/common';

import { AuthActionVerb, AuthPossession, CustomAuthActionVerb } from './types';

export interface Permission {
  resource: string;
  action: AuthActionVerb | CustomAuthActionVerb;
  possession?: AuthPossession;
  noUniqueInput?: boolean;
  isOwn?: (ctx: ExecutionContext) => boolean;
}
