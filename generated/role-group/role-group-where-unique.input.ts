import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RoleGroupWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
