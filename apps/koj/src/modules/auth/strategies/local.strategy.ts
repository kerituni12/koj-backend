import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@koj/generated/user/user.model';

import { AuthService } from './../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passReqToCallback: true
    });
  }

  async validate(request, email: string, password: string): Promise<User> {
    return this.authService.getAuthenticatedUser(
      email,
      password,
      request.domainId
    );
  }
}
