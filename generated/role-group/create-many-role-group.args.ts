import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupCreateManyInput } from './role-group-create-many.input';

@ArgsType()
export class CreateManyRoleGroupArgs {

    @Field(() => [RoleGroupCreateManyInput], {nullable:false})
    data!: Array<RoleGroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
