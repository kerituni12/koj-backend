import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticWhereUniqueInput } from './submission-statistic-where-unique.input';
import { SubmissionStatisticCreateInput } from './submission-statistic-create.input';
import { SubmissionStatisticUpdateInput } from './submission-statistic-update.input';

@ArgsType()
export class UpsertOneSubmissionStatisticArgs {

    @Field(() => SubmissionStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionStatisticWhereUniqueInput;

    @Field(() => SubmissionStatisticCreateInput, {nullable:false})
    create!: SubmissionStatisticCreateInput;

    @Field(() => SubmissionStatisticUpdateInput, {nullable:false})
    update!: SubmissionStatisticUpdateInput;
}
