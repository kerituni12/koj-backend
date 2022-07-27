import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupUpdateInput } from './role-group-update.input';
import { RoleGroupWhereUniqueInput } from './role-group-where-unique.input';

@ArgsType()
export class UpdateOneRoleGroupArgs {

    @Field(() => RoleGroupUpdateInput, {nullable:false})
    data!: RoleGroupUpdateInput;

    @Field(() => RoleGroupWhereUniqueInput, {nullable:false})
    where!: RoleGroupWhereUniqueInput;
}
