import path = require('path');
import { Module } from '@nestjs/common';

import { AdapterService } from '@koj/adapter';

import { CasbinModule } from '../casbin.module';
import { RoleGroupService } from './role.service';
import { RoleGroupResolver } from './role.resolver';
import { enforcerProvider } from '../enforcer.provider';
import { RoleGroupMutationResolver } from './ role.mutation';

@Module({
  imports: [
    CasbinModule.register({
      model: path.resolve('apps/koj/model.conf'),
      policy: AdapterService.newAdapter(),
      userFromContext: (ctx) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user && request.createdById;
      },
      enforcerProvider: enforcerProvider,
    }),
  ],
  providers: [RoleGroupResolver, RoleGroupMutationResolver, RoleGroupService],
  exports: [RoleGroupResolver, RoleGroupMutationResolver, RoleGroupService],
})
export class RoleGroupModule {}
