import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPublic {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false, defaultValue: '' })
  username!: string;

  @Field(() => String, { nullable: false, defaultValue: '' })
  firstname!: string;

  @Field(() => String, { nullable: false, defaultValue: '' })
  lastname!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;
}
