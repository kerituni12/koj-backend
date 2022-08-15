import { USER_CREATE, USER_FIND_UNIQUE } from '@koj/common/constants';
import { ClientNats } from '@nestjs/microservices';
import {
  Injectable,
  BadRequestException,
  HttpStatus,
  Inject
} from '@nestjs/common';

import { RPCTraceClientProxy } from '@koj/instrumentation';

import { AuthService } from '../auth.service';

@Injectable()
export class GithubService {
  constructor(
    private readonly authService: AuthService,
    private traceClient: RPCTraceClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientNats
  ) {}

  async authWithGithub(request) {
    const {
      emails,
      username,
      displayName,
      _json: { avatar_url }
    } = request.user;
    const email = emails[0].value;
    const [firstname, lastname] = displayName.split(/\s+(.*)/);
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
        domainId,
        username,
        lastname,
        firstname,
        provider: 'github',
        avatar: avatar_url
      };

      user = this.traceClient.send(this.userClient, USER_CREATE, { data });
    }

    if (user.provider !== 'github') {
      throw new BadRequestException({
        message: 'This email using another provider for login',
        statusCode: HttpStatus.BAD_REQUEST
      });
    }

    return this.authService.login(user, request);
  }
}
