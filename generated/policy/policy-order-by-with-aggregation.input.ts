import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { PolicyCountOrderByAggregateInput } from './policy-count-order-by-aggregate.input';
import { PolicyAvgOrderByAggregateInput } from './policy-avg-order-by-aggregate.input';
import { PolicyMaxOrderByAggregateInput } from './policy-max-order-by-aggregate.input';
import { PolicyMinOrderByAggregateInput } from './policy-min-order-by-aggregate.input';
import { PolicySumOrderByAggregateInput } from './policy-sum-order-by-aggregate.input';

@InputType()
export class PolicyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    ptype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    object?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effectWith?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    condition?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @HideField()
    createdByUsername?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdByName?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PolicyCountOrderByAggregateInput, {nullable:true})
    _count?: PolicyCountOrderByAggregateInput;

    @Field(() => PolicyAvgOrderByAggregateInput, {nullable:true})
    _avg?: PolicyAvgOrderByAggregateInput;

    @Field(() => PolicyMaxOrderByAggregateInput, {nullable:true})
    _max?: PolicyMaxOrderByAggregateInput;

    @Field(() => PolicyMinOrderByAggregateInput, {nullable:true})
    _min?: PolicyMinOrderByAggregateInput;

    @Field(() => PolicySumOrderByAggregateInput, {nullable:true})
    _sum?: PolicySumOrderByAggregateInput;
}
