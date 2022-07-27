import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    result?: any;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Boolean, {nullable:true})
    shared?: boolean;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
