import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';
import { SubmissionStatisticCountAggregate } from './submission-statistic-count-aggregate.output';
import { SubmissionStatisticAvgAggregate } from './submission-statistic-avg-aggregate.output';
import { SubmissionStatisticSumAggregate } from './submission-statistic-sum-aggregate.output';
import { SubmissionStatisticMinAggregate } from './submission-statistic-min-aggregate.output';
import { SubmissionStatisticMaxAggregate } from './submission-statistic-max-aggregate.output';

@ObjectType()
export class SubmissionStatisticGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    submitCount!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    info?: any;

    @HideField()
    domainId!: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => Date, {nullable:false})
    lastSubmitTime!: Date | string;

    @Field(() => SubmissionStatisticCountAggregate, {nullable:true})
    _count?: SubmissionStatisticCountAggregate;

    @Field(() => SubmissionStatisticAvgAggregate, {nullable:true})
    _avg?: SubmissionStatisticAvgAggregate;

    @Field(() => SubmissionStatisticSumAggregate, {nullable:true})
    _sum?: SubmissionStatisticSumAggregate;

    @Field(() => SubmissionStatisticMinAggregate, {nullable:true})
    _min?: SubmissionStatisticMinAggregate;

    @Field(() => SubmissionStatisticMaxAggregate, {nullable:true})
    _max?: SubmissionStatisticMaxAggregate;
}
