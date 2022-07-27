import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticUpdateManyMutationInput } from './submission-contest-statistic-update-many-mutation.input';
import { SubmissionContestStatisticWhereInput } from './submission-contest-statistic-where.input';

@ArgsType()
export class UpdateManySubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticUpdateManyMutationInput, {nullable:false})
    data!: SubmissionContestStatisticUpdateManyMutationInput;

    @Field(() => SubmissionContestStatisticWhereInput, {nullable:true})
    where?: SubmissionContestStatisticWhereInput;
}
