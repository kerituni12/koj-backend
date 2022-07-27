import { RUN_TYPE } from "@koj/common/constants";
import { Field, HideField, Int, registerEnumType } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class ChallengeSubmitInput {
  @Field(() => String)
  content?: string;

  @Field(() => String)
  functionName?: string;

  @Field(() => Int)
  challengeId?: number;

  @Field(() => String)
  slug?: string;

  @Field(() => String)
  type?: string;

  @Field(() => String)
  languageId?: string;

  @HideField()
  domainId?: number;
}

// registerEnumType(RUN_TYPE, {
//   name: "RUN_TYPE"
// });
