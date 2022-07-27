import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagCreateInput } from './topic-tag-create.input';

@ArgsType()
export class CreateOneTopicTagArgs {

    @Field(() => TopicTagCreateInput, {nullable:false})
    data!: TopicTagCreateInput;
}
