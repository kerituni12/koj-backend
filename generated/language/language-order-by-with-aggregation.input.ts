import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LanguageCountOrderByAggregateInput } from './language-count-order-by-aggregate.input';
import { LanguageAvgOrderByAggregateInput } from './language-avg-order-by-aggregate.input';
import { LanguageMaxOrderByAggregateInput } from './language-max-order-by-aggregate.input';
import { LanguageMinOrderByAggregateInput } from './language-min-order-by-aggregate.input';
import { LanguageSumOrderByAggregateInput } from './language-sum-order-by-aggregate.input';

@InputType()
export class LanguageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extension?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusId?: keyof typeof SortOrder;

    @Field(() => LanguageCountOrderByAggregateInput, {nullable:true})
    _count?: LanguageCountOrderByAggregateInput;

    @Field(() => LanguageAvgOrderByAggregateInput, {nullable:true})
    _avg?: LanguageAvgOrderByAggregateInput;

    @Field(() => LanguageMaxOrderByAggregateInput, {nullable:true})
    _max?: LanguageMaxOrderByAggregateInput;

    @Field(() => LanguageMinOrderByAggregateInput, {nullable:true})
    _min?: LanguageMinOrderByAggregateInput;

    @Field(() => LanguageSumOrderByAggregateInput, {nullable:true})
    _sum?: LanguageSumOrderByAggregateInput;
}
