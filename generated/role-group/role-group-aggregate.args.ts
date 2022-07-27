import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereInput } from './role-group-where.input';
import { RoleGroupOrderByWithRelationInput } from './role-group-order-by-with-relation.input';
import { RoleGroupWhereUniqueInput } from './role-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleGroupCountAggregateInput } from './role-group-count-aggregate.input';
import { RoleGroupAvgAggregateInput } from './role-group-avg-aggregate.input';
import { RoleGroupSumAggregateInput } from './role-group-sum-aggregate.input';
import { RoleGroupMinAggregateInput } from './role-group-min-aggregate.input';
import { RoleGroupMaxAggregateInput } from './role-group-max-aggregate.input';

@ArgsType()
export class RoleGroupAggregateArgs {

    @Field(() => RoleGroupWhereInput, {nullable:true})
    where?: RoleGroupWhereInput;

    @Field(() => [RoleGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleGroupOrderByWithRelationInput>;

    @Field(() => RoleGroupWhereUniqueInput, {nullable:true})
    cursor?: RoleGroupWhereUniqueInput;

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
