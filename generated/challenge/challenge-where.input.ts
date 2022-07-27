import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { TopicTagListRelationFilter } from '../topic-tag/topic-tag-list-relation-filter.input';

@InputType()
export class ChallengeWhereInput {

    @Field(() => [ChallengeWhereInput], {nullable:true})
    AND?: Array<ChallengeWhereInput>;

    @Field(() => [ChallengeWhereInput], {nullable:true})
    OR?: Array<ChallengeWhereInput>;

    @Field(() => [ChallengeWhereInput], {nullable:true})
    NOT?: Array<ChallengeWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => IntNullableListFilter, {nullable:true})
    acceptedLanguages?: IntNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    languages?: JsonNullableFilter;

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

    @Field(() => IntNullableListFilter, {nullable:true})
    companyTags?: IntNullableListFilter;

    @Field(() => TopicTagListRelationFilter, {nullable:true})
    topicTags?: TopicTagListRelationFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contributors?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    examples?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    inputs?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    structs?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    types?: JsonNullableFilter;

    @Field(() => String, {nullable:true})
    output?: string;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => JsonNullableFilter, {nullable:true})
    hint?: JsonNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isFavorited?: boolean;

    @Field(() => Int, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => JsonNullableFilter, {nullable:true})
    testcases?: JsonNullableFilter;

    @Field(() => String, {nullable:true})
    difficulty?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => JsonNullableFilter, {nullable:true})
    solutions?: JsonNullableFilter;

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
