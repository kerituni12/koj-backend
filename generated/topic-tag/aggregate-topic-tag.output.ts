import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TopicTagCountAggregate } from './topic-tag-count-aggregate.output';
import { TopicTagAvgAggregate } from './topic-tag-avg-aggregate.output';
import { TopicTagSumAggregate } from './topic-tag-sum-aggregate.output';
import { TopicTagMinAggregate } from './topic-tag-min-aggregate.output';
import { TopicTagMaxAggregate } from './topic-tag-max-aggregate.output';

@ObjectType()
export class AggregateTopicTag {

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
