import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Args, Info, ResolveField, Resolver } from '@nestjs/graphql';

import { Policy } from '@koj/generated/policy/policy.model';
import { GqlAuthGuard, GqlPolicyGuard } from '@koj/common/guards';
import { PolicyCreateInput } from '@koj/generated/policy/policy-create.input';
import { PolicyUpdateInput } from '@koj/generated/policy/policy-update.input';
import { PolicyWhereUniqueInput } from '@koj/generated/policy/policy-where-unique.input';

import { PolicyMutations } from './policy.type';
import { PolicyService } from './policy.service';
import { Permissions } from '../permisions.decorator';

@Resolver(() => PolicyMutations)
export class PolicyMutationResolver {
  constructor(private readonly policyService: PolicyService) {}
  @ResolveField(() => Policy)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'create',
    resource: 'policy',
  })
  createPolicy(@Args('data') data: PolicyCreateInput) {
    return this.policyService.createPolicy(data);
  }

  @ResolveField(() => [Policy])
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'create',
    resource: 'policy',
  })
  createCasbinPolicies(
    @Args({ name: 'data', type: () => [PolicyCreateInput] })
    data: PolicyCreateInput[],
  ) {
    return this.policyService.createPolicies(data);
  }

  @ResolveField(() => Policy)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'edit',
    resource: 'policy',
  })
  updatePolicy(
    @Args('data') data: PolicyUpdateInput,
    @Args('where') where: PolicyWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.policyService.update(data, where, select);
  }

  @ResolveField(() => Policy)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: 'delete',
    resource: 'policy',
  })
  removePolicy(
    @Args('where') where: PolicyWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.policyService.remove(where, select);
  }
}
