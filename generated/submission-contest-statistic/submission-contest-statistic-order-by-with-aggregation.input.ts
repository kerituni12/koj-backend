import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SubmissionContestStatisticCountOrderByAggregateInput } from './submission-contest-statistic-count-order-by-aggregate.input';
import { SubmissionContestStatisticAvgOrderByAggregateInput } from './submission-contest-statistic-avg-order-by-aggregate.input';
import { SubmissionContestStatisticMaxOrderByAggregateInput } from './submission-contest-statistic-max-order-by-aggregate.input';
import { SubmissionContestStatisticMinOrderByAggregateInput } from './submission-contest-statistic-min-order-by-aggregate.input';
import { SubmissionContestStatisticSumOrderByAggregateInput } from './submission-contest-statistic-sum-order-by-aggregate.input';

@InputType()
export class SubmissionContestStatisticOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @Field(() => SubmissionContestStatisticCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionContestStatisticCountOrderByAggregateInput;

    @Field(() => SubmissionContestStatisticAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubmissionContestStatisticAvgOrderByAggregateInput;

    @Field(() => SubmissionContestStatisticMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionContestStatisticMaxOrderByAggregateInput;

    @Field(() => SubmissionContestStatisticMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionContestStatisticMinOrderByAggregateInput;

    @Field(() => SubmissionContestStatisticSumOrderByAggregateInput, {nullable:true})
    _sum?: SubmissionContestStatisticSumOrderByAggregateInput;
}
