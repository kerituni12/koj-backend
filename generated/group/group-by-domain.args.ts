import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereInput } from '../domain/domain-where.input';
import { DomainOrderByWithAggregationInput } from '../domain/domain-order-by-with-aggregation.input';
import { DomainScalarFieldEnum } from '../domain/domain-scalar-field.enum';
import { DomainScalarWhereWithAggregatesInput } from '../domain/domain-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByDomainArgs {

    @Field(() => DomainWhereInput, {nullable:true})
    where?: DomainWhereInput;

    @Field(() => [DomainOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DomainOrderByWithAggregationInput>;

    @Field(() => [DomainScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DomainScalarFieldEnum>;

    @Field(() => DomainScalarWhereWithAggregatesInput, {nullable:true})
    having?: DomainScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
