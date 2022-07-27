import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    contestId?: true;

    @Field(() => Boolean, {nullable:true})
    challengeId?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;
}
