import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereUniqueInput } from './role-group-where-unique.input';
import { RoleGroupCreateInput } from './role-group-create.input';
import { RoleGroupUpdateInput } from './role-group-update.input';

@ArgsType()
export class UpsertOneRoleGroupArgs {

    @Field(() => RoleGroupWhereUniqueInput, {nullable:false})
    where!: RoleGroupWhereUniqueInput;

    @Field(() => RoleGroupCreateInput, {nullable:false})
    create!: RoleGroupCreateInput;

    @Field(() => RoleGroupUpdateInput, {nullable:false})
    update!: RoleGroupUpdateInput;
}
