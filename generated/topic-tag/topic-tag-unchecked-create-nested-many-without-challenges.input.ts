import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagCreateWithoutChallengesInput } from './topic-tag-create-without-challenges.input';
import { TopicTagCreateOrConnectWithoutChallengesInput } from './topic-tag-create-or-connect-without-challenges.input';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';

@InputType()
export class TopicTagUncheckedCreateNestedManyWithoutChallengesInput {

    @Field(() => [TopicTagCreateWithoutChallengesInput], {nullable:true})
    create?: Array<TopicTagCreateWithoutChallengesInput>;

    @Field(() => [TopicTagCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<TopicTagCreateOrConnectWithoutChallengesInput>;

    @Field(() => [TopicTagWhereUniqueInput], {nullable:true})
    connect?: Array<TopicTagWhereUniqueInput>;
}
