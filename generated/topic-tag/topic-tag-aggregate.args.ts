import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereInput } from './topic-tag-where.input';
import { TopicTagOrderByWithRelationInput } from './topic-tag-order-by-with-relation.input';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TopicTagCountAggregateInput } from './topic-tag-count-aggregate.input';
import { TopicTagAvgAggregateInput } from './topic-tag-avg-aggregate.input';
import { TopicTagSumAggregateInput } from './topic-tag-sum-aggregate.input';
import { TopicTagMinAggregateInput } from './topic-tag-min-aggregate.input';
import { TopicTagMaxAggregateInput } from './topic-tag-max-aggregate.input';

@ArgsType()
export class TopicTagAggregateArgs {

    @Field(() => TopicTagWhereInput, {nullable:true})
    where?: TopicTagWhereInput;

    @Field(() => [TopicTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicTagOrderByWithRelationInput>;

    @Field(() => TopicTagWhereUniqueInput, {nullable:true})
    cursor?: TopicTagWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TopicTagCountAggregateInput, {nullable:true})
    _count?: TopicTagCountAggregateInput;

    @Field(() => TopicTagAvgAggregateInput, {nullable:true})
    _avg?: TopicTagAvgAggregateInput;

    @Field(() => TopicTagSumAggregateInput, {nullable:true})
    _sum?: TopicTagSumAggregateInput;

    @Field(() => TopicTagMinAggregateInput, {nullable:true})
    _min?: TopicTagMinAggregateInput;

    @Field(() => TopicTagMaxAggregateInput, {nullable:true})
    _max?: TopicTagMaxAggregateInput;
}
