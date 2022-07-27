import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticUpdateInput } from './submission-contest-statistic-update.input';
import { SubmissionContestStatisticWhereUniqueInput } from './submission-contest-statistic-where-unique.input';

@ArgsType()
export class UpdateOneSubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticUpdateInput, {nullable:false})
    data!: SubmissionContestStatisticUpdateInput;

    @Field(() => SubmissionContestStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionContestStatisticWhereUniqueInput;
}
