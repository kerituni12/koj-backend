import { natsConfig } from "@/configs/nats.config";
import { ExecutionContext, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { CasbinModule } from "../casbin/casbin.module";
import { enforcerProvider } from "../casbin/enforcer.provider";
import { PasswordService } from "../user/password.service";
import { CommentMutationResolver } from "./comment.mutation";
import { CommentResolver } from "./comment.resolver";
import { RPCTraceClientProxy } from "@koj/instrumentation";
import { CommentCreateTransaction } from "./comment-create.transaction";
import { KafkaModule } from "@/kafka/kafka.module";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "COMMENT_SERVICE",
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: "comment_queue"
        }
      },
      {
        name: "USER_SERVICE",
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: "user_queue"
        }
      }
    ]),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error("Function not implemented.");
      }
    }),
    KafkaModule
  ],

  providers: [
    CommentResolver,
    CommentMutationResolver,
    PasswordService,
    RPCTraceClientProxy,
    CommentCreateTransaction
  ]
})
export class CommentModule {}
