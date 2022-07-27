import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';

@ArgsType()
export class FindUniqueChallengeArgs {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;
}
