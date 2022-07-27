import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereInput } from './submission-contest-statistic-where.input';
import { SubmissionContestStatisticOrderByWithAggregationInput } from './submission-contest-statistic-order-by-with-aggregation.input';
import { SubmissionContestStatisticScalarFieldEnum } from './submission-contest-statistic-scalar-field.enum';
import { SubmissionContestStatisticScalarWhereWithAggregatesInput } from './submission-contest-statistic-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestStatisticCountAggregateInput } from './submission-contest-statistic-count-aggregate.input';
import { SubmissionContestStatisticAvgAggregateInput } from './submission-contest-statistic-avg-aggregate.input';
import { SubmissionContestStatisticSumAggregateInput } from './submission-contest-statistic-sum-aggregate.input';
import { SubmissionContestStatisticMinAggregateInput } from './submission-contest-statistic-min-aggregate.input';
import { SubmissionContestStatisticMaxAggregateInput } from './submission-contest-statistic-max-aggregate.input';

@ArgsType()
export class SubmissionContestStatisticGroupByArgs {

    @Field(() => SubmissionContestStatisticWhereInput, {nullable:true})
    where?: SubmissionContestStatisticWhereInput;

    @Field(() => [SubmissionContestStatisticOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubmissionContestStatisticOrderByWithAggregationInput>;

    @Field(() => [SubmissionContestStatisticScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubmissionContestStatisticScalarFieldEnum>;

    @Field(() => SubmissionContestStatisticScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubmissionContestStatisticScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubmissionContestStatisticCountAggregateInput, {nullable:true})
    _count?: SubmissionContestStatisticCountAggregateInput;

    @Field(() => SubmissionContestStatisticAvgAggregateInput, {nullable:true})
    _avg?: SubmissionContestStatisticAvgAggregateInput;

    @Field(() => SubmissionContestStatisticSumAggregateInput, {nullable:true})
    _sum?: SubmissionContestStatisticSumAggregateInput;

    @Field(() => SubmissionContestStatisticMinAggregateInput, {nullable:true})
    _min?: SubmissionContestStatisticMinAggregateInput;

    @Field(() => SubmissionContestStatisticMaxAggregateInput, {nullable:true})
    _max?: SubmissionContestStatisticMaxAggregateInput;
}
