import { Field, HideField } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class KChallengeWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  slug?: string;

  @HideField()
  domainId?: number;
}
