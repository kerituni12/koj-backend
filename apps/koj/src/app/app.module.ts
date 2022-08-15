import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OpenTelemetryModule } from 'nestjs-otel';

import config from '@/configs/config';
import { GqlConfig } from '@/configs/graphql.config';
import { LoggerModule } from '@/logger/logger.module';
import trackIpMiddleware from '@/middleware/trackip.middleware';
import { loggingMiddleware } from '@/middleware/logging.middleware';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RoleModule } from '../modules/role/role.module';
import { UserModule } from '../modules/user/user.module';
import { AuthModule } from '../modules/auth/auth.module';
import { GroupModule } from '../modules/group/group.module';
import { RoleController } from '../modules/role/role.controller';
import { ChallengeModule } from '../modules/challenge/challenge.module';
import { RoleGroupModule } from '../modules/casbin/role/role.module';
import { PolicyModule } from '../modules/casbin/policy/policy.module';
import { DomainModule } from '@/modules/domain/domain.module';
import { CommentModule } from '../modules/comment/comment.module';
import { DomainMiddleware } from '@/middleware/domain.middleware';
import { KafkaModule } from '@/kafka/kafka.module';
import { DateScalar } from '@/grapqhl-scalar';
import { SubmissionModule } from '@/modules/submission/submission.module';
import { SubmissionStatisticModule } from '@/modules/submission-statistic/submission-statistic.module';
import { PrismaService } from '@/koj.prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' },
        middlewares: [loggingMiddleware()]
      })
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfig
    }),
    OpenTelemetryModule.forRoot(),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
      }
    }),
    LoggerModule,
    // KafkaModule,
    AuthModule,

    RoleModule,
    UserModule,
    ChallengeModule,
    GroupModule,
    PolicyModule,
    RoleGroupModule,
    DomainModule,
    CommentModule,
    SubmissionModule,
    SubmissionStatisticModule
  ],
  controllers: [AppController, RoleController],
  providers: [
    AppService,
    DateScalar,
    PrismaService
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ErrorsInterceptor,
    // },
  ],
  exports: [PrismaService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(trackIpMiddleware, DomainMiddleware).forRoutes('*');
  }
}
