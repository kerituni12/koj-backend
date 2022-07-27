import { Injectable, BadRequestException, HttpStatus } from "@nestjs/common";
import { User } from "@koj/generated/user/user.model";
import { AuthService } from "../auth.service";
import { UserService } from "../../user/user.service";

@Injectable()
export class GithubService {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
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

    let user = (await this.userService.getUserByEmail({
      email,
      domainId
    })) as User;

    if (!user) {
      user = await this.userService.createByUsername({
        email,
        domainId,
        username,
        lastname,
        firstname,
        provider: "github",
        avatar: avatar_url
      });
    }

    if (user.provider !== "github") {
      throw new BadRequestException({
        message: "This email using another provider for login",
        statusCode: HttpStatus.BAD_REQUEST
      });
    }

    return this.authService.login(user, request);
  }
}
