import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestUpdateInput } from './submission-contest-update.input';
import { SubmissionContestWhereUniqueInput } from './submission-contest-where-unique.input';

@ArgsType()
export class UpdateOneSubmissionContestArgs {

    @Field(() => SubmissionContestUpdateInput, {nullable:false})
    data!: SubmissionContestUpdateInput;

    @Field(() => SubmissionContestWhereUniqueInput, {nullable:false})
    where!: SubmissionContestWhereUniqueInput;
}
