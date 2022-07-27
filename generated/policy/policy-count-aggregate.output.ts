import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class PolicyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @HideField()
    ptype!: number;

    @Field(() => Int, {nullable:false})
    subject!: number;

    @Field(() => Int, {nullable:false})
    object!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    effect!: number;

    @Field(() => Int, {nullable:false})
    effectWith!: number;

    @Field(() => Int, {nullable:false})
    condition!: number;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdByUsername!: number;

    @Field(() => Int, {nullable:false})
    createdByName!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
