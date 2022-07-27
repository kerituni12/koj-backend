import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { TopicTagCountAggregate } from './topic-tag-count-aggregate.output';
import { TopicTagAvgAggregate } from './topic-tag-avg-aggregate.output';
import { TopicTagSumAggregate } from './topic-tag-sum-aggregate.output';
import { TopicTagMinAggregate } from './topic-tag-min-aggregate.output';
import { TopicTagMaxAggregate } from './topic-tag-max-aggregate.output';

@ObjectType()
export class TopicTagGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @HideField()
    domainId!: number;

    @Field(() => TopicTagCountAggregate, {nullable:true})
    _count?: TopicTagCountAggregate;

    @Field(() => TopicTagAvgAggregate, {nullable:true})
    _avg?: TopicTagAvgAggregate;

    @Field(() => TopicTagSumAggregate, {nullable:true})
    _sum?: TopicTagSumAggregate;

    @Field(() => TopicTagMinAggregate, {nullable:true})
    _min?: TopicTagMinAggregate;

    @Field(() => TopicTagMaxAggregate, {nullable:true})
    _max?: TopicTagMaxAggregate;
}
