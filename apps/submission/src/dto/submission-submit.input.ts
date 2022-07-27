import { Field, HideField } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class SubmissionSubmitInput {
  @Field(() => String)
  content?: string;

  @Field(() => String)
  functionName?: string;

  @Field(() => String)
  slug?: string;

  @Field(() => String)
  languageId?: string;

  @HideField()
  domainId?: number;
}
