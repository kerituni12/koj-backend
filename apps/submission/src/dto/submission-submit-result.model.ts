import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubmissionSubmitResult {
  @Field(() => [SubmissionResult], { nullable: true })
  result?: [SubmissionResult];
  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class SubmissionResult {
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
