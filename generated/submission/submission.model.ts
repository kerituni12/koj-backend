import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Submission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    languageId!: string | null;

    @Field(() => Int, {nullable:true})
    challengeId!: number | null;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    result!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    info!: any | null;

    @Field(() => String, {nullable:true})
    ip!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    shared!: boolean;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;

    @Field(() => String, {nullable:true})
    createdByUsername!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
