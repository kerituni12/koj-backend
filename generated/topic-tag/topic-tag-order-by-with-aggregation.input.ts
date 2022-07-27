import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { TopicTagCountOrderByAggregateInput } from './topic-tag-count-order-by-aggregate.input';
import { TopicTagAvgOrderByAggregateInput } from './topic-tag-avg-order-by-aggregate.input';
import { TopicTagMaxOrderByAggregateInput } from './topic-tag-max-order-by-aggregate.input';
import { TopicTagMinOrderByAggregateInput } from './topic-tag-min-order-by-aggregate.input';
import { TopicTagSumOrderByAggregateInput } from './topic-tag-sum-order-by-aggregate.input';

@InputType()
export class TopicTagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @Field(() => TopicTagCountOrderByAggregateInput, {nullable:true})
    _count?: TopicTagCountOrderByAggregateInput;

    @Field(() => TopicTagAvgOrderByAggregateInput, {nullable:true})
    _avg?: TopicTagAvgOrderByAggregateInput;

    @Field(() => TopicTagMaxOrderByAggregateInput, {nullable:true})
    _max?: TopicTagMaxOrderByAggregateInput;

    @Field(() => TopicTagMinOrderByAggregateInput, {nullable:true})
    _min?: TopicTagMinOrderByAggregateInput;

    @Field(() => TopicTagSumOrderByAggregateInput, {nullable:true})
    _sum?: TopicTagSumOrderByAggregateInput;
}
