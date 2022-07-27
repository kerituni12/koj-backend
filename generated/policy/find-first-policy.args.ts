import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereInput } from './policy-where.input';
import { PolicyOrderByWithRelationInput } from './policy-order-by-with-relation.input';
import { PolicyWhereUniqueInput } from './policy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PolicyScalarFieldEnum } from './policy-scalar-field.enum';

@ArgsType()
export class FindFirstPolicyArgs {

    @Field(() => PolicyWhereInput, {nullable:true})
    where?: PolicyWhereInput;

    @Field(() => [PolicyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PolicyOrderByWithRelationInput>;

    @Field(() => PolicyWhereUniqueInput, {nullable:true})
    cursor?: PolicyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PolicyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PolicyScalarFieldEnum>;
}
