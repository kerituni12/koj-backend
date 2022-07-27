import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereUniqueInput } from './role-group-where-unique.input';

@ArgsType()
export class FindUniqueRoleGroupArgs {

    @Field(() => RoleGroupWhereUniqueInput, {nullable:false})
    where!: RoleGroupWhereUniqueInput;
}
