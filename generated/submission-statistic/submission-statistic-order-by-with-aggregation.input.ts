import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SubmissionStatisticCountOrderByAggregateInput } from './submission-statistic-count-order-by-aggregate.input';
import { SubmissionStatisticAvgOrderByAggregateInput } from './submission-statistic-avg-order-by-aggregate.input';
import { SubmissionStatisticMaxOrderByAggregateInput } from './submission-statistic-max-order-by-aggregate.input';
import { SubmissionStatisticMinOrderByAggregateInput } from './submission-statistic-min-order-by-aggregate.input';
import { SubmissionStatisticSumOrderByAggregateInput } from './submission-statistic-sum-order-by-aggregate.input';

@InputType()
export class SubmissionStatisticOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challengeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submitCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @HideField()
    createdByUsername?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastSubmitTime?: keyof typeof SortOrder;

    @Field(() => SubmissionStatisticCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionStatisticCountOrderByAggregateInput;

    @Field(() => SubmissionStatisticAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubmissionStatisticAvgOrderByAggregateInput;

    @Field(() => SubmissionStatisticMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionStatisticMaxOrderByAggregateInput;

    @Field(() => SubmissionStatisticMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionStatisticMinOrderByAggregateInput;

    @Field(() => SubmissionStatisticSumOrderByAggregateInput, {nullable:true})
    _sum?: SubmissionStatisticSumOrderByAggregateInput;
}
