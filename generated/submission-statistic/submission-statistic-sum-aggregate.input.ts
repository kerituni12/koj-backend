import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionStatisticSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    challengeId?: true;

    @Field(() => Boolean, {nullable:true})
    score?: true;

    @Field(() => Boolean, {nullable:true})
    submitCount?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;
}
