import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentCreateResult {
  @Field(() => String)
  _id?: string;
}
