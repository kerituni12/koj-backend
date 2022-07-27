import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagUpdateManyMutationInput } from './topic-tag-update-many-mutation.input';
import { TopicTagWhereInput } from './topic-tag-where.input';

@ArgsType()
export class UpdateManyTopicTagArgs {

    @Field(() => TopicTagUpdateManyMutationInput, {nullable:false})
    data!: TopicTagUpdateManyMutationInput;

    @Field(() => TopicTagWhereInput, {nullable:true})
    where?: TopicTagWhereInput;
}
