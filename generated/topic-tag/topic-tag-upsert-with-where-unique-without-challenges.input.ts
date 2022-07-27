import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { TopicTagUpdateWithoutChallengesInput } from './topic-tag-update-without-challenges.input';
import { TopicTagCreateWithoutChallengesInput } from './topic-tag-create-without-challenges.input';

@InputType()
export class TopicTagUpsertWithWhereUniqueWithoutChallengesInput {

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;

    @Field(() => TopicTagUpdateWithoutChallengesInput, {nullable:false})
    update!: TopicTagUpdateWithoutChallengesInput;

    @Field(() => TopicTagCreateWithoutChallengesInput, {nullable:false})
    create!: TopicTagCreateWithoutChallengesInput;
}
