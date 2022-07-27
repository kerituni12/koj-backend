import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereInput } from './submission-contest-statistic-where.input';
import { SubmissionContestStatisticOrderByWithRelationInput } from './submission-contest-statistic-order-by-with-relation.input';
import { SubmissionContestStatisticWhereUniqueInput } from './submission-contest-statistic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestStatisticCountAggregateInput } from './submission-contest-statistic-count-aggregate.input';
import { SubmissionContestStatisticAvgAggregateInput } from './submission-contest-statistic-avg-aggregate.input';
import { SubmissionContestStatisticSumAggregateInput } from './submission-contest-statistic-sum-aggregate.input';
import { SubmissionContestStatisticMinAggregateInput } from './submission-contest-statistic-min-aggregate.input';
import { SubmissionContestStatisticMaxAggregateInput } from './submission-contest-statistic-max-aggregate.input';

@ArgsType()
export class SubmissionContestStatisticAggregateArgs {

    @Field(() => SubmissionContestStatisticWhereInput, {nullable:true})
    where?: SubmissionContestStatisticWhereInput;

    @Field(() => [SubmissionContestStatisticOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionContestStatisticOrderByWithRelationInput>;

    @Field(() => SubmissionContestStatisticWhereUniqueInput, {nullable:true})
    cursor?: SubmissionContestStatisticWhereUniqueInput;

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
