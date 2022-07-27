import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionStatisticWhereInput {

    @Field(() => [SubmissionStatisticWhereInput], {nullable:true})
    AND?: Array<SubmissionStatisticWhereInput>;

    @Field(() => [SubmissionStatisticWhereInput], {nullable:true})
    OR?: Array<SubmissionStatisticWhereInput>;

    @Field(() => [SubmissionStatisticWhereInput], {nullable:true})
    NOT?: Array<SubmissionStatisticWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    submitCount?: number;

    @Field(() => JsonNullableFilter, {nullable:true})
    info?: JsonNullableFilter;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => Date, {nullable:true})
    lastSubmitTime?: Date | string;
}
