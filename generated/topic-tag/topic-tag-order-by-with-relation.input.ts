import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ChallengeOrderByRelationAggregateInput } from '../challenge/challenge-order-by-relation-aggregate.input';

@InputType()
export class TopicTagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @Field(() => ChallengeOrderByRelationAggregateInput, {nullable:true})
    challenges?: ChallengeOrderByRelationAggregateInput;
}
