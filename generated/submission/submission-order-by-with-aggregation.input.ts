import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SubmissionCountOrderByAggregateInput } from './submission-count-order-by-aggregate.input';
import { SubmissionAvgOrderByAggregateInput } from './submission-avg-order-by-aggregate.input';
import { SubmissionMaxOrderByAggregateInput } from './submission-max-order-by-aggregate.input';
import { SubmissionMinOrderByAggregateInput } from './submission-min-order-by-aggregate.input';
import { SubmissionSumOrderByAggregateInput } from './submission-sum-order-by-aggregate.input';

@InputType()
export class SubmissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challengeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    result?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

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

    @Field(() => SubmissionCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionCountOrderByAggregateInput;

    @Field(() => SubmissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubmissionAvgOrderByAggregateInput;

    @Field(() => SubmissionMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionMaxOrderByAggregateInput;

    @Field(() => SubmissionMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionMinOrderByAggregateInput;

    @Field(() => SubmissionSumOrderByAggregateInput, {nullable:true})
    _sum?: SubmissionSumOrderByAggregateInput;
}
