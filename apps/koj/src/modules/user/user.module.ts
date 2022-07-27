import { ExecutionContext, Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { PasswordService } from "./password.service";
import { UserMutationResolver } from "./user.mutation";
import { CasbinModule } from "../casbin/casbin.module";
import { enforcerProvider } from "../casbin/enforcer.provider";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { natsConfig } from "@/configs/nats.config";
import { RPCTraceClientProxy } from "@koj/instrumentation";

@Module({
  imports: [
    ClientsModule.register([
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
    })
  ],
  providers: [
    UserResolver,
    UserMutationResolver,
    UserService,
    PasswordService,
    RPCTraceClientProxy
  ]
})
export class UserModule {}
