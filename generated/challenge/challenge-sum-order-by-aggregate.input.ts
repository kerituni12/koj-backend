import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ChallengeSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    acceptedLanguages?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @HideField()
    commentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyTags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highlightSolutionCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    officalSolutionCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikes?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;
}
