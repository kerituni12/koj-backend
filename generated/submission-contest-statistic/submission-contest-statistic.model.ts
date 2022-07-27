import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionContestStatistic {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    contestId!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    info!: any | null;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;
}
