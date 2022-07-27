import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';

@ArgsType()
export class DeleteManyChallengeArgs {

    @Field(() => ChallengeWhereInput, {nullable:true})
    where?: ChallengeWhereInput;
}
