import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput } from './submission-statistic-created-by-id-challenge-id-compound-unique.input';

@InputType()
export class SubmissionStatisticWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput, {nullable:true})
    createdById_challengeId?: SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput;
}
