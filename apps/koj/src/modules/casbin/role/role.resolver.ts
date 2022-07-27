import { Mutation, Resolver } from '@nestjs/graphql';

import { RoleGroup } from '@koj/generated/role-group/role-group.model';

import { RoleMutations } from './role.type';
import { RoleGroupService } from './role.service';

@Resolver(() => RoleGroup)
export class RoleGroupResolver {
  constructor(private readonly roleService: RoleGroupService) {}
  @Mutation(() => RoleMutations, { name: 'role', nullable: true })
  async casbinPolicyMutations() {
    return {};
  }
}
