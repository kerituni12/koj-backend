import { TraceService } from 'nestjs-otel';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { ClientNats } from '@nestjs/microservices';
import { Inject, UseGuards } from '@nestjs/common';
import { Args, Resolver, ResolveField, Info } from '@nestjs/graphql';

import { RoleMutations } from '@/modules/casbin/role/role.type';
import { Permissions } from '@/modules/casbin/permisions.decorator';

import { Role } from '@koj/generated/role/role.model';
import { RPCTraceClientProxy } from '@koj/instrumentation';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { RoleUpdateInput } from '@koj/generated/role/role-update.input';
import { ROLE_CREATE, ROLE_DELETE, ROLE_UPDATE } from '@koj/common/constants';
import { RoleWhereUniqueInput } from '@koj/generated/role/role-where-unique.input';

import { RoleService } from './role.service';
import { RoleCreateInput } from './dto/role-create.input';

@Resolver(() => RoleMutations)
export class RoleMutationsResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    private readonly roleService: RoleService,
    private readonly traceService: TraceService,
    @Inject('ROLE_SERVICE') private readonly commentClient: ClientNats,
  ) {}

  @ResolveField(() => Role)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'create', resource: 'role' })
  createRole(@Args('data') data: RoleCreateInput, @Info() info: GraphQLResolveInfo) {
    const select = new PrismaSelect(info).value;
    return this.traceClient.send(this.commentClient, ROLE_CREATE, { data, select });
  }

  @ResolveField(() => Role)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'edit', resource: 'role' })
  updateRole(
    @Args('data') data: RoleUpdateInput,
    @Args('where') where: RoleWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    const payload = { data, where, select };
    return this.traceClient.send(this.commentClient, ROLE_UPDATE, payload);
  }

  @ResolveField(() => Role)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'delete', resource: 'role' })
  removeRole(
    @Args('where') where: RoleWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(this.commentClient, ROLE_DELETE, { where, select });
  }
}
