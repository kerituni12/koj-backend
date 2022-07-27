import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereInput } from './role-group-where.input';

@ArgsType()
export class DeleteManyRoleGroupArgs {

    @Field(() => RoleGroupWhereInput, {nullable:true})
    where?: RoleGroupWhereInput;
}
