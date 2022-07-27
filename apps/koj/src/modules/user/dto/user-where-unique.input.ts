import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KUserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  username?: string;
}
