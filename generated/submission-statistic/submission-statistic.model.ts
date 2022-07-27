import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionStatistic {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    challengeId!: number | null;

    @Field(() => String, {nullable:true})
    languageId!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    score!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    submitCount!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    info!: any | null;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;

    @Field(() => String, {nullable:true})
    createdByUsername!: string | null;

    @Field(() => Date, {nullable:false})
    lastSubmitTime!: Date;
}
