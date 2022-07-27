import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ChallengeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    acceptedLanguages?: true;

    @Field(() => Boolean, {nullable:true})
    languages?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;

    @Field(() => Boolean, {nullable:true})
    audience?: true;

    @Field(() => Boolean, {nullable:true})
    functionName?: true;

    @HideField()
    commentCount?: true;

    @Field(() => Boolean, {nullable:true})
    contestId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    companyTags?: true;

    @Field(() => Boolean, {nullable:true})
    contributors?: true;

    @Field(() => Boolean, {nullable:true})
    examples?: true;

    @Field(() => Boolean, {nullable:true})
    inputs?: true;

    @Field(() => Boolean, {nullable:true})
    structs?: true;

    @Field(() => Boolean, {nullable:true})
    types?: true;

    @Field(() => Boolean, {nullable:true})
    output?: true;

    @Field(() => Boolean, {nullable:true})
    highlightSolutionCount?: true;

    @Field(() => Boolean, {nullable:true})
    hint?: true;

    @Field(() => Boolean, {nullable:true})
    isFavorited?: true;

    @Field(() => Boolean, {nullable:true})
    officalSolutionCount?: true;

    @Field(() => Boolean, {nullable:true})
    testcases?: true;

    @Field(() => Boolean, {nullable:true})
    difficulty?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    dislikes?: true;

    @Field(() => Boolean, {nullable:true})
    solutions?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;

    @HideField()
    createdByUsername?: true;

    @Field(() => Boolean, {nullable:true})
    createdByName?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
