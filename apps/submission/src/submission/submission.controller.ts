import {
  UsePipes,
  Controller,
  ValidationPipe,
  UseFilters
} from "@nestjs/common";

import {
  Client,
  Payload,
  Transport,
  ClientProxy,
  RpcException,
  MessagePattern
} from "@nestjs/microservices";

import {
  SUBMISSION_CREATE,
  SUBMISSION_DELETE,
  SUBMISSION_FIND_UNIQUE,
  SUBMISSION_SUBMIT,
  SUBMISSION_FIND_MANY_BY_USER
} from "@koj/common/constants";
import { Span } from "@koj/instrumentation";
import { RpcPrismaExceptionFilter } from "@koj/common/exceptions";

import { SubmissionService } from "./submission.service";

@UseFilters(RpcPrismaExceptionFilter)
@Controller()
export class SubmissionController {
  @Client({
    transport: Transport.NATS,
    options: {
      queue: "submission_queue",
      servers: ["nats://localhost:4222"]
    }
  })
  client: ClientProxy;

  constructor(private readonly submissionService: SubmissionService) {}

  @MessagePattern(SUBMISSION_CREATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_create(@Payload() { data, select }) {
    try {
      return await this.submissionService.create(data, select);
    } catch (error) {
      console.log(error);
      throw new RpcException(error.message);
    }
  }

  @MessagePattern(SUBMISSION_FIND_MANY_BY_USER)
  @Span()
  async m_findManyByUser(@Payload() { args, select }) {
    return this.submissionService.findManyByUser(args, select);
  }

  @MessagePattern(SUBMISSION_FIND_UNIQUE)
  @Span()
  async m_findUnique(@Payload() { where, select }) {
    return this.submissionService.findUnique(where, select);
  }

  @MessagePattern(SUBMISSION_DELETE)
  m_remove(@Payload() { where, select }) {
    return this.submissionService.remove(where, select);
  }

  @MessagePattern(SUBMISSION_SUBMIT)
  m_submit(@Payload() { data, context }) {
    return this.submissionService.submit(data, context);
  }
}
