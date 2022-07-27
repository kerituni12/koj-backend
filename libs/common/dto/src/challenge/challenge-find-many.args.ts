import { Field, OmitType } from '@nestjs/graphql';
import { FindManyChallengeArgs as FindManyChallengeArgsGenerated } from '@koj/generated/challenge/find-many-challenge.args';
import { KChallengeWhereUniqueInput } from './challenge-where-unique.input';

export class FindManyChallengeArgs extends FindManyChallengeArgsGenerated {
  @Field(() => KChallengeWhereUniqueInput, { nullable: true })
  cursor?: KChallengeWhereUniqueInput;
}
