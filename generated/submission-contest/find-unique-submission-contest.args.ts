import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereUniqueInput } from './submission-contest-where-unique.input';

@ArgsType()
export class FindUniqueSubmissionContestArgs {

    @Field(() => SubmissionContestWhereUniqueInput, {nullable:false})
    where!: SubmissionContestWhereUniqueInput;
}
