import { MessagePattern, Payload } from "@nestjs/microservices";
import { Controller, UsePipes, ValidationPipe } from "@nestjs/common";

import { Span } from "@koj/instrumentation";
import { UserService } from "./user.service";
import {
  USER_CREATE,
  USER_DELETE,
  USER_FIND_MANY,
  USER_FIND_UNIQUE,
  USER_FIND_UNIQUE_BY_USERNAME,
  USER_UPDATE
} from "@koj/common/constants";

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(USER_FIND_MANY)
  m_users(@Payload() payload) {
    const { args, select } = payload;

    return this.userService.findMany(args, select);
  }

  @MessagePattern(USER_FIND_UNIQUE_BY_USERNAME)
  m_getUserByUsername(@Payload() payload) {
    const { where, select } = payload;
    return this.userService.getUserByUsername(where, select);
  }

  @MessagePattern(USER_FIND_UNIQUE)
  m_getUserById(@Payload() payload) {
    const { where, select } = payload;
    console.log(
      "🚀 ~ file: user.controller.ts ~ line 38 ~ AppController ~ m_getUserById ~ payload",
      payload
    );
    return this.userService.getUserById(where.id, select);
  }

  @MessagePattern(USER_CREATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  m_createUser(@Payload() payload) {
    const { data, select } = payload;
    return this.userService.create(data, select);
  }

  @MessagePattern(USER_UPDATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  m_updateUser(@Payload() payload) {
    const { data, where } = payload;
    return this.userService.update(data, where);
  }

  @MessagePattern(USER_DELETE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  m_removeUser(@Payload() payload) {
    return this.userService.remove(payload.id);
  }
}
