import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { ClientNats } from '@nestjs/microservices';
import { Inject, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';

import { User } from '@koj/generated/user/user.model';
import { RPCTraceClientProxy } from '@koj/instrumentation';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { Permissions } from '@/modules/casbin/permisions.decorator';
import { FindManyUserArgs } from '@koj/generated/user/find-many-user.args';
import {
  USER_FIND_MANY,
  USER_FIND_UNIQUE_BY_USERNAME
} from '@koj/common/constants';

import { GqlContext } from '@/decorators/gql-context.decorator';
import { DomainId } from '@/decorators/gql-domain-id.decorator';

import { UserMutations } from './user.type';
import { UserPublic } from './dto/user-public.model';
import { KUserWhereUniqueInput } from './dto/user-where-unique.input';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientNats,
    private traceClient: RPCTraceClientProxy
  ) {}

  @Mutation(() => UserMutations, { name: 'user', nullable: true })
  userMutation() {
    return {};
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: 'read', resource: 'user' })
  users(
    @Args() args: FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @GqlContext() context
  ) {
    const { select } = new PrismaSelect(info).value;
    args.where = args.where || {};
    args.where.domainId = context.where.domainId;
    return this.traceClient.send(this.userClient, USER_FIND_MANY, {
      args,
      select
    });
  }

  @Query(() => UserPublic, { name: 'user_public', nullable: true })
  getUserByUsername(
    @Args('where') where: KUserWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
    @DomainId() domainId
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(
      this.userClient,
      USER_FIND_UNIQUE_BY_USERNAME,
      {
        where: { username_domainId: { username: where.username, domainId } },
        select
      }
    );
  }
}
