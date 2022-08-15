import { ExecutionContext, Module } from '@nestjs/common';

import { LoggerModule } from '@/logger/logger.module';
import { RoleGroupModule } from '@/modules/casbin/role/role.module';
import { PolicyModule } from '@/modules/casbin/policy/policy.module';

import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { CasbinModule } from '../casbin/casbin.module';
import { RoleMutationsResolver } from './role.mutation';
import { enforcerProvider } from '../casbin/enforcer.provider';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { natsConfig } from '@/configs/nats.config';
import { RPCTraceClientProxy } from '@koj/instrumentation';
import { PrismaService } from '@/koj.prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ROLE_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: 'role_queue'
        }
      }
    ]),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      }
    }),
    PolicyModule,
    RoleGroupModule,
    LoggerModule
  ],

  providers: [
    RoleResolver,
    RoleMutationsResolver,
    RoleService,
    RPCTraceClientProxy,
    PrismaService
  ],
  exports: [RoleResolver, RoleMutationsResolver, RoleService]
})
export class RoleModule {}
