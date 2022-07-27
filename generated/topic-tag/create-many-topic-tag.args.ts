import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagCreateManyInput } from './topic-tag-create-many.input';

@ArgsType()
export class CreateManyTopicTagArgs {

    @Field(() => [TopicTagCreateManyInput], {nullable:false})
    data!: Array<TopicTagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
