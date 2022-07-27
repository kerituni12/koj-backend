import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';
import { ChallengeOrderByWithAggregationInput } from './challenge-order-by-with-aggregation.input';
import { ChallengeScalarFieldEnum } from './challenge-scalar-field.enum';
import { ChallengeScalarWhereWithAggregatesInput } from './challenge-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChallengeCountAggregateInput } from './challenge-count-aggregate.input';
import { ChallengeAvgAggregateInput } from './challenge-avg-aggregate.input';
import { ChallengeSumAggregateInput } from './challenge-sum-aggregate.input';
import { ChallengeMinAggregateInput } from './challenge-min-aggregate.input';
import { ChallengeMaxAggregateInput } from './challenge-max-aggregate.input';

@ArgsType()
export class ChallengeGroupByArgs {

    @Field(() => ChallengeWhereInput, {nullable:true})
    where?: ChallengeWhereInput;

    @Field(() => [ChallengeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChallengeOrderByWithAggregationInput>;

    @Field(() => [ChallengeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChallengeScalarFieldEnum>;

    @Field(() => ChallengeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChallengeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChallengeCountAggregateInput, {nullable:true})
    _count?: ChallengeCountAggregateInput;

    @Field(() => ChallengeAvgAggregateInput, {nullable:true})
    _avg?: ChallengeAvgAggregateInput;

    @Field(() => ChallengeSumAggregateInput, {nullable:true})
    _sum?: ChallengeSumAggregateInput;

    @Field(() => ChallengeMinAggregateInput, {nullable:true})
    _min?: ChallengeMinAggregateInput;

    @Field(() => ChallengeMaxAggregateInput, {nullable:true})
    _max?: ChallengeMaxAggregateInput;
}
