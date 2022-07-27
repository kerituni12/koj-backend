import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereInput } from './submission-contest-where.input';
import { SubmissionContestOrderByWithAggregationInput } from './submission-contest-order-by-with-aggregation.input';
import { SubmissionContestScalarFieldEnum } from './submission-contest-scalar-field.enum';
import { SubmissionContestScalarWhereWithAggregatesInput } from './submission-contest-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestCountAggregateInput } from './submission-contest-count-aggregate.input';
import { SubmissionContestAvgAggregateInput } from './submission-contest-avg-aggregate.input';
import { SubmissionContestSumAggregateInput } from './submission-contest-sum-aggregate.input';
import { SubmissionContestMinAggregateInput } from './submission-contest-min-aggregate.input';
import { SubmissionContestMaxAggregateInput } from './submission-contest-max-aggregate.input';

@ArgsType()
export class SubmissionContestGroupByArgs {

    @Field(() => SubmissionContestWhereInput, {nullable:true})
    where?: SubmissionContestWhereInput;

    @Field(() => [SubmissionContestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubmissionContestOrderByWithAggregationInput>;

    @Field(() => [SubmissionContestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubmissionContestScalarFieldEnum>;

    @Field(() => SubmissionContestScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubmissionContestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubmissionContestCountAggregateInput, {nullable:true})
    _count?: SubmissionContestCountAggregateInput;

    @Field(() => SubmissionContestAvgAggregateInput, {nullable:true})
    _avg?: SubmissionContestAvgAggregateInput;

    @Field(() => SubmissionContestSumAggregateInput, {nullable:true})
    _sum?: SubmissionContestSumAggregateInput;

    @Field(() => SubmissionContestMinAggregateInput, {nullable:true})
    _min?: SubmissionContestMinAggregateInput;

    @Field(() => SubmissionContestMaxAggregateInput, {nullable:true})
    _max?: SubmissionContestMaxAggregateInput;
}
