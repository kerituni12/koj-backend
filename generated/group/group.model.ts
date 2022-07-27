import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Group {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    name!: string;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    key!: string;

    @Field(() => String, {nullable:false,defaultValue:'disabled'})
    status!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

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
