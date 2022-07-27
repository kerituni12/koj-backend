import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    result?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    info?: any;

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
