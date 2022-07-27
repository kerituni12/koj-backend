import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PolicyWhereInput {

    @Field(() => [PolicyWhereInput], {nullable:true})
    AND?: Array<PolicyWhereInput>;

    @Field(() => [PolicyWhereInput], {nullable:true})
    OR?: Array<PolicyWhereInput>;

    @Field(() => [PolicyWhereInput], {nullable:true})
    NOT?: Array<PolicyWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @HideField()
    ptype?: string;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => String, {nullable:true})
    object?: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    effectWith?: string;

    @Field(() => String, {nullable:true})
    condition?: string;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
