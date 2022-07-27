import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ChallengeCountOrderByAggregateInput } from './challenge-count-order-by-aggregate.input';
import { ChallengeAvgOrderByAggregateInput } from './challenge-avg-order-by-aggregate.input';
import { ChallengeMaxOrderByAggregateInput } from './challenge-max-order-by-aggregate.input';
import { ChallengeMinOrderByAggregateInput } from './challenge-min-order-by-aggregate.input';
import { ChallengeSumOrderByAggregateInput } from './challenge-sum-order-by-aggregate.input';

@InputType()
export class ChallengeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    acceptedLanguages?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languages?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    audience?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    functionName?: keyof typeof SortOrder;

    @HideField()
    commentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyTags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contributors?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    examples?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    structs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    types?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    output?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highlightSolutionCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hint?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isFavorited?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    officalSolutionCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    testcases?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    solutions?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @HideField()
    createdByUsername?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdByName?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ChallengeCountOrderByAggregateInput, {nullable:true})
    _count?: ChallengeCountOrderByAggregateInput;

    @Field(() => ChallengeAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChallengeAvgOrderByAggregateInput;

    @Field(() => ChallengeMaxOrderByAggregateInput, {nullable:true})
    _max?: ChallengeMaxOrderByAggregateInput;

    @Field(() => ChallengeMinOrderByAggregateInput, {nullable:true})
    _min?: ChallengeMinOrderByAggregateInput;

    @Field(() => ChallengeSumOrderByAggregateInput, {nullable:true})
    _sum?: ChallengeSumOrderByAggregateInput;
}
