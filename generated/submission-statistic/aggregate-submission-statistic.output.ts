import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubmissionStatisticCountAggregate } from './submission-statistic-count-aggregate.output';
import { SubmissionStatisticAvgAggregate } from './submission-statistic-avg-aggregate.output';
import { SubmissionStatisticSumAggregate } from './submission-statistic-sum-aggregate.output';
import { SubmissionStatisticMinAggregate } from './submission-statistic-min-aggregate.output';
import { SubmissionStatisticMaxAggregate } from './submission-statistic-max-aggregate.output';

@ObjectType()
export class AggregateSubmissionStatistic {

    @Field(() => SubmissionStatisticCountAggregate, {nullable:true})
    _count?: SubmissionStatisticCountAggregate;

    @Field(() => SubmissionStatisticAvgAggregate, {nullable:true})
    _avg?: SubmissionStatisticAvgAggregate;

    @Field(() => SubmissionStatisticSumAggregate, {nullable:true})
    _sum?: SubmissionStatisticSumAggregate;

    @Field(() => SubmissionStatisticMinAggregate, {nullable:true})
    _min?: SubmissionStatisticMinAggregate;

    @Field(() => SubmissionStatisticMaxAggregate, {nullable:true})
    _max?: SubmissionStatisticMaxAggregate;
}
