import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionContestAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    contestId?: number;

    @Field(() => Float, {nullable:true})
    challengeId?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
