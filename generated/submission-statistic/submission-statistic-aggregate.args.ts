import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionStatisticWhereInput } from './submission-statistic-where.input';
import { SubmissionStatisticOrderByWithRelationInput } from './submission-statistic-order-by-with-relation.input';
import { SubmissionStatisticWhereUniqueInput } from './submission-statistic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionStatisticCountAggregateInput } from './submission-statistic-count-aggregate.input';
import { SubmissionStatisticAvgAggregateInput } from './submission-statistic-avg-aggregate.input';
import { SubmissionStatisticSumAggregateInput } from './submission-statistic-sum-aggregate.input';
import { SubmissionStatisticMinAggregateInput } from './submission-statistic-min-aggregate.input';
import { SubmissionStatisticMaxAggregateInput } from './submission-statistic-max-aggregate.input';

@ArgsType()
export class SubmissionStatisticAggregateArgs {

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

    @Field(() => SubmissionStatisticCountAggregateInput, {nullable:true})
    _count?: SubmissionStatisticCountAggregateInput;

    @Field(() => SubmissionStatisticAvgAggregateInput, {nullable:true})
    _avg?: SubmissionStatisticAvgAggregateInput;

    @Field(() => SubmissionStatisticSumAggregateInput, {nullable:true})
    _sum?: SubmissionStatisticSumAggregateInput;

    @Field(() => SubmissionStatisticMinAggregateInput, {nullable:true})
    _min?: SubmissionStatisticMinAggregateInput;

    @Field(() => SubmissionStatisticMaxAggregateInput, {nullable:true})
    _max?: SubmissionStatisticMaxAggregateInput;
}
