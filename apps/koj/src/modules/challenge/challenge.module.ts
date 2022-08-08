import { ExecutionContext, Module } from '@nestjs/common';

import { CasbinModule } from '../casbin/casbin.module';
import { ChallengeResolver } from './challenge.resolver';
import { enforcerProvider } from '../casbin/enforcer.provider';
import { ChallengeMutationsResolver } from './challenge.mutation';
import { natsConfig } from '@/configs/nats.config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerModule } from '@/logger/logger.module';
import { RPCTraceClientProxy } from '@koj/instrumentation';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CHALLENGE_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: 'challenge_queue'
        }
      },
      {
        name: 'SUBMISSION_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: 'submission_queue'
        }
      }
    ]),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      }
    }),
    LoggerModule
  ],
  providers: [
    ChallengeResolver,
    ChallengeMutationsResolver,
    RPCTraceClientProxy
  ]
})
export class ChallengeModule {}
