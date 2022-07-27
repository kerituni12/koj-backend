import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LanguageUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    extension?: string;

    @Field(() => Int, {nullable:true})
    statusId?: number;
}
