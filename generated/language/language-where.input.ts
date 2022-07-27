import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LanguageWhereInput {

    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    extension?: string;

    @Field(() => Int, {nullable:true})
    statusId?: number;
}
