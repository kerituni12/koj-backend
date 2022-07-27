import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
  @Field(() => ID, { nullable: false })
  userId: number;
  @Field(() => String, { nullable: true })
  firstname!: string | null;
  @Field(() => String, { nullable: true })
  lastname!: string | null;
  @Field(() => String, { nullable: true })
  permissions!: string[] | null;
}
