import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubmissionCountAggregate } from './submission-count-aggregate.output';
import { SubmissionAvgAggregate } from './submission-avg-aggregate.output';
import { SubmissionSumAggregate } from './submission-sum-aggregate.output';
import { SubmissionMinAggregate } from './submission-min-aggregate.output';
import { SubmissionMaxAggregate } from './submission-max-aggregate.output';

@ObjectType()
export class AggregateSubmission {

    @Field(() => SubmissionCountAggregate, {nullable:true})
    _count?: SubmissionCountAggregate;

    @Field(() => SubmissionAvgAggregate, {nullable:true})
    _avg?: SubmissionAvgAggregate;

    @Field(() => SubmissionSumAggregate, {nullable:true})
    _sum?: SubmissionSumAggregate;

    @Field(() => SubmissionMinAggregate, {nullable:true})
    _min?: SubmissionMinAggregate;

    @Field(() => SubmissionMaxAggregate, {nullable:true})
    _max?: SubmissionMaxAggregate;
}
