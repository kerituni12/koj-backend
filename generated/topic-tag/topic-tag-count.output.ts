import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TopicTagCount {

    @Field(() => Int, {nullable:false})
    challenges?: number;
}
