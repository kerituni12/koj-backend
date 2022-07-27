import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionContestSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
