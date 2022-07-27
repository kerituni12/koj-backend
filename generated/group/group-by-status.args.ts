import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereInput } from '../status/status-where.input';
import { StatusOrderByWithAggregationInput } from '../status/status-order-by-with-aggregation.input';
import { StatusScalarFieldEnum } from '../status/status-scalar-field.enum';
import { StatusScalarWhereWithAggregatesInput } from '../status/status-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByStatusArgs {

    @Field(() => StatusWhereInput, {nullable:true})
    where?: StatusWhereInput;

    @Field(() => [StatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StatusOrderByWithAggregationInput>;

    @Field(() => [StatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StatusScalarFieldEnum>;

    @Field(() => StatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: StatusScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
