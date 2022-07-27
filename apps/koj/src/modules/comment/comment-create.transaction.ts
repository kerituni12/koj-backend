import {
  BadRequestException,
  Inject,
  Injectable,
  OnModuleInit
} from "@nestjs/common";

import { SagaProcessor } from "@/saga/saga-processor";
import { SagaDefinitionBuilder } from "@/saga/saga-builder";
import { ConsumerService } from "@/kafka/consumer.service";
import { RPCTraceClientProxy } from "@koj/instrumentation";
import { ClientNats } from "@nestjs/microservices";
import { COMMENT_CREATE, COMMENT_DELETE } from "@koj/common/constants";

@Injectable()
export class CommentCreateTransaction implements OnModuleInit {
  private sagaBuilder: SagaProcessor;
  constructor(
    @Inject("COMMENT_SERVICE") private readonly commentClient: ClientNats,
    private readonly consumerService: ConsumerService,
    private readonly traceClient: RPCTraceClientProxy
  ) {}

  async createCommentTransaction() {
    const sagaDefinitionBuilder = new SagaDefinitionBuilder()
      .step("CreateComment")
      .onReply(
        async (payload) => {
          const result = await this.traceClient.send(
            this.commentClient,
            COMMENT_CREATE,
            payload
          );
          console.log(
            "🚀 ~ file: comment-create.transaction.ts ~ line 29 ~ CommentCreateTransaction ~ result",
            result
          );
          return { _id: result._id };
        },
        { passResult: true }
      )
      .withCompensation(async (payload) => {
        // invoke Flight Booking Service API to roll back previosly reserved ticket
        const _id = payload.result["CreateComment"]._id;
        await this.traceClient.send(this.commentClient, COMMENT_DELETE, {
          _id
        });
        console.log("delete ok");
      })
      .step("IncreaseCommentCount")
      .onReply(async (payload) => {
        // throw new BadRequestException('khong the increase');
      })
      .withCompensation(async () => {
        console.log("STEP1.2 COMPENSATION");
      });

    const sagaProcessor = await sagaDefinitionBuilder.build();
    return sagaProcessor;
  }

  async run(payload) {
    return this.sagaBuilder.start(payload);
  }

  async onModuleInit() {
    this.sagaBuilder = await this.createCommentTransaction();
  }
}
