import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';
import { SubmissionCountAggregate } from './submission-count-aggregate.output';
import { SubmissionAvgAggregate } from './submission-avg-aggregate.output';
import { SubmissionSumAggregate } from './submission-sum-aggregate.output';
import { SubmissionMinAggregate } from './submission-min-aggregate.output';
import { SubmissionMaxAggregate } from './submission-max-aggregate.output';

@ObjectType()
export class SubmissionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    result?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    info?: any;

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

    @Field(() => SubmissionCountAggregate, {nullable:true})
    _count?: SubmissionCountAggregate;

    @Field(() => SubmissionAvgAggregate, {nullable:true})
    _avg?: SubmissionAvgAggregate;

    @Field(() => SubmissionSumAggregate, {nullable:true})
    _sum?: SubmissionSumAggregate;

    @Field(() => SubmissionMinAggregate, {nullable:true})
    _min?: SubmissionMinAggregate;

    @Field(() => SubmissionMaxAggregate, {nullable:true})
    _max?: SubmissionMaxAggregate;
}
