import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionContestMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Boolean, {nullable:true})
    shared?: boolean;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
