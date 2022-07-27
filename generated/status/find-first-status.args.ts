import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereInput } from './status-where.input';
import { StatusOrderByWithRelationInput } from './status-order-by-with-relation.input';
import { StatusWhereUniqueInput } from './status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StatusScalarFieldEnum } from './status-scalar-field.enum';

@ArgsType()
export class FindFirstStatusArgs {

    @Field(() => StatusWhereInput, {nullable:true})
    where?: StatusWhereInput;

    @Field(() => [StatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StatusOrderByWithRelationInput>;

    @Field(() => StatusWhereUniqueInput, {nullable:true})
    cursor?: StatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StatusScalarFieldEnum>;
}
