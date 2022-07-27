import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class RoleGroup {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false,defaultValue:'g'})
    ptype!: string;

    @Field(() => String, {nullable:true})
    role!: string | null;

    @Field(() => String, {nullable:true})
    rule!: string | null;

    @HideField()
    domainId!: number;
}
