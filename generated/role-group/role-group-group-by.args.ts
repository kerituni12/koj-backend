import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereInput } from './role-group-where.input';
import { RoleGroupOrderByWithAggregationInput } from './role-group-order-by-with-aggregation.input';
import { RoleGroupScalarFieldEnum } from './role-group-scalar-field.enum';
import { RoleGroupScalarWhereWithAggregatesInput } from './role-group-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RoleGroupCountAggregateInput } from './role-group-count-aggregate.input';
import { RoleGroupAvgAggregateInput } from './role-group-avg-aggregate.input';
import { RoleGroupSumAggregateInput } from './role-group-sum-aggregate.input';
import { RoleGroupMinAggregateInput } from './role-group-min-aggregate.input';
import { RoleGroupMaxAggregateInput } from './role-group-max-aggregate.input';

@ArgsType()
export class RoleGroupGroupByArgs {

    @Field(() => RoleGroupWhereInput, {nullable:true})
    where?: RoleGroupWhereInput;

    @Field(() => [RoleGroupOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RoleGroupOrderByWithAggregationInput>;

    @Field(() => [RoleGroupScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RoleGroupScalarFieldEnum>;

    @Field(() => RoleGroupScalarWhereWithAggregatesInput, {nullable:true})
    having?: RoleGroupScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoleGroupCountAggregateInput, {nullable:true})
    _count?: RoleGroupCountAggregateInput;

    @Field(() => RoleGroupAvgAggregateInput, {nullable:true})
    _avg?: RoleGroupAvgAggregateInput;

    @Field(() => RoleGroupSumAggregateInput, {nullable:true})
    _sum?: RoleGroupSumAggregateInput;

    @Field(() => RoleGroupMinAggregateInput, {nullable:true})
    _min?: RoleGroupMinAggregateInput;

    @Field(() => RoleGroupMaxAggregateInput, {nullable:true})
    _max?: RoleGroupMaxAggregateInput;
}
