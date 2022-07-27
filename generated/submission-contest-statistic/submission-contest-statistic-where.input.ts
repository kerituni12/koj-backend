import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestStatisticWhereInput {

    @Field(() => [SubmissionContestStatisticWhereInput], {nullable:true})
    AND?: Array<SubmissionContestStatisticWhereInput>;

    @Field(() => [SubmissionContestStatisticWhereInput], {nullable:true})
    OR?: Array<SubmissionContestStatisticWhereInput>;

    @Field(() => [SubmissionContestStatisticWhereInput], {nullable:true})
    NOT?: Array<SubmissionContestStatisticWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => JsonNullableFilter, {nullable:true})
    info?: JsonNullableFilter;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;
}
