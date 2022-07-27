import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserEmailDomainIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    domainId!: number;
}
