import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, ResolveField, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from '@koj/common/guards';
import { RoleGroup } from '@koj/generated/role-group/role-group.model';
import { RoleGroupCreateInput } from '@koj/generated/role-group/role-group-create.input';
import { RoleGroupUpdateInput } from '@koj/generated/role-group/role-group-update.input';
import { RoleGroupWhereUniqueInput } from '@koj/generated/role-group/role-group-where-unique.input';

import { RoleMutations } from './role.type';
import { RoleGroupService } from './role.service';

@Resolver(() => RoleMutations)
export class RoleGroupMutationResolver {
  constructor(private readonly roleService: RoleGroupService) {}

  @ResolveField(() => Boolean)
  @UseGuards(GqlAuthGuard)
  createRoleGroup(@Args('data') data: RoleGroupCreateInput, @Context() context) {
    data.domainId = context.req.user.domainId;
    return this.roleService.createRole(data);
  }

  @ResolveField(() => RoleGroup)
  updateRoleGroup(
    @Args('data') data: RoleGroupUpdateInput,
    @Args('where') where: RoleGroupWhereUniqueInput,
  ) {
    return this.roleService.update(data, where);
  }

  @ResolveField(() => RoleGroup)
  removeRoleGroup(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.remove(id);
  }
}
