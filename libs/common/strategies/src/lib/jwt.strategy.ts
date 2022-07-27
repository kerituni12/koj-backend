import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException, Injectable } from '@nestjs/common';

import { decrypt } from '@koj/common/utils';

import { JwtDto } from '@koj/common/interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          console.log(
            '🚀 ~ file: jwt.strategy.ts ~ line 17 ~ JwtStrategy ~ constructor ~ request',
            request.cookies,
          );
          const signature = request?.cookies?.['a_sign'];
          const header = request?.cookies?.['a_header'];
          const payload = request?.headers?.['x-access-payload'];
          if (!signature || !header || !payload) {
            // throw new UnauthorizedException({
            //   message: 'Missing Auth Token',
            //   level: 'warn',
            // });
          }

          console.log(`${header}.${payload}.${signature}`);
          return `${header}.${payload}.${signature}`;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: JwtDto) {
    const privateData = JSON.parse(decrypt(payload.private));
    return { ...payload, ...privateData };
  }
}
