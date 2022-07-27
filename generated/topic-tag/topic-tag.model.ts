import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Challenge } from '../challenge/challenge.model';
import { TopicTagCount } from './topic-tag-count.output';

@ObjectType()
export class TopicTag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false,defaultValue:'disabled'})
    status!: string;

    @HideField()
    domainId!: number;

    @Field(() => [Challenge], {nullable:true})
    challenges?: Array<Challenge>;

    @Field(() => TopicTagCount, {nullable:false})
    _count?: TopicTagCount;
}
