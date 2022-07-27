import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticCreateManyInput } from './submission-contest-statistic-create-many.input';

@ArgsType()
export class CreateManySubmissionContestStatisticArgs {

    @Field(() => [SubmissionContestStatisticCreateManyInput], {nullable:false})
    data!: Array<SubmissionContestStatisticCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
