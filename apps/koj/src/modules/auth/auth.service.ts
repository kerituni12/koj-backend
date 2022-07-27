import { CookieOptions } from "express";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "nestjs-prisma";
import { ConfigService } from "@nestjs/config";
import { HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";

import { tracer } from "@/tracing/tracer";
import { User } from "@koj/generated/user/user.model";
import { SecurityConfig } from "@/interfaces/config.interface";
import { encrypt, encryptedData } from "@/utils/crypto.util";

import { SignupInput } from "./dto/signup.input";
import { UserService } from "../user/user.service";
import { PasswordService } from "../user/password.service";
import { PermissionService } from "../casbin/permission/permission.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly permissionSerivce: PermissionService
  ) {}

  async register(data: SignupInput): Promise<User> {
    return this.userService.create(data);
  }

  async login(user, request) {
    const [accessToken, refreshToken] = await this.generateToken(user);
    const permissions = await this.permissionSerivce.getPermissionForUser(user);

    const [accessTokenHeader, accessTokenPayload, accessTokenSignature] =
      accessToken.split(".");
    const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] =
      refreshToken.split(".");

    const accessTokenCookieOptions = this.getJwtAccessTokenOptions();
    const refreshTokenCookieOptions = this.getJwtRefreshTokenOptions();

    request.res.cookie(
      "a_sign",
      accessTokenSignature,
      accessTokenCookieOptions
    );
    request.res.cookie(
      "r_sign",
      refreshTokenSignature,
      refreshTokenCookieOptions
    );
    request.res.cookie("a_header", accessTokenHeader, accessTokenCookieOptions);
    request.res.cookie(
      "r_header",
      refreshTokenHeader,
      refreshTokenCookieOptions
    );

    return {
      userId: user.id,
      email: user.email,
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      avatar: user.avatar,
      accessTokenPayload,
      refreshTokenPayload,
      permissions
    };
  }

  async loginWithProvider(data) {
    console.log(data);
  }

  async getAuthenticatedData(user: User) {
    // try {}
    const [accessToken, refreshToken] = await this.generateToken(user);

    return {
      accessToken,
      refreshToken
    };
  }

  async getAuthenticatedUser(
    email: string,
    password: string,
    domainId: number
  ) {
    return tracer.startActiveSpan(
      this.getAuthenticatedUser.name,
      async (span) => {
        const user = (await this.userService.getUserByEmail({
          email,
          domainId
        })) as User;

        if (!user) {
          const error = new UnauthorizedException({
            message: "User authenticated fail",
            statusCode: HttpStatus.UNAUTHORIZED
          });
          span.recordException(error);
          span.end();
          throw error;
        }

        const passwordValid: boolean =
          await this.passwordService.validatePassword(password, user.password);

        if (!passwordValid) {
          const error = new UnauthorizedException("Invalid password");
          span.recordException(error);
          span.end();
          throw error;
        }

        delete user.password;
        span.end();
        return user;
      }
    );
  }

  jwtStringToObject(jwt: string) {
    const [header, payload, signature] = jwt.split(".");

    return {
      header,
      payload,
      signature
    };
  }

  validateUser(id: User["id"]): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)["id"];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateToken(user: User) {
    const privateData = encrypt(
      JSON.stringify({
        userId: user.id,
        domainId: user.domainId,
        role: user.role
      })
    );

    const accessTokenPayload = {
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname,
      private: privateData
    };

    const refreshTokenPayload = {
      userId: user.id,
      domainId: user.domainId
    };
    return Promise.all([
      this.generateAccessToken(accessTokenPayload),
      this.generateRefreshToken(refreshTokenPayload)
    ]);
  }

  private generateAccessToken(payload: {
    username: User["username"];
    lastname: User["lastname"];
    firstname: User["firstname"];
    private: encryptedData;
  }) {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get("JWT_ACCESS_SECRET"),
      expiresIn: securityConfig.refreshIn
    });
  }

  private generateRefreshToken(payload: {
    userId: User["id"];
    domainId: User["domainId"];
  }) {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get("JWT_REFRESH_SECRET"),
      expiresIn: securityConfig.refreshIn
    });
  }

  async refreshToken(userId: number) {
    try {
      const user = (await this.userService.getUserById(userId)) as User;
      const [accessToken, refreshToken] = await this.generateToken(user);
      return { accessToken, refreshToken };
    } catch (e) {
      console.log(e);
      // throw new UnauthorizedException();
    }
  }

  public getJwtAccessTokenOptions(): CookieOptions {
    const globalPrefix = this.configService.get("app.globalPrefix");
    const maxAge = this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME");
    const cookie: CookieOptions = {
      domain: "koj.test",
      maxAge: maxAge,
      httpOnly: true,
      secure: true,
      sameSite: process.env.NODE_ENV === "develepment" ? "none" : "none",
      path: `/`
    };
    return cookie;
  }
  public getJwtRefreshTokenOptions(): CookieOptions {
    const globalPrefix = this.configService.get("app.globalPrefix");
    const maxAge = this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME");
    console.log(
      "🚀 ~ file: auth.service.ts ~ line 173 ~ AuthService ~ getJwtRefreshTokenOptions ~ maxAge",
      maxAge
    );
    const cookie: CookieOptions = {
      domain: "koj.test",
      maxAge: Number(maxAge),
      httpOnly: true,
      secure: true,
      sameSite: process.env.NODE_ENV === "develepment" ? "none" : "none",
      path: `/`
    };
    return cookie;
  }
}
