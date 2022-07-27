import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticCreateInput } from './submission-contest-statistic-create.input';

@ArgsType()
export class CreateOneSubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticCreateInput, {nullable:false})
    data!: SubmissionContestStatisticCreateInput;
}
