// import { Logger } from '@nestjs/common';
import { Inject, UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';

import { Role } from '@koj/generated/role/role.model';
import { RoleMutations } from '@/modules/casbin/role/role.type';
import { Permissions } from '@/modules/casbin/permisions.decorator';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { FindManyRoleArgs } from '@koj/generated/role/find-many-role.args';
import { RoleWhereUniqueInput } from '@koj/generated/role/role-where-unique.input';

import { RoleService } from './role.service';
import { Logger } from '@/logger/logger.service';
import { RPCTraceClientProxy } from '@koj/instrumentation';
import { ClientNats } from '@nestjs/microservices';
import { ROLE_FIND_MANY, ROLE_FIND_UNIQUE } from '@koj/common/constants';

@Resolver(() => Role)
export class RoleResolver {
  constructor(
    private readonly roleService: RoleService,
    private readonly logger: Logger,
    @Inject('ROLE_SERVICE') private readonly roleClient: ClientNats,
    private traceClient: RPCTraceClientProxy,
  ) {
    // this.logger.setContext(RoleResolver.name);
  }

  @Mutation(() => RoleMutations, { name: 'role', nullable: true })
  roleMutations() {
    return {};
  }

  @Query(() => [Role], { name: 'roles' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'role',
  })
  async findMany(@Args() args: FindManyRoleArgs, @Info() info: GraphQLResolveInfo) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(this.roleClient, ROLE_FIND_MANY, { args, select });
  }

  @Query(() => Role, { name: 'role' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'role',
  })
  findUnique(
    @Args('where') where: RoleWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(this.roleClient, ROLE_FIND_UNIQUE, { where, select });
  }
}
