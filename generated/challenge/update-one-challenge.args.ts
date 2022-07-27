import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeUpdateInput } from './challenge-update.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';

@ArgsType()
export class UpdateOneChallengeArgs {

    @Field(() => ChallengeUpdateInput, {nullable:false})
    data!: ChallengeUpdateInput;

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;
}
