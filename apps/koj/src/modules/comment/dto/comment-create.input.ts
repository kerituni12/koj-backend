import { Field, Int } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class CommentCreateInput {
  @Field(() => String)
  content?: string;

  @Field(() => Int, { nullable: true })
  challengeId?: number;

  @Field(() => String, { nullable: true })
  parentId?: string;

  @Field(() => Int)
  depth?: number;

  author: {
    id: number;
    username?: string;
    name?: string;
    avatar?: string;
  };
  domainId: number;
}
