import { Field, OmitType } from "@nestjs/graphql";
import { FindManySubmissionArgs as FindManySubmissionArgsGenerated } from "@koj/generated/submission/find-many-submission.args";
import { KSubmissionWhereUniqueInput } from "./submission-where-unique.input";

export class FindManySubmissionArgs extends FindManySubmissionArgsGenerated {
  @Field(() => KSubmissionWhereUniqueInput, { nullable: true })
  cursor?: KSubmissionWhereUniqueInput;
}
