import { Inject, UseGuards } from "@nestjs/common";
import { ClientNats } from "@nestjs/microservices";
import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { COMMENT_FIND_MANY_BY_ID } from "@koj/common/constants";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";
import { Permissions } from "@/modules/casbin/permisions.decorator";

import { Comment } from "./comment.model";
import { CommentMutations } from "./comment.types";
import { CommentWhereInput } from "./dto/comment-where.input";
import { DomainId } from "@/decorators/gql-domain-id.decorator";

@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    @Inject("COMMENT_SERVICE") private readonly commentClient: ClientNats,
    private traceClient: RPCTraceClientProxy
  ) {}

  @Mutation(() => CommentMutations, { name: "comment", nullable: true })
  userMutation() {
    return {};
  }

  @Query(() => [Comment], { name: "comments" })
  // @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  // @Permissions({
  //   action: "read",
  //   resource: "challenge"
  // })
  getComment(@Args("where") where: CommentWhereInput, @DomainId() domainId) {
    return this.traceClient.send(this.commentClient, COMMENT_FIND_MANY_BY_ID, {
      ...where,
      domainId
    });
  }
}
