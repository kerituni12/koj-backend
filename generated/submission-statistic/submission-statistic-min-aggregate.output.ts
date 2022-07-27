import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class SubmissionStatisticMinAggregate {

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

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @Field(() => String, {nullable:true})
    createdByUsername?: string;

    @Field(() => Date, {nullable:true})
    lastSubmitTime?: Date | string;
}
