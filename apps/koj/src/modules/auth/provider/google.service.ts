import {
  Injectable,
  BadRequestException,
  HttpStatus,
  Inject
} from '@nestjs/common';
import { ClientNats } from '@nestjs/microservices';

import { RPCTraceClientProxy } from '@koj/instrumentation';
import { USER_CREATE, USER_FIND_UNIQUE } from '@koj/common/constants';

import { AuthService } from '../auth.service';

@Injectable()
export class GoogleService {
  constructor(
    private readonly authService: AuthService,
    private traceClient: RPCTraceClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientNats
  ) {}

  async authWithGoogle(data: any, request) {
    const { email, given_name, family_name, picture: avatar } = data;
    const domainId = request.domainId;

    let user = await this.traceClient.send(this.userClient, USER_FIND_UNIQUE, {
      where: {
        email,
        domainId
      }
    });

    if (!user) {
      const data = {
        email,
        avatar,
        domainId,
        provider: 'google',
        firstname: given_name,
        lastname: family_name,
        username: email.split('@')[0]
      };

      user = this.traceClient.send(this.userClient, USER_CREATE, { data });
    }

    if (user.provider !== 'google') {
      throw new BadRequestException({
        message: 'This email using another provider for login',
        statusCode: HttpStatus.BAD_REQUEST
      });
    }

    return this.authService.login(user, request);
  }
}
