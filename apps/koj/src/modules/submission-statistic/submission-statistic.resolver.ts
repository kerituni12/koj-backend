import { Inject } from "@nestjs/common";
import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { ClientNats } from "@nestjs/microservices";
import { Resolver, Query, Mutation, Args, Info } from "@nestjs/graphql";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { SubmissionStatistic } from "@koj/generated/submission-statistic/submission-statistic.model";
import {
  SUBMISSION_FIND_MANY_BY_USER,
  SUBMISSION_STATISTIC_FIND_MANY
} from "@koj/common/constants";
import { FindManySubmissionStatisticArgs } from "@koj/generated/submission-statistic/find-many-submission-statistic.args";

import { DomainId } from "@/decorators/gql-domain-id.decorator";

import { SubmissionStatisticMutations } from "./submission-statistic.type";

@Resolver(() => SubmissionStatistic)
export class SubmissionStatisticResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("SUBMISSION_SERVICE")
    private readonly submissionStatisticClient: ClientNats
  ) {}

  @Mutation(() => SubmissionStatisticMutations, {
    name: "submissionStatistic",
    nullable: true
  })
  submissionStatisticMutations() {
    return {};
  }

  @Query(() => [SubmissionStatistic], { name: "submissions_rank" })
  findMany(
    @Args() args: FindManySubmissionStatisticArgs,
    @Info() info: GraphQLResolveInfo,
    @DomainId() domainId
  ) {
    const { select } = new PrismaSelect(info).value;
    args.where = args.where || {};
    args.where.domainId = domainId;
    return this.traceClient.send(
      this.submissionStatisticClient,
      SUBMISSION_STATISTIC_FIND_MANY,
      {
        args,
        select
      }
    );
  }
}
