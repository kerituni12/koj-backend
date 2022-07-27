import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class StatusScalarWhereWithAggregatesInput {

    @Field(() => [StatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StatusScalarWhereWithAggregatesInput>;

    @Field(() => [StatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StatusScalarWhereWithAggregatesInput>;

    @Field(() => [StatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StatusScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;
}
