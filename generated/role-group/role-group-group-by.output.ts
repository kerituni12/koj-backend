import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleGroupCountAggregate } from './role-group-count-aggregate.output';
import { RoleGroupAvgAggregate } from './role-group-avg-aggregate.output';
import { RoleGroupSumAggregate } from './role-group-sum-aggregate.output';
import { RoleGroupMinAggregate } from './role-group-min-aggregate.output';
import { RoleGroupMaxAggregate } from './role-group-max-aggregate.output';

@ObjectType()
export class RoleGroupGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    ptype!: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    rule?: string;

    @HideField()
    domainId!: number;

    @Field(() => RoleGroupCountAggregate, {nullable:true})
    _count?: RoleGroupCountAggregate;

    @Field(() => RoleGroupAvgAggregate, {nullable:true})
    _avg?: RoleGroupAvgAggregate;

    @Field(() => RoleGroupSumAggregate, {nullable:true})
    _sum?: RoleGroupSumAggregate;

    @Field(() => RoleGroupMinAggregate, {nullable:true})
    _min?: RoleGroupMinAggregate;

    @Field(() => RoleGroupMaxAggregate, {nullable:true})
    _max?: RoleGroupMaxAggregate;
}
