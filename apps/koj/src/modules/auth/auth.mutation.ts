import { Args, Resolver, ResolveField, Context } from '@nestjs/graphql';

import { Auth } from './models/auth.model';
import { Token } from './models/token.model';

import { AuthMutations } from './auth.type';
import { AuthService } from './auth.service';

import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { PermissionService } from '../casbin/permission/permission.service';
import { Req } from '@nestjs/common';
import { DomainId } from '@/decorators/gql-domain-id.decorator';
import { User } from '@koj/generated/user/user.model';

@Resolver(() => AuthMutations)
export class AuthMutationsResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly permissionService: PermissionService,
  ) {}

  @ResolveField(() => User)
  async register(@Args('data') data: SignupInput, @DomainId() domainId) {
    data.email = data.email.toLowerCase();
    data.domainId = domainId;
    return await this.authService.register(data);
  }

  @ResolveField(() => Auth)
  async login(@Args('data') { email, password }: LoginInput, @Context('req') request) {
    const user = await this.authService.getAuthenticatedUser(
      email.toLowerCase(),
      password,
      request.domainId,
    );
    const [accessToken, refreshToken] = await this.authService.generateToken(user);
    console.log(
      '🚀 ~ file: auth.mutation.ts ~ line 39 ~ AuthMutationsResolver ~ login ~ accessToken',
      accessToken,
    );
    const permissions = await this.permissionService.getPermissionForUser(user);

    const [accessTokenHeader, accessTokenPayload, accessTokenSignature] =
      accessToken.split('.');
    const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] =
      refreshToken.split('.');

    const accessTokenCookieOptions = this.authService.getJwtAccessTokenOptions();
    const refreshTokenCookieOptions = this.authService.getJwtRefreshTokenOptions();

    request.res.cookie('a_sign', accessTokenSignature, accessTokenCookieOptions);
    request.res.cookie('r_sign', refreshTokenSignature, refreshTokenCookieOptions);
    request.res.cookie('a_header', accessTokenHeader, accessTokenCookieOptions);
    request.res.cookie('r_header', refreshTokenHeader, refreshTokenCookieOptions);

    return {
      userId: user.id,
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      accessTokenPayload,
      refreshTokenPayload,
      permissions,
    };
  }

  // @ResolveField(() => Token)
  // async refreshToken(@Args() { token }: RefreshTokenInput) {
  //   return this.auth.refreshToken(token);
  // }
}
