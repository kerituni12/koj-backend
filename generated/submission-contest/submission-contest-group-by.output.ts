import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';
import { SubmissionContestCountAggregate } from './submission-contest-count-aggregate.output';
import { SubmissionContestAvgAggregate } from './submission-contest-avg-aggregate.output';
import { SubmissionContestSumAggregate } from './submission-contest-sum-aggregate.output';
import { SubmissionContestMinAggregate } from './submission-contest-min-aggregate.output';
import { SubmissionContestMaxAggregate } from './submission-contest-max-aggregate.output';

@ObjectType()
export class SubmissionContestGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    result?: any;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Boolean, {nullable:false})
    shared!: boolean;

    @HideField()
    domainId!: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => SubmissionContestCountAggregate, {nullable:true})
    _count?: SubmissionContestCountAggregate;

    @Field(() => SubmissionContestAvgAggregate, {nullable:true})
    _avg?: SubmissionContestAvgAggregate;

    @Field(() => SubmissionContestSumAggregate, {nullable:true})
    _sum?: SubmissionContestSumAggregate;

    @Field(() => SubmissionContestMinAggregate, {nullable:true})
    _min?: SubmissionContestMinAggregate;

    @Field(() => SubmissionContestMaxAggregate, {nullable:true})
    _max?: SubmissionContestMaxAggregate;
}
