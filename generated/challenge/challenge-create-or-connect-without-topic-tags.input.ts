import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeCreateWithoutTopicTagsInput } from './challenge-create-without-topic-tags.input';

@InputType()
export class ChallengeCreateOrConnectWithoutTopicTagsInput {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeCreateWithoutTopicTagsInput, {nullable:false})
    create!: ChallengeCreateWithoutTopicTagsInput;
}
