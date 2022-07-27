import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ChallengeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    acceptedLanguages!: number;

    @Field(() => Int, {nullable:false})
    languages!: number;

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => Int, {nullable:false})
    audience!: number;

    @Field(() => Int, {nullable:false})
    functionName!: number;

    @Field(() => Int, {nullable:false})
    commentCount!: number;

    @Field(() => Int, {nullable:false})
    contestId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    companyTags!: number;

    @Field(() => Int, {nullable:false})
    contributors!: number;

    @Field(() => Int, {nullable:false})
    examples!: number;

    @Field(() => Int, {nullable:false})
    inputs!: number;

    @Field(() => Int, {nullable:false})
    structs!: number;

    @Field(() => Int, {nullable:false})
    types!: number;

    @Field(() => Int, {nullable:false})
    output!: number;

    @Field(() => Int, {nullable:false})
    highlightSolutionCount!: number;

    @Field(() => Int, {nullable:false})
    hint!: number;

    @Field(() => Int, {nullable:false})
    isFavorited!: number;

    @Field(() => Int, {nullable:false})
    officalSolutionCount!: number;

    @Field(() => Int, {nullable:false})
    testcases!: number;

    @Field(() => Int, {nullable:false})
    difficulty!: number;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    dislikes!: number;

    @Field(() => Int, {nullable:false})
    solutions!: number;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdByUsername!: number;

    @Field(() => Int, {nullable:false})
    createdByName!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
