import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { ClientNats } from "@nestjs/microservices";
import { Inject, UseGuards } from "@nestjs/common";
import { Resolver, Query, Mutation, Args, Info } from "@nestjs/graphql";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";
import { SUBMISSION_FIND_MANY_BY_USER } from "@koj/common/constants";
import { Submission } from "@koj/generated/submission/submission.model";
import { FindManySubmissionArgs } from "@koj/generated/submission/find-many-submission.args";

import { DomainId } from "@/decorators/gql-domain-id.decorator";

import { SubmissionMutations } from "./submission.type";
import { Permissions } from "../casbin/permisions.decorator";
import { GqlContext } from "@/decorators/gql-context.decorator";

@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("SUBMISSION_SERVICE") private readonly submissionClient: ClientNats
  ) {}

  @Mutation(() => SubmissionMutations, { name: "submission", nullable: true })
  submissionMutations() {
    return {};
  }

  @Query(() => [Submission], { name: "submissions_by_user" })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: "read",
    resource: "challenge"
  })
  findMany(
    @Args() args: FindManySubmissionArgs,
    @Info() info: GraphQLResolveInfo,
    @GqlContext() context
  ) {
    const { where } = context;
    const { select } = new PrismaSelect(info).value;
    args.where = args.where || {};
    args.where.domainId = where.domainId;
    args.where.createdById = where.createdById;
    return this.traceClient.send(
      this.submissionClient,
      SUBMISSION_FIND_MANY_BY_USER,
      {
        args,
        select
      }
    );
  }
}
