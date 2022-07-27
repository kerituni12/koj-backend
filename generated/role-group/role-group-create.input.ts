import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class RoleGroupCreateInput {

    @Field(() => String, {nullable:true})
    ptype?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    rule?: string;

    @HideField()
    domainId?: number;
}
