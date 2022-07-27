import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereInput } from '../policy/policy-where.input';
import { PolicyOrderByWithAggregationInput } from '../policy/policy-order-by-with-aggregation.input';
import { PolicyScalarFieldEnum } from '../policy/policy-scalar-field.enum';
import { PolicyScalarWhereWithAggregatesInput } from '../policy/policy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByPolicyArgs {

    @Field(() => PolicyWhereInput, {nullable:true})
    where?: PolicyWhereInput;

    @Field(() => [PolicyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PolicyOrderByWithAggregationInput>;

    @Field(() => [PolicyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PolicyScalarFieldEnum>;

    @Field(() => PolicyScalarWhereWithAggregatesInput, {nullable:true})
    having?: PolicyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
