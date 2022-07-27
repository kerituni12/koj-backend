import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereUniqueInput } from './submission-contest-statistic-where-unique.input';

@ArgsType()
export class FindUniqueSubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionContestStatisticWhereUniqueInput;
}
