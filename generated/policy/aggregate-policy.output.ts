import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PolicyCountAggregate } from './policy-count-aggregate.output';
import { PolicyAvgAggregate } from './policy-avg-aggregate.output';
import { PolicySumAggregate } from './policy-sum-aggregate.output';
import { PolicyMinAggregate } from './policy-min-aggregate.output';
import { PolicyMaxAggregate } from './policy-max-aggregate.output';

@ObjectType()
export class AggregatePolicy {

    @Field(() => PolicyCountAggregate, {nullable:true})
    _count?: PolicyCountAggregate;

    @Field(() => PolicyAvgAggregate, {nullable:true})
    _avg?: PolicyAvgAggregate;

    @Field(() => PolicySumAggregate, {nullable:true})
    _sum?: PolicySumAggregate;

    @Field(() => PolicyMinAggregate, {nullable:true})
    _min?: PolicyMinAggregate;

    @Field(() => PolicyMaxAggregate, {nullable:true})
    _max?: PolicyMaxAggregate;
}
