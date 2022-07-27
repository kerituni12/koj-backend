import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // Put config in `.env`
      clientID: configService.get<string>("OAUTH_GOOGLE_ID"),
      clientSecret: configService.get<string>("OAUTH_GOOGLE_SECRET"),
      scope: ["email", "profile"]
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { id, name, emails } = profile;
    console.log(
      "🚀 ~ file: google.strategy.ts ~ line 27 ~ GoogleAuthStrategy ~ classGoogleAuthStrategyextendsPassportStrategy ~ profile",
      profile
    );

    return {
      provider: "google",
      providerId: id,
      name: name.givenName,
      username: emails[0].value
    };
  }
}
