import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestStatisticUpdateInput {

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    info?: any;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
