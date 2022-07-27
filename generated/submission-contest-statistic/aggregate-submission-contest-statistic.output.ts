import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubmissionContestStatisticCountAggregate } from './submission-contest-statistic-count-aggregate.output';
import { SubmissionContestStatisticAvgAggregate } from './submission-contest-statistic-avg-aggregate.output';
import { SubmissionContestStatisticSumAggregate } from './submission-contest-statistic-sum-aggregate.output';
import { SubmissionContestStatisticMinAggregate } from './submission-contest-statistic-min-aggregate.output';
import { SubmissionContestStatisticMaxAggregate } from './submission-contest-statistic-max-aggregate.output';

@ObjectType()
export class AggregateSubmissionContestStatistic {

    @Field(() => SubmissionContestStatisticCountAggregate, {nullable:true})
    _count?: SubmissionContestStatisticCountAggregate;

    @Field(() => SubmissionContestStatisticAvgAggregate, {nullable:true})
    _avg?: SubmissionContestStatisticAvgAggregate;

    @Field(() => SubmissionContestStatisticSumAggregate, {nullable:true})
    _sum?: SubmissionContestStatisticSumAggregate;

    @Field(() => SubmissionContestStatisticMinAggregate, {nullable:true})
    _min?: SubmissionContestStatisticMinAggregate;

    @Field(() => SubmissionContestStatisticMaxAggregate, {nullable:true})
    _max?: SubmissionContestStatisticMaxAggregate;
}
