import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubmissionContestCountAggregate } from './submission-contest-count-aggregate.output';
import { SubmissionContestAvgAggregate } from './submission-contest-avg-aggregate.output';
import { SubmissionContestSumAggregate } from './submission-contest-sum-aggregate.output';
import { SubmissionContestMinAggregate } from './submission-contest-min-aggregate.output';
import { SubmissionContestMaxAggregate } from './submission-contest-max-aggregate.output';

@ObjectType()
export class AggregateSubmissionContest {

    @Field(() => SubmissionContestCountAggregate, {nullable:true})
    _count?: SubmissionContestCountAggregate;

    @Field(() => SubmissionContestAvgAggregate, {nullable:true})
    _avg?: SubmissionContestAvgAggregate;

    @Field(() => SubmissionContestSumAggregate, {nullable:true})
    _sum?: SubmissionContestSumAggregate;

    @Field(() => SubmissionContestMinAggregate, {nullable:true})
    _min?: SubmissionContestMinAggregate;

    @Field(() => SubmissionContestMaxAggregate, {nullable:true})
    _max?: SubmissionContestMaxAggregate;
}
