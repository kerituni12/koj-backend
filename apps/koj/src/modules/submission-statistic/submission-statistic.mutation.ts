import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Inject, UseGuards } from "@nestjs/common";
import { ClientNats } from "@nestjs/microservices";
import { Args, Info, ResolveField, Resolver } from "@nestjs/graphql";

import { SUBMISSION_DELETE } from "@koj/common/constants";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";
import { SubmissionStatistic } from "@koj/generated/submission-statistic/submission-statistic.model";

import { SubmissionStatisticMutations } from "./submission-statistic.type";
import { Permissions } from "../casbin/permisions.decorator";
import { SubmissionStatisticWhereUniqueInput } from "@koj/generated/submission-statistic/submission-statistic-where-unique.input";

@Resolver(() => SubmissionStatisticMutations)
export class SubmissionStatisticMutationsResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("SUBMISSION_SERVICE")
    private readonly submissionStatisticClient: ClientNats
  ) {}

  @ResolveField(() => SubmissionStatistic)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "delete", resource: "submissionStatistic" })
  removeSubmissionStatistic(
    @Args("where") where: SubmissionStatisticWhereUniqueInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(
      this.submissionStatisticClient,
      SUBMISSION_DELETE,
      {
        where,
        select
      }
    );
  }
}
