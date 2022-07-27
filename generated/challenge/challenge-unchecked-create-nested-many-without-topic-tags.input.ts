import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateWithoutTopicTagsInput } from './challenge-create-without-topic-tags.input';
import { ChallengeCreateOrConnectWithoutTopicTagsInput } from './challenge-create-or-connect-without-topic-tags.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';

@InputType()
export class ChallengeUncheckedCreateNestedManyWithoutTopicTagsInput {

    @Field(() => [ChallengeCreateWithoutTopicTagsInput], {nullable:true})
    create?: Array<ChallengeCreateWithoutTopicTagsInput>;

    @Field(() => [ChallengeCreateOrConnectWithoutTopicTagsInput], {nullable:true})
    connectOrCreate?: Array<ChallengeCreateOrConnectWithoutTopicTagsInput>;

    @Field(() => [ChallengeWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengeWhereUniqueInput>;
}
