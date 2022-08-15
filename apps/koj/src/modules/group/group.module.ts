import { ExecutionContext, Module } from '@nestjs/common';

import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { CasbinModule } from '../casbin/casbin.module';
import { GroupMutationResolver } from './group.mutation';
import { enforcerProvider } from '../casbin/enforcer.provider';
import { PrismaService } from '@/koj.prisma.service';

@Module({
  imports: [
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      }
    })
  ],
  providers: [GroupResolver, GroupMutationResolver, GroupService, PrismaService]
})
export class GroupModule {}
