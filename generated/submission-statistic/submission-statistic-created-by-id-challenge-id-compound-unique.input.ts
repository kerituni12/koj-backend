import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput {

    @HideField()
    createdById!: number;

    @Field(() => Int, {nullable:false})
    challengeId!: number;
}
