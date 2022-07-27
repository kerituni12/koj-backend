import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Policy } from '@koj/generated/policy/policy.model';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { FindManyPolicyArgs } from '@koj/generated/policy/find-many-policy.args';
import { PolicyWhereUniqueInput } from '@koj/generated/policy/policy-where-unique.input';

import { PolicyMutations } from './policy.type';
import { PolicyService } from './policy.service';
import { Permissions } from '../permisions.decorator';
import { PolicyFindByRoleResourceInput } from './dto/find-by-role.dto';

@Resolver(() => Policy)
export class PolicyResolver {
  constructor(private readonly policyService: PolicyService) {}
  @Mutation(() => PolicyMutations, { name: 'policy', nullable: true })
  async casbinPolicyMutations() {
    return {};
  }

  @Query(() => [Policy], { name: 'policies' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'policy',
    noUniqueInput: true,
  })
  findMany(@Args() args: FindManyPolicyArgs, @Info() info: GraphQLResolveInfo) {
    const { select } = new PrismaSelect(info).value;
    return this.policyService.findMany(args, select);
  }

  @Query(() => Policy, { name: 'policy' })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'read',
    resource: 'policy',
  })
  findUnique(
    @Args('where') where: PolicyWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.policyService.findUnique(where, select);
  }

  @Query(() => Boolean)
  z_checkValidPolicyCondition(@Args('data') data: string) {
    return this.policyService.checkValidPolicyCondition(data);
  }
  @Query(() => [Policy])
  z_policyByRoleResource(
    @Args('where') where: PolicyFindByRoleResourceInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.policyService.findByRoleResource(where, select);
  }
}
