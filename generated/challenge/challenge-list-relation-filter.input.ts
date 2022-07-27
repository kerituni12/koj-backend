import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';

@InputType()
export class ChallengeListRelationFilter {

    @Field(() => ChallengeWhereInput, {nullable:true})
    every?: ChallengeWhereInput;

    @Field(() => ChallengeWhereInput, {nullable:true})
    some?: ChallengeWhereInput;

    @Field(() => ChallengeWhereInput, {nullable:true})
    none?: ChallengeWhereInput;
}
