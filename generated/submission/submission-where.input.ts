import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionWhereInput {

    @Field(() => [SubmissionWhereInput], {nullable:true})
    AND?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    OR?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    NOT?: Array<SubmissionWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    languageId?: string;

    @Field(() => Int, {nullable:true})
    challengeId?: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => JsonNullableFilter, {nullable:true})
    result?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    info?: JsonNullableFilter;

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
