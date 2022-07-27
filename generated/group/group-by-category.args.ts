import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from '../category/category-where.input';
import { CategoryOrderByWithAggregationInput } from '../category/category-order-by-with-aggregation.input';
import { CategoryScalarFieldEnum } from '../category/category-scalar-field.enum';
import { CategoryScalarWhereWithAggregatesInput } from '../category/category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByCategoryArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;

    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;

    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: CategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
