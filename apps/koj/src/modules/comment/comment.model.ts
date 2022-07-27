import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Author {
  @Field(() => Int, { nullable: true })
  id: number;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@ObjectType()
export class Vote {
  @Field(() => Int, { nullable: true })
  userId?: number;
  @Field(() => Int, { nullable: true })
  vote?: number;
}

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  _id!: string;
  @Field(() => Int, { nullable: true })
  challengeId!: number;
  @Field(() => String, { nullable: true })
  parentId!: string;
  @Field(() => Int, { nullable: true })
  depth?: number;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => [Vote], { nullable: true })
  votes?: Vote[];
  @Field(() => Author, { nullable: true })
  author?: Author;
  @Field(() => Int, { nullable: true })
  replyCount: number;
  @Field(() => Int, { nullable: true })
  votePoint: number;
  @Field(() => Int, { nullable: true })
  currentVote: number;
}
