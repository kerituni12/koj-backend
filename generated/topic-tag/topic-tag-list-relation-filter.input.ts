import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagWhereInput } from './topic-tag-where.input';

@InputType()
export class TopicTagListRelationFilter {

    @Field(() => TopicTagWhereInput, {nullable:true})
    every?: TopicTagWhereInput;

    @Field(() => TopicTagWhereInput, {nullable:true})
    some?: TopicTagWhereInput;

    @Field(() => TopicTagWhereInput, {nullable:true})
    none?: TopicTagWhereInput;
}
