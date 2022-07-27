import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-github2";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class Githubstrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get<string>("GITHUB_CLIENT_ID"),
      clientSecret: configService.get<string>("GITHUB_CLIENT_SECRET"),
      scope: ["user"]
    });
  }

  validate(_accessToken: string, _refreshToken: string, profile) {
    return profile;
  }
}
