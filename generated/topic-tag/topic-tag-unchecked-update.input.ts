import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeUncheckedUpdateManyWithoutTopicTagsNestedInput } from '../challenge/challenge-unchecked-update-many-without-topic-tags-nested.input';

@InputType()
export class TopicTagUncheckedUpdateInput {

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

    @Field(() => ChallengeUncheckedUpdateManyWithoutTopicTagsNestedInput, {nullable:true})
    challenges?: ChallengeUncheckedUpdateManyWithoutTopicTagsNestedInput;
}
