import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CommentWhereInput {
  @Field(() => Int, { nullable: true })
  challengeId?: number;

  @Field(() => String, { nullable: true })
  parentId?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  domainId: {
    equals: number;
  };
}
