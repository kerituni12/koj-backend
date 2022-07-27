import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupUpdateManyMutationInput } from './role-group-update-many-mutation.input';
import { RoleGroupWhereInput } from './role-group-where.input';

@ArgsType()
export class UpdateManyRoleGroupArgs {

    @Field(() => RoleGroupUpdateManyMutationInput, {nullable:false})
    data!: RoleGroupUpdateManyMutationInput;

    @Field(() => RoleGroupWhereInput, {nullable:true})
    where?: RoleGroupWhereInput;
}
