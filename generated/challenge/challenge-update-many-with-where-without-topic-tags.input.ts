import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeScalarWhereInput } from './challenge-scalar-where.input';
import { ChallengeUpdateManyMutationInput } from './challenge-update-many-mutation.input';

@InputType()
export class ChallengeUpdateManyWithWhereWithoutTopicTagsInput {

    @Field(() => ChallengeScalarWhereInput, {nullable:false})
    where!: ChallengeScalarWhereInput;

    @Field(() => ChallengeUpdateManyMutationInput, {nullable:false})
    data!: ChallengeUpdateManyMutationInput;
}
