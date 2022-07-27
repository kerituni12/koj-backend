import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';
import { ChallengeOrderByWithRelationInput } from './challenge-order-by-with-relation.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChallengeCountAggregateInput } from './challenge-count-aggregate.input';
import { ChallengeAvgAggregateInput } from './challenge-avg-aggregate.input';
import { ChallengeSumAggregateInput } from './challenge-sum-aggregate.input';
import { ChallengeMinAggregateInput } from './challenge-min-aggregate.input';
import { ChallengeMaxAggregateInput } from './challenge-max-aggregate.input';

@ArgsType()
export class ChallengeAggregateArgs {

    @Field(() => ChallengeWhereInput, {nullable:true})
    where?: ChallengeWhereInput;

    @Field(() => [ChallengeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChallengeOrderByWithRelationInput>;

    @Field(() => ChallengeWhereUniqueInput, {nullable:true})
    cursor?: ChallengeWhereUniqueInput;

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
