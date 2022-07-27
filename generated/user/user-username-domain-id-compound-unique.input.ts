import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUsernameDomainIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @HideField()
    domainId!: number;
}
