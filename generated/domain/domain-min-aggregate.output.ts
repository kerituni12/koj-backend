import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DomainMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => Int, {nullable:true})
    domainId?: number;

    @Field(() => String, {nullable:true})
    status?: string;
}
