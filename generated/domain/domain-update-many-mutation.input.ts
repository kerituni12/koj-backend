import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DomainUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => Int, {nullable:true})
    domainId?: number;

    @Field(() => String, {nullable:true})
    status?: string;
}
