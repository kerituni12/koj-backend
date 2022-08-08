import { TraceService } from 'nestjs-otel';

import {
  UsePipes,
  Controller,
  ValidationPipe,
  UseFilters
} from '@nestjs/common';

import {
  Client,
  Payload,
  Transport,
  ClientProxy,
  MessagePattern
} from '@nestjs/microservices';

import {
  ROLE_CREATE,
  ROLE_FIND_MANY,
  ROLE_DELETE,
  ROLE_UPDATE,
  ROLE_FIND_UNIQUE
} from '@koj/common/constants';
import { Span } from '@koj/instrumentation';

import { RoleService } from './role.service';
import { ExceptionFilter } from '../exceptions';

@UseFilters(ExceptionFilter)
@Controller()
export class AppController {
  @Client({
    transport: Transport.NATS,
    options: {
      queue: 'role_queue',
      servers: [process.env.NATS_URL]
    }
  })
  client: ClientProxy;

  constructor(private readonly roleService: RoleService) {}

  @MessagePattern(ROLE_CREATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_create(@Payload() { data, select }) {
    return this.roleService.create(data, select);
  }

  @MessagePattern(ROLE_FIND_MANY)
  @Span()
  async m_findMany(@Payload() { args, select }) {
    return this.roleService.findMany(args, select);
  }

  @MessagePattern(ROLE_FIND_UNIQUE)
  @Span()
  async m_findUnique(@Payload() { where, select }) {
    return this.roleService.findUnique(where, select);
  }

  @MessagePattern(ROLE_UPDATE)
  m_update(@Payload() { data, where, select }) {
    return this.roleService.update(data, where, select);
  }

  @MessagePattern(ROLE_DELETE)
  m_remove(@Payload() { where, select }) {
    return this.roleService.remove(where, select);
  }
}
