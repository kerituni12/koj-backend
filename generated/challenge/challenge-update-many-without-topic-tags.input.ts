import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeCreateWithoutTopicTagsInput } from './challenge-create-without-topic-tags.input';
import { ChallengeCreateOrConnectWithoutTopicTagsInput } from './challenge-create-or-connect-without-topic-tags.input';
import { ChallengeUpsertWithWhereUniqueWithoutTopicTagsInput } from './challenge-upsert-with-where-unique-without-topic-tags.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeUpdateWithWhereUniqueWithoutTopicTagsInput } from './challenge-update-with-where-unique-without-topic-tags.input';
import { ChallengeUpdateManyWithWhereWithoutTopicTagsInput } from './challenge-update-many-with-where-without-topic-tags.input';
import { ChallengeScalarWhereInput } from './challenge-scalar-where.input';

@InputType()
export class ChallengeUpdateManyWithoutTopicTagsInput {

    @Field(() => [ChallengeCreateWithoutTopicTagsInput], {nullable:true})
    create?: Array<ChallengeCreateWithoutTopicTagsInput>;

    @Field(() => [ChallengeCreateOrConnectWithoutTopicTagsInput], {nullable:true})
    connectOrCreate?: Array<ChallengeCreateOrConnectWithoutTopicTagsInput>;

    @Field(() => [ChallengeUpsertWithWhereUniqueWithoutTopicTagsInput], {nullable:true})
    upsert?: Array<ChallengeUpsertWithWhereUniqueWithoutTopicTagsInput>;

    @Field(() => [ChallengeWhereUniqueInput], {nullable:true})
    set?: Array<ChallengeWhereUniqueInput>;

    @Field(() => [ChallengeWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChallengeWhereUniqueInput>;

    @Field(() => [ChallengeWhereUniqueInput], {nullable:true})
    delete?: Array<ChallengeWhereUniqueInput>;

    @Field(() => [ChallengeWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengeWhereUniqueInput>;

    @Field(() => [ChallengeUpdateWithWhereUniqueWithoutTopicTagsInput], {nullable:true})
    update?: Array<ChallengeUpdateWithWhereUniqueWithoutTopicTagsInput>;

    @Field(() => [ChallengeUpdateManyWithWhereWithoutTopicTagsInput], {nullable:true})
    updateMany?: Array<ChallengeUpdateManyWithWhereWithoutTopicTagsInput>;

    @Field(() => [ChallengeScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChallengeScalarWhereInput>;
}
