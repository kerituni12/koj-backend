import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class RoleGroupScalarWhereWithAggregatesInput {

    @Field(() => [RoleGroupScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleGroupScalarWhereWithAggregatesInput>;

    @Field(() => [RoleGroupScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleGroupScalarWhereWithAggregatesInput>;

    @Field(() => [RoleGroupScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleGroupScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ptype?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    role?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    rule?: StringNullableWithAggregatesFilter;

    @HideField()
    domainId?: IntWithAggregatesFilter;
}
