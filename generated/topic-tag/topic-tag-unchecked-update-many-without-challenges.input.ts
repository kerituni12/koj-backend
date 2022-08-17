import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagCreateWithoutChallengesInput } from './topic-tag-create-without-challenges.input';
import { TopicTagCreateOrConnectWithoutChallengesInput } from './topic-tag-create-or-connect-without-challenges.input';
import { TopicTagUpsertWithWhereUniqueWithoutChallengesInput } from './topic-tag-upsert-with-where-unique-without-challenges.input';
import { TopicTagWhereUniqueInput } from './topic-tag-where-unique.input';
import { TopicTagUpdateWithWhereUniqueWithoutChallengesInput } from './topic-tag-update-with-where-unique-without-challenges.input';
import { TopicTagUpdateManyWithWhereWithoutChallengesInput } from './topic-tag-update-many-with-where-without-challenges.input';
import { TopicTagScalarWhereInput } from './topic-tag-scalar-where.input';

@InputType()
export class TopicTagUncheckedUpdateManyWithoutChallengesInput {

    @Field(() => [TopicTagCreateWithoutChallengesInput], {nullable:true})
    create?: Array<TopicTagCreateWithoutChallengesInput>;

    @Field(() => [TopicTagCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<TopicTagCreateOrConnectWithoutChallengesInput>;

    @Field(() => [TopicTagUpsertWithWhereUniqueWithoutChallengesInput], {nullable:true})
    upsert?: Array<TopicTagUpsertWithWhereUniqueWithoutChallengesInput>;

    @Field(() => [TopicTagWhereUniqueInput], {nullable:true})
    set?: Array<TopicTagWhereUniqueInput>;

    @Field(() => [TopicTagWhereUniqueInput], {nullable:true})
    disconnect?: Array<TopicTagWhereUniqueInput>;

    @Field(() => [TopicTagWhereUniqueInput], {nullable:true})
    delete?: Array<TopicTagWhereUniqueInput>;

    @Field(() => [TopicTagWhereUniqueInput], {nullable:true})
    connect?: Array<TopicTagWhereUniqueInput>;

    @Field(() => [TopicTagUpdateWithWhereUniqueWithoutChallengesInput], {nullable:true})
    update?: Array<TopicTagUpdateWithWhereUniqueWithoutChallengesInput>;

    @Field(() => [TopicTagUpdateManyWithWhereWithoutChallengesInput], {nullable:true})
    updateMany?: Array<TopicTagUpdateManyWithWhereWithoutChallengesInput>;

    @Field(() => [TopicTagScalarWhereInput], {nullable:true})
    deleteMany?: Array<TopicTagScalarWhereInput>;
}
