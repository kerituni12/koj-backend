import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereUniqueInput } from './submission-contest-where-unique.input';
import { SubmissionContestCreateInput } from './submission-contest-create.input';
import { SubmissionContestUpdateInput } from './submission-contest-update.input';

@ArgsType()
export class UpsertOneSubmissionContestArgs {

    @Field(() => SubmissionContestWhereUniqueInput, {nullable:false})
    where!: SubmissionContestWhereUniqueInput;

    @Field(() => SubmissionContestCreateInput, {nullable:false})
    create!: SubmissionContestCreateInput;

    @Field(() => SubmissionContestUpdateInput, {nullable:false})
    update!: SubmissionContestUpdateInput;
}
