import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Inject, UseGuards } from "@nestjs/common";
import { ClientNats } from "@nestjs/microservices";
import { Args, Info, ResolveField, Resolver } from "@nestjs/graphql";

import {
  CHALLENGE_CREATE,
  CHALLENGE_DELETE,
  CHALLENGE_SUBMIT,
  CHALLENGE_UPDATE,
  SUBMISSION_SUBMIT
} from "@koj/common/constants";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";
import { Challenge } from "@koj/generated/challenge/challenge.model";
import { ChallengeCreateInput } from "@koj/generated/challenge/challenge-create.input";
import { ChallengeUpdateInput } from "@koj/generated/challenge/challenge-update.input";

import { GqlContext } from "@/decorators/gql-context.decorator";

import { ChallengeMutations } from "./challenge.type";
import { Permissions } from "../casbin/permisions.decorator";
import {
  ChallengeSubmitInput,
  ChallengeSubmitResult,
  KChallengeWhereUniqueInput
} from "@koj/common/dto";

@Resolver(() => ChallengeMutations)
export class ChallengeMutationsResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("CHALLENGE_SERVICE") private readonly commentClient: ClientNats,
    @Inject("SUBMISSION_SERVICE") private readonly submissionClient: ClientNats
  ) {}

  @ResolveField(() => Challenge)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "create", resource: "challenge" })
  createChallenge(
    @Args("data") data: ChallengeCreateInput,
    @Info() info,
    @GqlContext() context
  ) {
    const select = new PrismaSelect(info).value;
    Object.assign(data, context.data);
    return this.traceClient.send(this.commentClient, CHALLENGE_CREATE, {
      data,
      select
    });
  }

  @ResolveField(() => Challenge)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "edit", resource: "challenge" })
  updateChallenge(
    @Args("data") data: ChallengeUpdateInput,
    @Args("where") where: KChallengeWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
    @GqlContext() context
  ) {
    const { select } = new PrismaSelect(info).value;
    const payload = { data, where, select };
    Object.assign(data, context.data);
    return this.traceClient.send(this.commentClient, CHALLENGE_UPDATE, payload);
  }

  @ResolveField(() => Challenge)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "delete", resource: "challenge" })
  removeChallenge(
    @Args("where") where: KChallengeWhereUniqueInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(this.commentClient, CHALLENGE_DELETE, {
      where,
      select
    });
  }

  @ResolveField(() => ChallengeSubmitResult)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "read", resource: "challenge" })
  submitChallenge(
    @Args("data") data: ChallengeSubmitInput,
    @GqlContext() context
  ) {
    Object.assign(data, context.data);
    return this.traceClient.send(this.submissionClient, SUBMISSION_SUBMIT, {
      data,
      context: { data: context.data }
    });
  }
}
