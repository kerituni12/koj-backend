import { Span, TraceService } from "nestjs-otel";
// import { Span } from '@koj/instrumentation';
import { ClientNats } from "@nestjs/microservices";
import { Args, Resolver, ResolveField } from "@nestjs/graphql";
import { Inject, UseGuards, BadRequestException } from "@nestjs/common";

import {
  COMMENT_CREATE,
  COMMENT_UNVOTE,
  COMMENT_VOTE,
  USER_FIND_MANY,
  USER_FIND_UNIQUE
} from "@koj/common/constants";
import { RPCTraceClientProxy } from "@koj/instrumentation";
import { GqlAuthGuard, GqlPolicyGuard } from "@koj/common/guards";

import { Comment } from "./comment.model";
import { CommentMutations } from "./comment.types";
import { Permissions } from "../casbin/permisions.decorator";
import { CommentCreateInput } from "./dto/comment-create.input";
import { CommentVoteInput } from "./dto/comment-vote.input";
import { CommentCreateResult } from "./dto/comment-create.model";
import { CommentCreateTransaction } from "./comment-create.transaction";
import { GqlContext } from "@/decorators/gql-context.decorator";

@Resolver(() => CommentMutations)
export class CommentMutationResolver {
  constructor(
    @Inject("COMMENT_SERVICE") private readonly commentClient: ClientNats,
    @Inject("USER_SERVICE") private readonly userClient: ClientNats,
    private traceClient: RPCTraceClientProxy,
    private commentCreateTransaction: CommentCreateTransaction,
    private readonly traceService: TraceService
  ) {}

  @ResolveField(() => CommentCreateResult, { nullable: true })
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: "create",
    resource: "challenge"
  })
  @Span()
  async create(@Args("data") data: CommentCreateInput, @GqlContext() context) {
    const { createdById, createdByUsername, createdByName, domainId } =
      context.data;

    const user = await this.traceClient.send(
      this.userClient,
      USER_FIND_UNIQUE,
      {
        where: { id: createdById },
        select: {
          avatar: true
        }
      }
    );

    const author = {
      id: createdById,
      username: createdByUsername,
      name: createdByName,
      avatar: user.avatar
    };

    data.author = author;
    data.domainId = domainId;

    // case root comment and increase comment count of post service
    if (typeof data.challengeId !== "undefined") {
      const result: any = await this.commentCreateTransaction.run(data);
      return result.result?.["CreateComment"];
    }

    // case internal comment servivices
    return this.traceClient.send(this.commentClient, COMMENT_CREATE, data);
  }

  @ResolveField(() => Comment)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: "create",
    resource: "challenge"
  })
  @Span()
  async vote(@Args("data") data: CommentVoteInput, @GqlContext() context) {
    Object.assign(data, context.data);
    data.userId = context.data?.createdById;
    return this.traceClient.send(this.commentClient, COMMENT_VOTE, data);
  }

  @ResolveField(() => Boolean)
  @UseGuards(GqlAuthGuard, GqlPolicyGuard)
  @Permissions({
    action: "create",
    resource: "challenge"
  })
  @Span()
  async unVote(@Args("data") data: CommentVoteInput, @GqlContext() context) {
    Object.assign(data, context.data);
    data.userId = context.data?.createdById;
    return this.traceClient.send(this.commentClient, COMMENT_UNVOTE, data);
  }
}
