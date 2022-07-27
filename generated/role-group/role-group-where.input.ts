import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class RoleGroupWhereInput {

    @Field(() => [RoleGroupWhereInput], {nullable:true})
    AND?: Array<RoleGroupWhereInput>;

    @Field(() => [RoleGroupWhereInput], {nullable:true})
    OR?: Array<RoleGroupWhereInput>;

    @Field(() => [RoleGroupWhereInput], {nullable:true})
    NOT?: Array<RoleGroupWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    ptype?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    rule?: string;

    @HideField()
    domainId?: number;
}
