import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { TopicTagCreateWithoutChallengesInput } from './topic-tag-create-without-challenges.input';

@InputType()
export class TopicTagCreateOrConnectWithoutChallengesInput {

    @Field(() => TopicTagWhereUniqueInput, {nullable:false})
    where!: TopicTagWhereUniqueInput;

    @Field(() => TopicTagCreateWithoutChallengesInput, {nullable:false})
    create!: TopicTagCreateWithoutChallengesInput;
}
