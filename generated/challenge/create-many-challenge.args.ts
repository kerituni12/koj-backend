import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeCreateManyInput } from './challenge-create-many.input';

@ArgsType()
export class CreateManyChallengeArgs {

    @Field(() => [ChallengeCreateManyInput], {nullable:false})
    data!: Array<ChallengeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
