import { TraceService } from "nestjs-otel";

import {
  COMMENT_VOTE,
  COMMENT_UNVOTE,
  COMMENT_CREATE,
  COMMENT_FIND_MANY_BY_ID,
  COMMENT_DELETE
} from "@koj/common/constants";

import {
  Post,
  Body,
  Param,
  UsePipes,
  UseFilters,
  Controller,
  ValidationPipe,
  UseInterceptors
} from "@nestjs/common";

import {
  Ctx,
  Client,
  Payload,
  Transport,
  NatsContext,
  ClientProxy,
  MessagePattern
} from "@nestjs/microservices";

import { Span } from "@koj/instrumentation";
import { TraceInterceptor } from "@koj/instrumentation";
import { AllRpcExceptionFilter } from "@koj/common/exceptions";

import { CommentService } from "./comment.service";
import { CommentCreateDto } from "../dto/comment.dto";
import { CommentVoteDto } from "../dto/comment-vote.dto";
import { CommentPayload, VotePayload } from "./comment.interface";

@UseInterceptors(TraceInterceptor)
@UseFilters(AllRpcExceptionFilter)
@Controller()
export class CommentController {
  @Client({
    transport: Transport.NATS,
    options: {
      queue: "comment_queue",
      servers: ["nats://localhost:4222"]
    }
  })
  client: ClientProxy;

  constructor(
    private readonly commentService: CommentService,
    private readonly traceService: TraceService
  ) {}

  @MessagePattern(COMMENT_CREATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_create(@Payload() data: CommentCreateDto) {
    return this.commentService.create(data);
  }

  @MessagePattern(COMMENT_FIND_MANY_BY_ID)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_getCommentById(@Payload() data: CommentPayload) {
    return this.commentService.getCommentById(data);
  }

  @MessagePattern(COMMENT_VOTE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_vote(@Payload() data: CommentVoteDto) {
    const { userId, vote, commentId, domainId } = data;
    return this.commentService.vote({
      userId,
      vote,
      commentId,
      domainId
    });
  }

  @MessagePattern(COMMENT_UNVOTE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_unvote(@Payload() data: CommentVoteDto) {
    const { userId, vote, commentId, domainId } = data;
    return this.commentService.unVote({
      userId,
      vote,
      commentId,
      domainId
    });
  }

  @MessagePattern(COMMENT_DELETE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_delete(@Payload() payload) {
    return this.commentService.remove(payload._id);
  }

  /**
   * HTTP
   */
  @Post("/vote")
  vote(@Body() body: VotePayload) {
    return this.commentService.vote(body);
  }
  @Post("/delete")
  remove(@Body() body) {
    return this.commentService.remove(body._id);
  }
  @Post("/unvote")
  unvote(@Body() body: VotePayload) {
    return this.commentService.unVote(body);
  }

  @Post()
  async testGetData(@Body() body) {
    // const payload = { challengeId: 2, userId: 1, type: 'root' };
    // const payload = {
    //   parentId: '62b5644da23a6e8a3f82150d',
    //   userId: 1,
    //   domainId: 1,
    // };
    // const result = this.client.send(COMMENT_FIND_MANY_BY_ID, payload);

    // const vote = {
    //   vote: -1,
    //   userId: 1,
    //   commentId: '62b00a5f48b6a439fda6cf0f',
    // };
    // const result = this.client.send(COMMENT_VOTE, vote);

    const comment = {
      depth: 0,
      // challengeId: 1,
      author: { id: 1 },
      content: "hello dsafdsf dasf",
      parentId: "62b5644da23a6e8a3f82150d",
      domainId: 1
    };
    const result = this.client.send(COMMENT_CREATE, comment);

    return result;
  }

  @Post("/:id")
  @UsePipes(new ValidationPipe({ transform: true }))
  getCommentById(@Param("id") id: number, @Body() body) {
    return this.commentService.getCommentById({
      parentId: body.parentId,
      userId: body.userId,
      type: body.type,
      domainId: body.domainId
    });
  }
}
