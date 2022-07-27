import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { SubmissionOrderByWithRelationInput } from './submission-order-by-with-relation.input';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionCountAggregateInput } from './submission-count-aggregate.input';
import { SubmissionAvgAggregateInput } from './submission-avg-aggregate.input';
import { SubmissionSumAggregateInput } from './submission-sum-aggregate.input';
import { SubmissionMinAggregateInput } from './submission-min-aggregate.input';
import { SubmissionMaxAggregateInput } from './submission-max-aggregate.input';

@ArgsType()
export class SubmissionAggregateArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    where?: SubmissionWhereInput;

    @Field(() => [SubmissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionOrderByWithRelationInput>;

    @Field(() => SubmissionWhereUniqueInput, {nullable:true})
    cursor?: SubmissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubmissionCountAggregateInput, {nullable:true})
    _count?: SubmissionCountAggregateInput;

    @Field(() => SubmissionAvgAggregateInput, {nullable:true})
    _avg?: SubmissionAvgAggregateInput;

    @Field(() => SubmissionSumAggregateInput, {nullable:true})
    _sum?: SubmissionSumAggregateInput;

    @Field(() => SubmissionMinAggregateInput, {nullable:true})
    _min?: SubmissionMinAggregateInput;

    @Field(() => SubmissionMaxAggregateInput, {nullable:true})
    _max?: SubmissionMaxAggregateInput;
}
