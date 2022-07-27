import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DomainMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    domain?: true;

    @Field(() => Boolean, {nullable:true})
    domainId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;
}
