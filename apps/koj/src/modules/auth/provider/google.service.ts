import { User } from "@koj/generated/user/user.model";
import { Injectable, BadRequestException, HttpStatus } from "@nestjs/common";
import { UserService } from "../../user/user.service";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleService {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  async authWithGoogle(data: any, request) {
    const { email, given_name, family_name, picture: avatar } = data;
    const domainId = request.domainId;

    let user = (await this.userService.getUserByEmail({
      email,
      domainId
    })) as User;

    if (!user) {
      user = await this.userService.createByUsername({
        email,
        avatar,
        domainId,
        provider: "google",
        firstname: given_name,
        lastname: family_name,
        username: email.split("@")[0]
      });
    }

    if (user.provider !== "google") {
      throw new BadRequestException({
        message: "This email using another provider for login",
        statusCode: HttpStatus.BAD_REQUEST
      });
    }

    return this.authService.login(user, request);
  }
}
