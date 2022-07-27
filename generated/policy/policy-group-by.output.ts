import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PolicyCountAggregate } from './policy-count-aggregate.output';
import { PolicyAvgAggregate } from './policy-avg-aggregate.output';
import { PolicySumAggregate } from './policy-sum-aggregate.output';
import { PolicyMinAggregate } from './policy-min-aggregate.output';
import { PolicyMaxAggregate } from './policy-max-aggregate.output';

@ObjectType()
export class PolicyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @HideField()
    ptype!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:false})
    object!: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => String, {nullable:false})
    effectWith!: string;

    @Field(() => String, {nullable:true})
    condition?: string;

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

    @Field(() => PolicyCountAggregate, {nullable:true})
    _count?: PolicyCountAggregate;

    @Field(() => PolicyAvgAggregate, {nullable:true})
    _avg?: PolicyAvgAggregate;

    @Field(() => PolicySumAggregate, {nullable:true})
    _sum?: PolicySumAggregate;

    @Field(() => PolicyMinAggregate, {nullable:true})
    _min?: PolicyMinAggregate;

    @Field(() => PolicyMaxAggregate, {nullable:true})
    _max?: PolicyMaxAggregate;
}
