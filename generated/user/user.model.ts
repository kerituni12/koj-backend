import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false,defaultValue:''})
    email!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    username!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    firstname!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    lastname!: string;

    @Field(() => String, {nullable:false,defaultValue:'disabled'})
    status!: string;

    @Field(() => String, {nullable:false,defaultValue:'user'})
    role!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'koj'})
    provider!: string;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;

    @Field(() => String, {nullable:true})
    createdByUsername!: string | null;

    @Field(() => String, {nullable:true})
    createdByName!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    extendData!: any | null;
}
