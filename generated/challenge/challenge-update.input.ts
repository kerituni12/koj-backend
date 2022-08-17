import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeUpdateacceptedLanguagesInput } from '../prisma/challenge-updateaccepted-languages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChallengeUpdatecompanyTagsInput } from '../prisma/challenge-updatecompany-tags.input';
import { TopicTagUpdateManyWithoutChallengesInput } from '../topic-tag/topic-tag-update-many-without-challenges.input';

@InputType()
export class ChallengeUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => ChallengeUpdateacceptedLanguagesInput, {nullable:true})
    acceptedLanguages?: ChallengeUpdateacceptedLanguagesInput;

    @Field(() => GraphQLJSON, {nullable:true})
    languages?: any;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => String, {nullable:true})
    audience?: string;

    @Field(() => String, {nullable:true})
    functionName?: string;

    @HideField()
    commentCount?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ChallengeUpdatecompanyTagsInput, {nullable:true})
    companyTags?: ChallengeUpdatecompanyTagsInput;

    @Field(() => TopicTagUpdateManyWithoutChallengesInput, {nullable:true})
    topicTags?: TopicTagUpdateManyWithoutChallengesInput;

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

    @Field(() => String, {nullable:true})
    output?: string;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    hint?: any;

    @Field(() => Boolean, {nullable:true})
    isFavorited?: boolean;

    @Field(() => Int, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    testcases?: any;

    @Field(() => String, {nullable:true})
    difficulty?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    solutions?: any;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
