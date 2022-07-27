import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ChallengeAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    acceptedLanguages?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => Float, {nullable:true})
    commentCount?: number;

    @Field(() => Float, {nullable:true})
    contestId?: number;

    @Field(() => Float, {nullable:true})
    categoryId?: number;

    @Field(() => Float, {nullable:true})
    companyTags?: number;

    @Field(() => Float, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => Float, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => Float, {nullable:true})
    likes?: number;

    @Field(() => Float, {nullable:true})
    dislikes?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
