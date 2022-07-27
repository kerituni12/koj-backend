import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestStatisticScalarWhereWithAggregatesInput {

    @Field(() => [SubmissionContestStatisticScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubmissionContestStatisticScalarWhereWithAggregatesInput>;

    @Field(() => [SubmissionContestStatisticScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubmissionContestStatisticScalarWhereWithAggregatesInput>;

    @Field(() => [SubmissionContestStatisticScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubmissionContestStatisticScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    contestId?: IntNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    info?: JsonNullableWithAggregatesFilter;

    @HideField()
    domainId?: IntWithAggregatesFilter;

    @HideField()
    createdById?: IntNullableWithAggregatesFilter;
}
