import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionStatisticAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    challengeId?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Float, {nullable:true})
    submitCount?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
