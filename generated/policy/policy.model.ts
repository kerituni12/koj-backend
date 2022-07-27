import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Policy {

    @Field(() => ID, {nullable:false})
    id!: number;

    @HideField()
    ptype!: string;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    subject!: string;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    object!: string;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    action!: string;

    @Field(() => String, {nullable:false,defaultValue:'allow'})
    effect!: string;

    @Field(() => String, {nullable:false,defaultValue:'organize'})
    effectWith!: string;

    @Field(() => String, {nullable:true})
    condition!: string | null;

    @HideField()
    domainId!: number;

    @HideField()
    createdById!: number | null;

    @Field(() => String, {nullable:true})
    createdByUsername!: string | null;

    @Field(() => String, {nullable:true})
    createdByName!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
