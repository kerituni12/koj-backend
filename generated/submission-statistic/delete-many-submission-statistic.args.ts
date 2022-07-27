import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticWhereInput } from './submission-statistic-where.input';

@ArgsType()
export class DeleteManySubmissionStatisticArgs {

    @Field(() => SubmissionStatisticWhereInput, {nullable:true})
    where?: SubmissionStatisticWhereInput;
}
