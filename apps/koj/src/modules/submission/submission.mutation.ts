import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Inject, UseGuards } from "@nestjs/common";
import { ClientNats } from "@nestjs/microservices";
import { Args, Info, ResolveField, Resolver } from "@nestjs/graphql";

import { SUBMISSION_DELETE } from "@koj/common/constants";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";
import { Submission } from "@koj/generated/submission/submission.model";

import { SubmissionMutations } from "./submission.type";
import { Permissions } from "../casbin/permisions.decorator";
import { SubmissionWhereUniqueInput } from "@koj/generated/submission/submission-where-unique.input";

@Resolver(() => SubmissionMutations)
export class SubmissionMutationsResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("SUBMISSION_SERVICE") private readonly submissionClient: ClientNats
  ) {}

  @ResolveField(() => Submission)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({ action: "delete", resource: "submission" })
  removeSubmission(
    @Args("where") where: SubmissionWhereUniqueInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const { select } = new PrismaSelect(info).value;
    return this.traceClient.send(this.submissionClient, SUBMISSION_DELETE, {
      where,
      select
    });
  }
}
