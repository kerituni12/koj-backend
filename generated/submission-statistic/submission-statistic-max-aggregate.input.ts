import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionStatisticMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    challengeId?: true;

    @Field(() => Boolean, {nullable:true})
    languageId?: true;

    @Field(() => Boolean, {nullable:true})
    score?: true;

    @Field(() => Boolean, {nullable:true})
    submitCount?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;

    @HideField()
    createdByUsername?: true;

    @Field(() => Boolean, {nullable:true})
    lastSubmitTime?: true;
}
