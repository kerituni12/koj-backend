import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereInput } from './topic-tag-where.input';
import { TopicTagOrderByWithRelationInput } from './topic-tag-order-by-with-relation.input';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TopicTagScalarFieldEnum } from './topic-tag-scalar-field.enum';

@ArgsType()
export class FindFirstTopicTagArgs {

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

    @Field(() => [TopicTagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TopicTagScalarFieldEnum>;
}
