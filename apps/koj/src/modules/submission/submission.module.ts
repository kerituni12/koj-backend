import { ExecutionContext, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { natsConfig } from "@/configs/nats.config";
import { LoggerModule } from "@/logger/logger.module";
import { RPCTraceClientProxy } from "@koj/instrumentation";

import { CasbinModule } from "../casbin/casbin.module";
import { SubmissionResolver } from "./submission.resolver";
import { enforcerProvider } from "../casbin/enforcer.provider";
import { SubmissionMutationsResolver } from "./submission.mutation";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SUBMISSION_SERVICE",
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: "submission_queue"
        }
      }
    ]),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error("Function not implemented.");
      }
    }),
    LoggerModule
  ],
  providers: [
    SubmissionResolver,
    SubmissionMutationsResolver,
    RPCTraceClientProxy
  ]
})
export class SubmissionModule {}
