import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticCreateInput } from './submission-statistic-create.input';

@ArgsType()
export class CreateOneSubmissionStatisticArgs {

    @Field(() => SubmissionStatisticCreateInput, {nullable:false})
    data!: SubmissionStatisticCreateInput;
}
