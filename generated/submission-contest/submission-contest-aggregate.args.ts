import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereInput } from './submission-contest-where.input';
import { SubmissionContestOrderByWithRelationInput } from './submission-contest-order-by-with-relation.input';
import { SubmissionContestWhereUniqueInput } from './submission-contest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestCountAggregateInput } from './submission-contest-count-aggregate.input';
import { SubmissionContestAvgAggregateInput } from './submission-contest-avg-aggregate.input';
import { SubmissionContestSumAggregateInput } from './submission-contest-sum-aggregate.input';
import { SubmissionContestMinAggregateInput } from './submission-contest-min-aggregate.input';
import { SubmissionContestMaxAggregateInput } from './submission-contest-max-aggregate.input';

@ArgsType()
export class SubmissionContestAggregateArgs {

    @Field(() => SubmissionContestWhereInput, {nullable:true})
    where?: SubmissionContestWhereInput;

    @Field(() => [SubmissionContestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionContestOrderByWithRelationInput>;

    @Field(() => SubmissionContestWhereUniqueInput, {nullable:true})
    cursor?: SubmissionContestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubmissionContestCountAggregateInput, {nullable:true})
    _count?: SubmissionContestCountAggregateInput;

    @Field(() => SubmissionContestAvgAggregateInput, {nullable:true})
    _avg?: SubmissionContestAvgAggregateInput;

    @Field(() => SubmissionContestSumAggregateInput, {nullable:true})
    _sum?: SubmissionContestSumAggregateInput;

    @Field(() => SubmissionContestMinAggregateInput, {nullable:true})
    _min?: SubmissionContestMinAggregateInput;

    @Field(() => SubmissionContestMaxAggregateInput, {nullable:true})
    _max?: SubmissionContestMaxAggregateInput;
}
