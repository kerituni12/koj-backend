import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DomainScalarWhereWithAggregatesInput {

    @Field(() => [DomainScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DomainScalarWhereWithAggregatesInput>;

    @Field(() => [DomainScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DomainScalarWhereWithAggregatesInput>;

    @Field(() => [DomainScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DomainScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    domain?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    domainId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;
}
