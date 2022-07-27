import { Controller, UseFilters } from "@nestjs/common";

import {
  Client,
  Payload,
  Transport,
  ClientProxy,
  MessagePattern
} from "@nestjs/microservices";

import { SUBMISSION_STATISTIC_FIND_MANY } from "@koj/common/constants";
import { Span } from "@koj/instrumentation";
import { RpcPrismaExceptionFilter } from "@koj/common/exceptions";

import { SubmissionStatisticService } from "./submission-statistic.service";

@UseFilters(RpcPrismaExceptionFilter)
@Controller()
export class SubmissionStatisticController {
  @Client({
    transport: Transport.NATS,
    options: {
      queue: "submissionStatistic_queue",
      servers: ["nats://localhost:4222"]
    }
  })
  client: ClientProxy;

  constructor(
    private readonly submissionStatisticService: SubmissionStatisticService
  ) {}

  @MessagePattern(SUBMISSION_STATISTIC_FIND_MANY)
  @Span()
  async m_findMany(@Payload() { args, select }) {
    return this.submissionStatisticService.findMany(args, select);
  }
}
