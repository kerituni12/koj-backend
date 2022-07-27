import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeUpdateWithoutTopicTagsInput } from './challenge-update-without-topic-tags.input';
import { ChallengeCreateWithoutTopicTagsInput } from './challenge-create-without-topic-tags.input';

@InputType()
export class ChallengeUpsertWithWhereUniqueWithoutTopicTagsInput {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeUpdateWithoutTopicTagsInput, {nullable:false})
    update!: ChallengeUpdateWithoutTopicTagsInput;

    @Field(() => ChallengeCreateWithoutTopicTagsInput, {nullable:false})
    create!: ChallengeCreateWithoutTopicTagsInput;
}
