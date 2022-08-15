import path = require('path');
import { Module } from '@nestjs/common';

import { AdapterService } from '@koj/adapter';

import { CasbinModule } from '../casbin.module';
import { RoleGroupService } from './role.service';
import { RoleGroupResolver } from './role.resolver';
import { enforcerProvider } from '../enforcer.provider';
import { RoleGroupMutationResolver } from './ role.mutation';
import { PrismaService } from '@/koj.prisma.service';

@Module({
  imports: [
    CasbinModule.register({
      model: process.env.MODEL_CONFIG_PATH,
      policy: AdapterService.newAdapter(),
      userFromContext: (ctx) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user && request.createdById;
      },
      enforcerProvider: enforcerProvider
    })
  ],
  providers: [
    RoleGroupResolver,
    RoleGroupMutationResolver,
    RoleGroupService,
    PrismaService
  ],
  exports: [RoleGroupResolver, RoleGroupMutationResolver, RoleGroupService]
})
export class RoleGroupModule {}
