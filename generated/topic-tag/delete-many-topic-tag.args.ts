import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicTagWhereInput } from './topic-tag-where.input';

@ArgsType()
export class DeleteManyTopicTagArgs {

    @Field(() => TopicTagWhereInput, {nullable:true})
    where?: TopicTagWhereInput;
}
