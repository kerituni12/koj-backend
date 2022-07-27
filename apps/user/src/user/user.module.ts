import { Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { AppController } from "./user.controller";
import { PasswordService } from "./password.service";
import { PrismaModule } from "nestjs-prisma";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ["info", "query"], errorFormat: "minimal" }
        // middlewares: [loggingMiddleware()],
      })
    })
  ],
  controllers: [AppController],
  providers: [UserService, PasswordService]
})
export class UserModule {}
