import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeCountAggregate } from './challenge-count-aggregate.output';
import { ChallengeAvgAggregate } from './challenge-avg-aggregate.output';
import { ChallengeSumAggregate } from './challenge-sum-aggregate.output';
import { ChallengeMinAggregate } from './challenge-min-aggregate.output';
import { ChallengeMaxAggregate } from './challenge-max-aggregate.output';

@ObjectType()
export class ChallengeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [Int], {nullable:true})
    acceptedLanguages?: Array<number>;

    @Field(() => GraphQLJSON, {nullable:true})
    languages?: any;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => String, {nullable:false})
    audience!: string;

    @Field(() => String, {nullable:true})
    functionName?: string;

    @Field(() => Int, {nullable:true})
    commentCount?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => [Int], {nullable:true})
    companyTags?: Array<number>;

    @Field(() => GraphQLJSON, {nullable:true})
    contributors?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    examples?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    inputs?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    structs?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    types?: any;

    @Field(() => String, {nullable:false})
    output!: string;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    hint?: any;

    @Field(() => Boolean, {nullable:false})
    isFavorited!: boolean;

    @Field(() => Int, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    testcases?: any;

    @Field(() => String, {nullable:false})
    difficulty!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    dislikes!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    solutions?: any;

    @HideField()
    domainId!: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengeCountAggregate, {nullable:true})
    _count?: ChallengeCountAggregate;

    @Field(() => ChallengeAvgAggregate, {nullable:true})
    _avg?: ChallengeAvgAggregate;

    @Field(() => ChallengeSumAggregate, {nullable:true})
    _sum?: ChallengeSumAggregate;

    @Field(() => ChallengeMinAggregate, {nullable:true})
    _min?: ChallengeMinAggregate;

    @Field(() => ChallengeMaxAggregate, {nullable:true})
    _max?: ChallengeMaxAggregate;
}
