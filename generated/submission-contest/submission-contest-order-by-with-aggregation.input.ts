import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SubmissionContestCountOrderByAggregateInput } from './submission-contest-count-order-by-aggregate.input';
import { SubmissionContestAvgOrderByAggregateInput } from './submission-contest-avg-order-by-aggregate.input';
import { SubmissionContestMaxOrderByAggregateInput } from './submission-contest-max-order-by-aggregate.input';
import { SubmissionContestMinOrderByAggregateInput } from './submission-contest-min-order-by-aggregate.input';
import { SubmissionContestSumOrderByAggregateInput } from './submission-contest-sum-order-by-aggregate.input';

@InputType()
export class SubmissionContestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challengeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    result?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shared?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @HideField()
    createdByUsername?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SubmissionContestCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionContestCountOrderByAggregateInput;

    @Field(() => SubmissionContestAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubmissionContestAvgOrderByAggregateInput;

    @Field(() => SubmissionContestMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionContestMaxOrderByAggregateInput;

    @Field(() => SubmissionContestMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionContestMinOrderByAggregateInput;

    @Field(() => SubmissionContestSumOrderByAggregateInput, {nullable:true})
    _sum?: SubmissionContestSumOrderByAggregateInput;
}
