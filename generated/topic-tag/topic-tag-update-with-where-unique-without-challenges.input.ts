import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { TopicTagUpdateWithoutChallengesInput } from './topic-tag-update-without-challenges.input';

@InputType()
export class TopicTagUpdateWithWhereUniqueWithoutChallengesInput {

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;

    @Field(() => TopicTagUpdateWithoutChallengesInput, {nullable:false})
    data!: TopicTagUpdateWithoutChallengesInput;
}
