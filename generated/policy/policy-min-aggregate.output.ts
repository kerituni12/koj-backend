import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class PolicyMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @HideField()
    ptype?: string;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => String, {nullable:true})
    object?: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    effectWith?: string;

    @Field(() => String, {nullable:true})
    condition?: string;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
