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
  CHALLENGE_CREATE,
  CHALLENGE_FIND_MANY,
  CHALLENGE_DELETE,
  CHALLENGE_UPDATE,
  CHALLENGE_FIND_UNIQUE,
  CHALLENGE_SUBMIT,
  CHALLENGE_FIND_MANY_PUBLIC,
  CHALLENGE_FIND_UNIQUE_PUBLIC
} from '@koj/common/constants';
import { Span } from '@koj/instrumentation';

import { ChallengeService } from './challenge.service';
import { RpcPrismaExceptionFilter } from '@koj/common/exceptions';
import { RpcException } from '@nestjs/microservices';

@UseFilters(RpcPrismaExceptionFilter)
@Controller()
export class AppController {
  @Client({
    transport: Transport.NATS,
    options: {
      queue: 'challenge_queue',
      servers: [process.env.NATS_URL]
    }
  })
  client: ClientProxy;

  constructor(private readonly challengeService: ChallengeService) {}

  @MessagePattern(CHALLENGE_CREATE)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Span()
  async m_create(@Payload() { data, select }) {
    try {
      return await this.challengeService.create(data, select);
    } catch (error) {
      console.log(error);
      throw new RpcException(error.message);
    }
  }

  @MessagePattern(CHALLENGE_FIND_MANY)
  @Span()
  async m_findMany(@Payload() { args, select }) {
    return this.challengeService.findMany(args, select);
  }

  @MessagePattern(CHALLENGE_FIND_UNIQUE_PUBLIC)
  @Span()
  async m_findUniquePublic(@Payload() { where, select }) {
    return this.challengeService.findUniquePublic(where, select);
  }

  @MessagePattern(CHALLENGE_FIND_UNIQUE)
  @Span()
  async m_findUnique(@Payload() { where, select }) {
    return this.challengeService.findUnique(where, select);
  }

  @MessagePattern(CHALLENGE_UPDATE)
  m_update(@Payload() { data, where, select }) {
    return this.challengeService.update(data, where, select);
  }

  @MessagePattern(CHALLENGE_DELETE)
  m_remove(@Payload() { where, select }) {
    return this.challengeService.remove(where, select);
  }

  @MessagePattern(CHALLENGE_SUBMIT)
  m_submit(@Payload() { data }) {
    return this.challengeService.submit(data);
  }
}
