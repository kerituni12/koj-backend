import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupCreateInput } from './role-group-create.input';

@ArgsType()
export class CreateOneRoleGroupArgs {

    @Field(() => RoleGroupCreateInput, {nullable:false})
    data!: RoleGroupCreateInput;
}
