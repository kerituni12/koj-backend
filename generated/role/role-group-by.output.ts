import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleAvgAggregate } from './role-avg-aggregate.output';
import { RoleSumAggregate } from './role-sum-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';

@ObjectType()
export class RoleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    domainId!: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: RoleCountAggregate;

    @Field(() => RoleAvgAggregate, {nullable:true})
    _avg?: RoleAvgAggregate;

    @Field(() => RoleSumAggregate, {nullable:true})
    _sum?: RoleSumAggregate;

    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: RoleMinAggregate;

    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: RoleMaxAggregate;
}
