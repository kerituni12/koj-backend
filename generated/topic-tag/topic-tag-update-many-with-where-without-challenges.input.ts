import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicTagScalarWhereInput } from './topic-tag-scalar-where.input';
import { TopicTagUpdateManyMutationInput } from './topic-tag-update-many-mutation.input';

@InputType()
export class TopicTagUpdateManyWithWhereWithoutChallengesInput {

    @Field(() => TopicTagScalarWhereInput, {nullable:false})
    where!: TopicTagScalarWhereInput;

    @Field(() => TopicTagUpdateManyMutationInput, {nullable:false})
    data!: TopicTagUpdateManyMutationInput;
}
