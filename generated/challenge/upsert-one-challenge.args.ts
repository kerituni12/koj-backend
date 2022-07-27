import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { ChallengeCreateInput } from './challenge-create.input';
import { ChallengeUpdateInput } from './challenge-update.input';

@ArgsType()
export class UpsertOneChallengeArgs {

    @Field(() => ChallengeWhereUniqueInput, {nullable:false})
    where!: ChallengeWhereUniqueInput;

    @Field(() => ChallengeCreateInput, {nullable:false})
    create!: ChallengeCreateInput;

    @Field(() => ChallengeUpdateInput, {nullable:false})
    update!: ChallengeUpdateInput;
}
