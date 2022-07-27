import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereInput } from './status-where.input';
import { StatusOrderByWithRelationInput } from './status-order-by-with-relation.input';
import { StatusWhereUniqueInput } from './status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StatusCountAggregateInput } from './status-count-aggregate.input';
import { StatusAvgAggregateInput } from './status-avg-aggregate.input';
import { StatusSumAggregateInput } from './status-sum-aggregate.input';
import { StatusMinAggregateInput } from './status-min-aggregate.input';
import { StatusMaxAggregateInput } from './status-max-aggregate.input';

@ArgsType()
export class StatusAggregateArgs {

    @Field(() => StatusWhereInput, {nullable:true})
    where?: StatusWhereInput;

    @Field(() => [StatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StatusOrderByWithRelationInput>;

    @Field(() => StatusWhereUniqueInput, {nullable:true})
    cursor?: StatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StatusCountAggregateInput, {nullable:true})
    _count?: StatusCountAggregateInput;

    @Field(() => StatusAvgAggregateInput, {nullable:true})
    _avg?: StatusAvgAggregateInput;

    @Field(() => StatusSumAggregateInput, {nullable:true})
    _sum?: StatusSumAggregateInput;

    @Field(() => StatusMinAggregateInput, {nullable:true})
    _min?: StatusMinAggregateInput;

    @Field(() => StatusMaxAggregateInput, {nullable:true})
    _max?: StatusMaxAggregateInput;
}
