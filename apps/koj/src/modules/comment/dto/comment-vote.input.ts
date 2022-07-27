import { Field, Int } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class CommentVoteInput {
  @Field(() => Int, { nullable: true })
  vote?: number;

  @Field(() => String)
  commentId: string;

  userId?: number;

  domainId: number;
}
