import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SubmissionContestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challengeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    result?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shared?: keyof typeof SortOrder;

    @HideField()
    domainId?: keyof typeof SortOrder;

    @HideField()
    createdById?: keyof typeof SortOrder;

    @HideField()
    createdByUsername?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
