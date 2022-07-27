import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { GroupCountOrderByAggregateInput } from './group-count-order-by-aggregate.input';
import { GroupAvgOrderByAggregateInput } from './group-avg-order-by-aggregate.input';
import { GroupMaxOrderByAggregateInput } from './group-max-order-by-aggregate.input';
import { GroupMinOrderByAggregateInput } from './group-min-order-by-aggregate.input';
import { GroupSumOrderByAggregateInput } from './group-sum-order-by-aggregate.input';

@InputType()
export class GroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

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

    @Field(() => GroupCountOrderByAggregateInput, {nullable:true})
    _count?: GroupCountOrderByAggregateInput;

    @Field(() => GroupAvgOrderByAggregateInput, {nullable:true})
    _avg?: GroupAvgOrderByAggregateInput;

    @Field(() => GroupMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupMaxOrderByAggregateInput;

    @Field(() => GroupMinOrderByAggregateInput, {nullable:true})
    _min?: GroupMinOrderByAggregateInput;

    @Field(() => GroupSumOrderByAggregateInput, {nullable:true})
    _sum?: GroupSumOrderByAggregateInput;
}
