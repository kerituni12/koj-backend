import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';

@ArgsType()
export class FindUniqueTopicTagArgs {

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;
}
