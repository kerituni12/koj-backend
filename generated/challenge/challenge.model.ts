import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { TopicTag } from '../topic-tag/topic-tag.model';
import { HideField } from '@nestjs/graphql';
import { ChallengeCount } from './challenge-count.output';

@ObjectType()
export class Challenge {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [Int], {nullable:true})
    acceptedLanguages!: Array<number>;

    @Field(() => GraphQLJSON, {nullable:true})
    languages!: any | null;

    @Field(() => Float, {nullable:true})
    rate!: number | null;

    @Field(() => String, {nullable:false,defaultValue:'onlyme'})
    audience!: string;

    @Field(() => String, {nullable:true})
    functionName!: string | null;

    @Field(() => Int, {nullable:true})
    commentCount!: number | null;

    @Field(() => Int, {nullable:true})
    contestId!: number | null;

    @Field(() => String, {nullable:false,defaultValue:'disabled'})
    status!: string;

    @Field(() => Int, {nullable:true})
    categoryId!: number | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Int], {nullable:true})
    companyTags!: Array<number>;

    @Field(() => [TopicTag], {nullable:true})
    topicTags?: Array<TopicTag>;

    @Field(() => GraphQLJSON, {nullable:true})
    contributors!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    examples!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    inputs!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    structs!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    types!: any | null;

    @Field(() => String, {nullable:false})
    output!: string;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    hint!: any | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isFavorited!: boolean;

    @Field(() => Int, {nullable:true})
    officalSolutionCount!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    testcases!: any | null;

    @Field(() => String, {nullable:false,defaultValue:'easy'})
    difficulty!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likes!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikes!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    solutions!: any | null;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;

    @Field(() => String, {nullable:true})
    createdByUsername!: string | null;

    @Field(() => String, {nullable:true})
    createdByName!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => ChallengeCount, {nullable:false})
    _count?: ChallengeCount;
}
