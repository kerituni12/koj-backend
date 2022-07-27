import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { TopicTagCreateInput } from './topic-tag-create.input';
import { TopicTagUpdateInput } from './topic-tag-update.input';

@ArgsType()
export class UpsertOneTopicTagArgs {

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;

    @Field(() => TopicTagCreateInput, {nullable:false})
    create!: TopicTagCreateInput;

    @Field(() => TopicTagUpdateInput, {nullable:false})
    update!: TopicTagUpdateInput;
}
