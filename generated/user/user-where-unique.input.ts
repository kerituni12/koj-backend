import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUsernameDomainIdCompoundUniqueInput } from './user-username-domain-id-compound-unique.input';
import { UserEmailDomainIdCompoundUniqueInput } from './user-email-domain-id-compound-unique.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UserUsernameDomainIdCompoundUniqueInput, {nullable:true})
    username_domainId?: UserUsernameDomainIdCompoundUniqueInput;

    @Field(() => UserEmailDomainIdCompoundUniqueInput, {nullable:true})
    email_domainId?: UserEmailDomainIdCompoundUniqueInput;
}
