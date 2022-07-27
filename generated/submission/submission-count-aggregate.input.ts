import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    languageId?: true;

    @Field(() => Boolean, {nullable:true})
    challengeId?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    result?: true;

    @Field(() => Boolean, {nullable:true})
    info?: true;

    @Field(() => Boolean, {nullable:true})
    ip?: true;

    @Field(() => Boolean, {nullable:true})
    shared?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;

    @HideField()
    createdByUsername?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
