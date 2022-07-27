import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Args, Info, Resolver, ResolveField } from '@nestjs/graphql';

import { Group } from '@koj/generated/group/group.model';
import { GroupCreateInput } from '@koj/generated/group/group-create.input';
import { GroupUpdateInput } from '@koj/generated/group/group-update.input';
import { GroupWhereUniqueInput } from '@koj/generated/group/group-where-unique.input';

import { GroupMutations } from './group.type';
import { GroupService } from './group.service';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { Permissions } from '../casbin/permisions.decorator';

@Resolver(() => GroupMutations)
export class GroupMutationResolver {
  constructor(private readonly groupService: GroupService) {}

  @ResolveField(() => Group)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'create',
    resource: 'group',
    noUniqueInput: true,
  })
  createGroup(@Args('data') data: GroupCreateInput) {
    return this.groupService.create(data);
  }
  @ResolveField(() => Group)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'edit',
    resource: 'group',
  })
  async updateGroup(
    @Args('data') data: GroupUpdateInput,
    @Args('where') where: GroupWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.groupService.update(data, where, select);
  }

  @ResolveField(() => Group)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'delete',
    resource: 'group',
  })
  removeGroup(@Args('where') where: GroupWhereUniqueInput) {
    return this.groupService.remove(where);
  }
}
