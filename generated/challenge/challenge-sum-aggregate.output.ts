import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ChallengeSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [Int], {nullable:true})
    acceptedLanguages?: Array<number>;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => Int, {nullable:true})
    commentCount?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => [Int], {nullable:true})
    companyTags?: Array<number>;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => Int, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
