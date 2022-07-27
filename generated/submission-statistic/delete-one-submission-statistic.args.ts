import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticWhereUniqueInput } from './submission-statistic-where-unique.input';

@ArgsType()
export class DeleteOneSubmissionStatisticArgs {

    @Field(() => SubmissionStatisticWhereUniqueInput, {nullable:false})
    where!: SubmissionStatisticWhereUniqueInput;
}
