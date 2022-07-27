import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException, Injectable } from '@nestjs/common';

import { JwtDto } from '@koj/common/interfaces';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const signature = request?.cookies?.['r_sign'];
          const header = request?.cookies?.['r_header'];
          const payload = request?.headers?.['x-refresh-payload'];
          if (!signature || !header || !payload) {
            throw new UnauthorizedException({
              message: 'Missing Refresh Token',
              level: 'warn',
            });
          }

          console.log('refresh Token', `${header}.${payload}.${signature}`);
          return `${header}.${payload}.${signature}`;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_REFRESH_SECRET'),
    });
  }

  async validate(payload: JwtDto) {
    console.log(
      '🚀 ~ file: jwt-refresh.strategy.ts ~ line 38 ~ validate ~ payload',
      payload,
    );

    return payload;
  }
}
