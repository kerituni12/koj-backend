import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereInput } from './submission-contest-statistic-where.input';

@ArgsType()
export class DeleteManySubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticWhereInput, {nullable:true})
    where?: SubmissionContestStatisticWhereInput;
}
