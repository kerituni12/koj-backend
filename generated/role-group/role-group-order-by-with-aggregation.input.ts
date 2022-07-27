import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { RoleGroupCountOrderByAggregateInput } from './role-group-count-order-by-aggregate.input';
import { RoleGroupAvgOrderByAggregateInput } from './role-group-avg-order-by-aggregate.input';
import { RoleGroupMaxOrderByAggregateInput } from './role-group-max-order-by-aggregate.input';
import { RoleGroupMinOrderByAggregateInput } from './role-group-min-order-by-aggregate.input';
import { RoleGroupSumOrderByAggregateInput } from './role-group-sum-order-by-aggregate.input';

@InputType()
export class RoleGroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ptype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rule?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @Field(() => RoleGroupCountOrderByAggregateInput, {nullable:true})
    _count?: RoleGroupCountOrderByAggregateInput;

    @Field(() => RoleGroupAvgOrderByAggregateInput, {nullable:true})
    _avg?: RoleGroupAvgOrderByAggregateInput;

    @Field(() => RoleGroupMaxOrderByAggregateInput, {nullable:true})
    _max?: RoleGroupMaxOrderByAggregateInput;

    @Field(() => RoleGroupMinOrderByAggregateInput, {nullable:true})
    _min?: RoleGroupMinOrderByAggregateInput;

    @Field(() => RoleGroupSumOrderByAggregateInput, {nullable:true})
    _sum?: RoleGroupSumOrderByAggregateInput;
}
