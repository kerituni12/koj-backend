import { Resolver, Mutation } from '@nestjs/graphql';

import { Auth } from './models/auth.model';
import { AuthMutations } from './auth.type';

@Resolver(() => Auth)
export class AuthResolver {
  @Mutation(() => AuthMutations, { name: 'auth', nullable: true })
  authMutations() {
    return {};
  }
}
