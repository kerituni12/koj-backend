import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereUniqueInput } from './submission-contest-statistic-where-unique.input';
import { SubmissionContestStatisticCreateInput } from './submission-contest-statistic-create.input';
import { SubmissionContestStatisticUpdateInput } from './submission-contest-statistic-update.input';

@ArgsType()
export class UpsertOneSubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionContestStatisticWhereUniqueInput;

    @Field(() => SubmissionContestStatisticCreateInput, {nullable:false})
    create!: SubmissionContestStatisticCreateInput;

    @Field(() => SubmissionContestStatisticUpdateInput, {nullable:false})
    update!: SubmissionContestStatisticUpdateInput;
}
