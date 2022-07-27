import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionStatisticCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    challengeId!: number;

    @Field(() => Int, {nullable:false})
    languageId!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    submitCount!: number;

    @Field(() => Int, {nullable:false})
    info!: number;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdByUsername!: number;

    @Field(() => Int, {nullable:false})
    lastSubmitTime!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
