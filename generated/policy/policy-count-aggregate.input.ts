import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PolicyCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    ptype?: true;

    @Field(() => Boolean, {nullable:true})
    subject?: true;

    @Field(() => Boolean, {nullable:true})
    object?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    effect?: true;

    @Field(() => Boolean, {nullable:true})
    effectWith?: true;

    @Field(() => Boolean, {nullable:true})
    condition?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;

    @HideField()
    createdByUsername?: true;

    @Field(() => Boolean, {nullable:true})
    createdByName?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
