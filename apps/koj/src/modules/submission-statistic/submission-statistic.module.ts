import { ExecutionContext, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { natsConfig } from "@/configs/nats.config";
import { LoggerModule } from "@/logger/logger.module";
import { RPCTraceClientProxy } from "@koj/instrumentation";

import { CasbinModule } from "../casbin/casbin.module";
import { SubmissionStatisticResolver } from "./submission-statistic.resolver";
import { enforcerProvider } from "../casbin/enforcer.provider";
import { SubmissionStatisticMutationsResolver } from "./submission-statistic.mutation";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SUBMISSION_SERVICE",
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: "submissionStatistic_queue"
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
    SubmissionStatisticResolver,
    SubmissionStatisticMutationsResolver,
    RPCTraceClientProxy
  ]
})
export class SubmissionStatisticModule {}
