import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticUpdateManyMutationInput } from './submission-statistic-update-many-mutation.input';
import { SubmissionStatisticWhereInput } from './submission-statistic-where.input';

@ArgsType()
export class UpdateManySubmissionStatisticArgs {

    @Field(() => SubmissionStatisticUpdateManyMutationInput, {nullable:false})
    data!: SubmissionStatisticUpdateManyMutationInput;

    @Field(() => SubmissionStatisticWhereInput, {nullable:true})
    where?: SubmissionStatisticWhereInput;
}
