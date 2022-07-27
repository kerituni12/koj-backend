import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ChallengeUncheckedCreateNestedManyWithoutTopicTagsInput } from '../challenge/challenge-unchecked-create-nested-many-without-topic-tags.input';

@InputType()
export class TopicTagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @HideField()
    domainId?: number;

    @Field(() => ChallengeUncheckedCreateNestedManyWithoutTopicTagsInput, {nullable:true})
    challenges?: ChallengeUncheckedCreateNestedManyWithoutTopicTagsInput;
}
