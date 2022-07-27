import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DomainCountOrderByAggregateInput } from './domain-count-order-by-aggregate.input';
import { DomainAvgOrderByAggregateInput } from './domain-avg-order-by-aggregate.input';
import { DomainMaxOrderByAggregateInput } from './domain-max-order-by-aggregate.input';
import { DomainMinOrderByAggregateInput } from './domain-min-order-by-aggregate.input';
import { DomainSumOrderByAggregateInput } from './domain-sum-order-by-aggregate.input';

@InputType()
export class DomainOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domainId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => DomainCountOrderByAggregateInput, {nullable:true})
    _count?: DomainCountOrderByAggregateInput;

    @Field(() => DomainAvgOrderByAggregateInput, {nullable:true})
    _avg?: DomainAvgOrderByAggregateInput;

    @Field(() => DomainMaxOrderByAggregateInput, {nullable:true})
    _max?: DomainMaxOrderByAggregateInput;

    @Field(() => DomainMinOrderByAggregateInput, {nullable:true})
    _min?: DomainMinOrderByAggregateInput;

    @Field(() => DomainSumOrderByAggregateInput, {nullable:true})
    _sum?: DomainSumOrderByAggregateInput;
}
