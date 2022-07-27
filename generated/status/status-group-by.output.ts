import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatusCountAggregate } from './status-count-aggregate.output';
import { StatusAvgAggregate } from './status-avg-aggregate.output';
import { StatusSumAggregate } from './status-sum-aggregate.output';
import { StatusMinAggregate } from './status-min-aggregate.output';
import { StatusMaxAggregate } from './status-max-aggregate.output';

@ObjectType()
export class StatusGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => StatusCountAggregate, {nullable:true})
    _count?: StatusCountAggregate;

    @Field(() => StatusAvgAggregate, {nullable:true})
    _avg?: StatusAvgAggregate;

    @Field(() => StatusSumAggregate, {nullable:true})
    _sum?: StatusSumAggregate;

    @Field(() => StatusMinAggregate, {nullable:true})
    _min?: StatusMinAggregate;

    @Field(() => StatusMaxAggregate, {nullable:true})
    _max?: StatusMaxAggregate;
}
