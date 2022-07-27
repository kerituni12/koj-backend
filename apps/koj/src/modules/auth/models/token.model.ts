import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
  @Field(() => String, { description: 'JWT access token payload' })
  accessTokenPayload: string;

  @Field(() => String, { description: 'JWT refresh token payload' })
  refreshTokenPayload: string;
}
