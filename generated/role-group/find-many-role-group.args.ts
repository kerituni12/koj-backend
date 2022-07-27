import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleGroupWhereInput } from './role-group-where.input';
import { RoleGroupOrderByWithRelationInput } from './role-group-order-by-with-relation.input';
import { RoleGroupWhereUniqueInput } from './role-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleGroupScalarFieldEnum } from './role-group-scalar-field.enum';

@ArgsType()
export class FindManyRoleGroupArgs {

    @Field(() => RoleGroupWhereInput, {nullable:true})
    where?: RoleGroupWhereInput;

    @Field(() => [RoleGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleGroupOrderByWithRelationInput>;

    @Field(() => RoleGroupWhereUniqueInput, {nullable:true})
    cursor?: RoleGroupWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoleGroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RoleGroupScalarFieldEnum>;
}
