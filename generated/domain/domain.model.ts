import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Domain {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false,defaultValue:'none'})
    domain!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    domainId!: number;

    @Field(() => String, {nullable:false,defaultValue:'disabled'})
    status!: string;
}
