import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    firstname!: number;

    @Field(() => Int, {nullable:false})
    lastname!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    avatar!: number;

    @Field(() => Int, {nullable:false})
    provider!: number;

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
    extendData!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
