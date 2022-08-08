import { Request } from 'express';
import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Get,
  Req,
  Res
} from '@nestjs/common';

import { User } from '@koj/generated/user/user.model';

import {
  GithubGuard,
  JwtRefreshGuard,
  LocalAuthGuard
} from '@koj/common/guards';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { GoogleService } from './provider/google.service';
import { GithubService } from './provider/github.service';
import { PermissionService } from '../casbin/permission/permission.service';

export interface UserCustom extends User {
  userId?: number;
}

// type User = Omit<PrismaUser, 'id'> & { 'userId' : number}

export interface RequestWithUser extends Request {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private githubService: GithubService,
    private googleService: GoogleService,
    private readonly permissionSerivce: PermissionService
  ) {}

  //   @Post('register')
  //   async register(@Body() registrationData: RegisterDto) {
  //     await this.authService.register(registrationData);
  //     // await this.emailConfirmService.sendVerificationLink(registrationData.email);
  //   }

  @HttpCode(200)
  // @UseGuards(EmailConfirmGuard)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser) {
    const { user } = request;
    return this.authService.login(user, request);
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  async refresh(@Req() request: RequestWithUser) {
    const $user = request.user as UserCustom;
    const user = (await this.userService.findUnique({
      id: $user.userId
    })) as UserCustom;

    const [accessToken, refreshToken] = await this.authService.generateToken(
      user
    );

    const [accessTokenHeader, accessTokenPayload, accessTokenSignature] =
      accessToken.split('.');
    const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] =
      refreshToken.split('.');

    const accessTokenCookieOptions =
      this.authService.getJwtAccessTokenOptions();
    const refreshTokenCookieOptions =
      this.authService.getJwtRefreshTokenOptions();

    request.res.cookie(
      'a_sign',
      accessTokenSignature,
      accessTokenCookieOptions
    );
    request.res.cookie(
      'r_sign',
      refreshTokenSignature,
      refreshTokenCookieOptions
    );
    request.res.cookie('a_header', accessTokenHeader, accessTokenCookieOptions);
    request.res.cookie(
      'r_header',
      refreshTokenHeader,
      refreshTokenCookieOptions
    );

    return {
      accessTokenPayload,
      refreshTokenPayload
    };
  }

  @Post('google')
  async googleAuth(@Body() data, @Req() request) {
    return this.googleService.authWithGoogle(data, request);
  }

  @Get('github/callback')
  @UseGuards(GithubGuard)
  async githubAuthRedirect(@Req() req: Request) {
    // return req.user;
    return this.githubService.authWithGithub(req);
  }
}
