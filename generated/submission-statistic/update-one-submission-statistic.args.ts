import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticUpdateInput } from './submission-statistic-update.input';
import { SubmissionStatisticWhereUniqueInput } from './submission-statistic-where-unique.input';

@ArgsType()
export class UpdateOneSubmissionStatisticArgs {

    @Field(() => SubmissionStatisticUpdateInput, {nullable:false})
    data!: SubmissionStatisticUpdateInput;

    @Field(() => SubmissionStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionStatisticWhereUniqueInput;
}
