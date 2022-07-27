import { ExecutionContext, Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { CasbinModule } from '../casbin/casbin.module';
import { enforcerProvider } from '../casbin/enforcer.provider';
import { PolicyService } from '../casbin/policy/policy.service';
import { RoleGroupService } from '../casbin/role/role.service';

import { AppController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' },
        // middlewares: [loggingMiddleware()],
      }),
    }),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      },
    }),
  ],
  controllers: [AppController],
  providers: [RoleService, PolicyService, RoleGroupService],
})
export class AppModule {}
