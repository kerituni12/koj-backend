import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereInput } from './policy-where.input';
import { PolicyOrderByWithRelationInput } from './policy-order-by-with-relation.input';
import { PolicyWhereUniqueInput } from './policy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PolicyCountAggregateInput } from './policy-count-aggregate.input';
import { PolicyAvgAggregateInput } from './policy-avg-aggregate.input';
import { PolicySumAggregateInput } from './policy-sum-aggregate.input';
import { PolicyMinAggregateInput } from './policy-min-aggregate.input';
import { PolicyMaxAggregateInput } from './policy-max-aggregate.input';

@ArgsType()
export class PolicyAggregateArgs {

    @Field(() => PolicyWhereInput, {nullable:true})
    where?: PolicyWhereInput;

    @Field(() => [PolicyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PolicyOrderByWithRelationInput>;

    @Field(() => PolicyWhereUniqueInput, {nullable:true})
    cursor?: PolicyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PolicyCountAggregateInput, {nullable:true})
    _count?: PolicyCountAggregateInput;

    @Field(() => PolicyAvgAggregateInput, {nullable:true})
    _avg?: PolicyAvgAggregateInput;

    @Field(() => PolicySumAggregateInput, {nullable:true})
    _sum?: PolicySumAggregateInput;

    @Field(() => PolicyMinAggregateInput, {nullable:true})
    _min?: PolicyMinAggregateInput;

    @Field(() => PolicyMaxAggregateInput, {nullable:true})
    _max?: PolicyMaxAggregateInput;
}
