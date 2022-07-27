import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereInput } from '../topic-tag/topic-tag-where.input';
import { TopicTagOrderByWithAggregationInput } from '../topic-tag/topic-tag-order-by-with-aggregation.input';
import { TopicTagScalarFieldEnum } from '../topic-tag/topic-tag-scalar-field.enum';
import { TopicTagScalarWhereWithAggregatesInput } from '../topic-tag/topic-tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByTopicTagArgs {

    @Field(() => TopicTagWhereInput, {nullable:true})
    where?: TopicTagWhereInput;

    @Field(() => [TopicTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TopicTagOrderByWithAggregationInput>;

    @Field(() => [TopicTagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TopicTagScalarFieldEnum>;

    @Field(() => TopicTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: TopicTagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
