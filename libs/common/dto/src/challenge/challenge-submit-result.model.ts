import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ChallengeResultInfo {
  @Field(() => Int, { nullable: true })
  testcaseCount?: number;
  @Field(() => Int, { nullable: true })
  testcasePassCount?: number;
  @Field(() => Int, { nullable: true })
  score?: number;
  @Field(() => Int, { nullable: true })
  totalScore?: number;
}

@ObjectType()
export class ChallengeSubmitResult {
  @Field(() => ChallengeResultInfo, { nullable: true })
  info?: ChallengeResultInfo;
  @Field(() => [ChallengeResult], { nullable: true })
  result?: [ChallengeResult];
  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class ChallengeResult {
  @Field(() => Int, { nullable: true })
  time?: number;
  @Field(() => Int, { nullable: true })
  memory?: number;
  @Field(() => String, { nullable: true })
  errorMessage?: string;
  @Field(() => String, { nullable: true })
  message?: string;
  @Field(() => String, { nullable: true })
  log?: string;
  @Field(() => String, { nullable: true })
  output?: string;
  @Field(() => String, { nullable: true })
  expectedOutput?: string;
  @Field(() => Boolean, { nullable: true })
  hidden?: boolean;
  @Field(() => Boolean, { nullable: true })
  result?: boolean;
}
