import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from '../language/language-where.input';
import { LanguageOrderByWithAggregationInput } from '../language/language-order-by-with-aggregation.input';
import { LanguageScalarFieldEnum } from '../language/language-scalar-field.enum';
import { LanguageScalarWhereWithAggregatesInput } from '../language/language-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByLanguageArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;

    @Field(() => [LanguageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithAggregationInput>;

    @Field(() => [LanguageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LanguageScalarFieldEnum>;

    @Field(() => LanguageScalarWhereWithAggregatesInput, {nullable:true})
    having?: LanguageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
