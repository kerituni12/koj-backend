import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeListRelationFilter } from '../challenge/challenge-list-relation-filter.input';

@InputType()
export class TopicTagWhereInput {

    @Field(() => [TopicTagWhereInput], {nullable:true})
    AND?: Array<TopicTagWhereInput>;

    @Field(() => [TopicTagWhereInput], {nullable:true})
    OR?: Array<TopicTagWhereInput>;

    @Field(() => [TopicTagWhereInput], {nullable:true})
    NOT?: Array<TopicTagWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @HideField()
    domainId?: number;

    @Field(() => ChallengeListRelationFilter, {nullable:true})
    challenges?: ChallengeListRelationFilter;
}
