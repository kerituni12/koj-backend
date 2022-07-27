import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LanguageScalarWhereWithAggregatesInput {

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    extension?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    statusId?: IntWithAggregatesFilter;
}
