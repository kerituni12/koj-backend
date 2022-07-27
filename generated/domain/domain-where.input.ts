import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DomainWhereInput {

    @Field(() => [DomainWhereInput], {nullable:true})
    AND?: Array<DomainWhereInput>;

    @Field(() => [DomainWhereInput], {nullable:true})
    OR?: Array<DomainWhereInput>;

    @Field(() => [DomainWhereInput], {nullable:true})
    NOT?: Array<DomainWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => Int, {nullable:true})
    domainId?: number;

    @Field(() => String, {nullable:true})
    status?: string;
}
