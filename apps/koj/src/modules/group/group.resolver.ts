import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Group } from '@koj/generated/group/group.model';
import { FindManyGroupArgs } from '@koj/generated/group/find-many-group.args';
import { Permissions } from '@/modules/casbin/permisions.decorator';
import { GroupWhereUniqueInput } from '@koj/generated/group/group-where-unique.input';

import { GroupMutations } from './group.type';
import { GroupService } from './group.service';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';

@Resolver(() => Group)
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => GroupMutations, { name: 'group', nullable: true })
  groupMutations() {
    return {};
  }

  @Query(() => [Group], { name: 'groups' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'group',
    noUniqueInput: true,
  })
  groups(@Args() args: FindManyGroupArgs, @Info() info: GraphQLResolveInfo) {
    const { select } = new PrismaSelect(info).value;
    return this.groupService.findMany(args, select);
  }

  @Query(() => Group, { name: 'group' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'group',
  })
  findUnique(
    @Args('where') where: GroupWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.groupService.findUnique(where, select);
  }
}
