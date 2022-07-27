import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticCreateManyInput } from './submission-statistic-create-many.input';

@ArgsType()
export class CreateManySubmissionStatisticArgs {

    @Field(() => [SubmissionStatisticCreateManyInput], {nullable:false})
    data!: Array<SubmissionStatisticCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
