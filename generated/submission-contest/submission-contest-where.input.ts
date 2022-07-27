import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestWhereInput {

    @Field(() => [SubmissionContestWhereInput], {nullable:true})
    AND?: Array<SubmissionContestWhereInput>;

    @Field(() => [SubmissionContestWhereInput], {nullable:true})
    OR?: Array<SubmissionContestWhereInput>;

    @Field(() => [SubmissionContestWhereInput], {nullable:true})
    NOT?: Array<SubmissionContestWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => JsonNullableFilter, {nullable:true})
    result?: JsonNullableFilter;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Boolean, {nullable:true})
    shared?: boolean;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
