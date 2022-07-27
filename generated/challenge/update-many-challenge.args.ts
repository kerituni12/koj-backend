import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeUpdateManyMutationInput } from './challenge-update-many-mutation.input';
import { ChallengeWhereInput } from './challenge-where.input';

@ArgsType()
export class UpdateManyChallengeArgs {

    @Field(() => ChallengeUpdateManyMutationInput, {nullable:false})
    data!: ChallengeUpdateManyMutationInput;

    @Field(() => ChallengeWhereInput, {nullable:true})
    where?: ChallengeWhereInput;
}
