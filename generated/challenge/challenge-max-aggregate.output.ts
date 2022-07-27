import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ChallengeMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => String, {nullable:true})
    audience?: string;

    @Field(() => String, {nullable:true})
    functionName?: string;

    @Field(() => Int, {nullable:true})
    commentCount?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    output?: string;

    @Field(() => Int, {nullable:true})
    highlightSolutionCount?: number;

    @Field(() => Boolean, {nullable:true})
    isFavorited?: boolean;

    @Field(() => Int, {nullable:true})
    officalSolutionCount?: number;

    @Field(() => String, {nullable:true})
    difficulty?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
