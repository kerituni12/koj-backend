import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeCreateInput } from './challenge-create.input';

@ArgsType()
export class CreateOneChallengeArgs {

    @Field(() => ChallengeCreateInput, {nullable:false})
    data!: ChallengeCreateInput;
}
