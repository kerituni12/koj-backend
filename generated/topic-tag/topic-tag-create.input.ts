import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeCreateNestedManyWithoutTopicTagsInput } from '../challenge/challenge-create-nested-many-without-topic-tags.input';

@InputType()
export class TopicTagCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @HideField()
    domainId?: number;

    @Field(() => ChallengeCreateNestedManyWithoutTopicTagsInput, {nullable:true})
    challenges?: ChallengeCreateNestedManyWithoutTopicTagsInput;
}
