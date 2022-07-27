import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereInput } from './domain-where.input';
import { DomainOrderByWithRelationInput } from './domain-order-by-with-relation.input';
import { DomainWhereUniqueInput } from './domain-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DomainCountAggregateInput } from './domain-count-aggregate.input';
import { DomainAvgAggregateInput } from './domain-avg-aggregate.input';
import { DomainSumAggregateInput } from './domain-sum-aggregate.input';
import { DomainMinAggregateInput } from './domain-min-aggregate.input';
import { DomainMaxAggregateInput } from './domain-max-aggregate.input';

@ArgsType()
export class DomainAggregateArgs {

    @Field(() => DomainWhereInput, {nullable:true})
    where?: DomainWhereInput;

    @Field(() => [DomainOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DomainOrderByWithRelationInput>;

    @Field(() => DomainWhereUniqueInput, {nullable:true})
    cursor?: DomainWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DomainCountAggregateInput, {nullable:true})
    _count?: DomainCountAggregateInput;

    @Field(() => DomainAvgAggregateInput, {nullable:true})
    _avg?: DomainAvgAggregateInput;

    @Field(() => DomainSumAggregateInput, {nullable:true})
    _sum?: DomainSumAggregateInput;

    @Field(() => DomainMinAggregateInput, {nullable:true})
    _min?: DomainMinAggregateInput;

    @Field(() => DomainMaxAggregateInput, {nullable:true})
    _max?: DomainMaxAggregateInput;
}
