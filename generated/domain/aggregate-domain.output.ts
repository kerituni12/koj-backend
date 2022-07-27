import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DomainCountAggregate } from './domain-count-aggregate.output';
import { DomainAvgAggregate } from './domain-avg-aggregate.output';
import { DomainSumAggregate } from './domain-sum-aggregate.output';
import { DomainMinAggregate } from './domain-min-aggregate.output';
import { DomainMaxAggregate } from './domain-max-aggregate.output';

@ObjectType()
export class AggregateDomain {

    @Field(() => DomainCountAggregate, {nullable:true})
    _count?: DomainCountAggregate;

    @Field(() => DomainAvgAggregate, {nullable:true})
    _avg?: DomainAvgAggregate;

    @Field(() => DomainSumAggregate, {nullable:true})
    _sum?: DomainSumAggregate;

    @Field(() => DomainMinAggregate, {nullable:true})
    _min?: DomainMinAggregate;

    @Field(() => DomainMaxAggregate, {nullable:true})
    _max?: DomainMaxAggregate;
}
