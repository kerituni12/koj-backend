import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagUpdateInput } from './topic-tag-update.input';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';

@ArgsType()
export class UpdateOneTopicTagArgs {

    @Field(() => TopicTagUpdateInput, {nullable:false})
    data!: TopicTagUpdateInput;

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;
}
