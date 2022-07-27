import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TopicTagScalarWhereWithAggregatesInput {

    @Field(() => [TopicTagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TopicTagScalarWhereWithAggregatesInput>;

    @Field(() => [TopicTagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TopicTagScalarWhereWithAggregatesInput>;

    @Field(() => [TopicTagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TopicTagScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @HideField()
    domainId?: IntWithAggregatesFilter;
}
