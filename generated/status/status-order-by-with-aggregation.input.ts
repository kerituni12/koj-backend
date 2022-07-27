import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StatusCountOrderByAggregateInput } from './status-count-order-by-aggregate.input';
import { StatusAvgOrderByAggregateInput } from './status-avg-order-by-aggregate.input';
import { StatusMaxOrderByAggregateInput } from './status-max-order-by-aggregate.input';
import { StatusMinOrderByAggregateInput } from './status-min-order-by-aggregate.input';
import { StatusSumOrderByAggregateInput } from './status-sum-order-by-aggregate.input';

@InputType()
export class StatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => StatusCountOrderByAggregateInput, {nullable:true})
    _count?: StatusCountOrderByAggregateInput;

    @Field(() => StatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: StatusAvgOrderByAggregateInput;

    @Field(() => StatusMaxOrderByAggregateInput, {nullable:true})
    _max?: StatusMaxOrderByAggregateInput;

    @Field(() => StatusMinOrderByAggregateInput, {nullable:true})
    _min?: StatusMinOrderByAggregateInput;

    @Field(() => StatusSumOrderByAggregateInput, {nullable:true})
    _sum?: StatusSumOrderByAggregateInput;
}
