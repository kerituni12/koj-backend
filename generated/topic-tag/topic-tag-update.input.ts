import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeUpdateManyWithoutTopicTagsInput } from '../challenge/challenge-update-many-without-topic-tags.input';

@InputType()
export class TopicTagUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @HideField()
    domainId?: number;

    @Field(() => ChallengeUpdateManyWithoutTopicTagsInput, {nullable:true})
    challenges?: ChallengeUpdateManyWithoutTopicTagsInput;
}
