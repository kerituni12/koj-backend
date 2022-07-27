import { AuthActionVerb, AuthPossession, CustomAuthActionVerb } from './types';
import { ExecutionContext } from '@nestjs/common';

export interface Permission {
  resource: string;
  action: AuthActionVerb | CustomAuthActionVerb;
  possession?: AuthPossession;
  noUniqueInput?: boolean;
  isOwn?: (ctx: ExecutionContext) => boolean;
}
