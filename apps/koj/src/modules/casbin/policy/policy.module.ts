import { ExecutionContext, Module } from '@nestjs/common';

import { CasbinModule } from '../casbin.module';
import { PolicyService } from './policy.service';
import { enforcerProvider } from '../enforcer.provider';
import { PolicyResolver } from './policy.resolver';
import { PolicyMutationResolver } from './policy.mutation';

@Module({
  providers: [PolicyResolver, PolicyMutationResolver, PolicyService],
  imports: [
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      },
    }),
  ],
  exports: [PolicyResolver, PolicyMutationResolver, PolicyService],
})
export class PolicyModule {}
