import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeUpdateWithoutTopicTagsInput } from './challenge-update-without-topic-tags.input';

@InputType()
export class ChallengeUpdateWithWhereUniqueWithoutTopicTagsInput {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeUpdateWithoutTopicTagsInput, {nullable:false})
    data!: ChallengeUpdateWithoutTopicTagsInput;
}
