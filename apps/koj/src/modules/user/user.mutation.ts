import { PrismaSelect } from '@paljs/plugins';
import { ClientNats } from '@nestjs/microservices';
import { Inject, UseGuards } from '@nestjs/common';
import { Args, Int, Resolver, ResolveField, Info } from '@nestjs/graphql';

import { USER_CREATE } from '@koj/common/constants';
import { User } from '@koj/generated/user/user.model';
import { RPCTraceClientProxy } from '@koj/instrumentation';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { Permissions } from '@/modules/casbin/permisions.decorator';
import { UserCreateInput } from '@koj/generated/user/user-create.input';
import { UserUpdateInput } from '@koj/generated/user/user-update.input';
import { UserWhereUniqueInput } from '@koj/generated/user/user-where-unique.input';

import { GqlContext } from '@/decorators/gql-context.decorator';

import { UserMutations } from './user.type';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => UserMutations)
export class UserMutationResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientNats,
  ) {}

  @ResolveField(() => User)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'create', resource: 'user' })
  createUser(
    @Args('data') data: UserCreateInput,
    @Info() info: GraphQLResolveInfo,
    @GqlContext() context,
  ) {
    const defaultFields = { User: { id: true } };
    const { select } = new PrismaSelect(info, { defaultFields }).value;
    Object.assign(data, context.data);
    return this.traceClient.send(this.userClient, USER_CREATE, { data, select });
  }

  @ResolveField(() => User)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'edit', resource: 'user' })
  updateUser(
    @Args('data') data: UserUpdateInput,
    @Args('where') where: UserWhereUniqueInput,
    @GqlContext() context,
  ) {
    Object.assign(data, context.data);
    return this.traceClient.send(this.userClient, USER_CREATE, { data, where });
  }

  @ResolveField(() => User)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'delete', resource: 'user' })
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.traceClient.send(this.userClient, USER_CREATE, { id });
  }
}
