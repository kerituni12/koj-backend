import { natsConfig } from '@/configs/nats.config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { ExecutionContext, Module } from '@nestjs/common';

import { SecurityConfig } from '@/interfaces/config.interface';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { CasbinModule } from '../casbin/casbin.module';
import {
  GithubGuard,
  GoogleOauthGuard,
  GqlAuthGuard,
  GqlPolicyGuard
} from '@koj/common/guards';

import { RPCTraceClientProxy } from '@koj/instrumentation';

import { AuthMutationsResolver } from './auth.mutation';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PasswordService } from '../user/password.service';
import { enforcerProvider } from '../casbin/enforcer.provider';
import { AuthController } from './auth.controller';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { LoggerModule } from '@/logger/logger.module';
import { Githubstrategy, GoogleAuthStrategy } from '@koj/common/strategies';
import { GoogleService } from './provider/google.service';
import { GithubService } from './provider/github.service';
import { PrismaService } from '@/koj.prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: natsConfig.servers,
          queue: 'user_queue'
        }
      }
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn
          }
        };
      },
      inject: [ConfigService]
    }),
    CasbinModule.register({
      enforcerProvider: enforcerProvider,
      userFromContext: function (context: ExecutionContext): string {
        throw new Error('Function not implemented.');
      }
    }),
    LoggerModule
  ],
  providers: [
    AuthService,
    AuthResolver,
    AuthMutationsResolver,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    LocalStrategy,
    // GoogleAuthStrategy,
    // GoogleOauthGuard,
    Githubstrategy,
    GithubGuard,
    GqlAuthGuard,
    GqlPolicyGuard,
    PasswordService,
    GoogleService,
    GithubService,
    RPCTraceClientProxy,
    PrismaService
  ],
  controllers: [AuthController],
  exports: [GqlAuthGuard, GqlPolicyGuard]
})
export class AuthModule {}
