import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticWhereInput } from './submission-statistic-where.input';
import { SubmissionStatisticOrderByWithRelationInput } from './submission-statistic-order-by-with-relation.input';
import { SubmissionStatisticWhereUniqueInput } from './submission-statistic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionStatisticScalarFieldEnum } from './submission-statistic-scalar-field.enum';

@ArgsType()
export class FindManySubmissionStatisticArgs {

    @Field(() => SubmissionStatisticWhereInput, {nullable:true})
    where?: SubmissionStatisticWhereInput;

    @Field(() => [SubmissionStatisticOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionStatisticOrderByWithRelationInput>;

    @Field(() => SubmissionStatisticWhereUniqueInput, {nullable:true})
    cursor?: SubmissionStatisticWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubmissionStatisticScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubmissionStatisticScalarFieldEnum>;
}
