import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ChallengeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    acceptedLanguages?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;

    @HideField()
    commentCount?: true;

    @Field(() => Boolean, {nullable:true})
    contestId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    companyTags?: true;

    @Field(() => Boolean, {nullable:true})
    highlightSolutionCount?: true;

    @Field(() => Boolean, {nullable:true})
    officalSolutionCount?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    dislikes?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;
}
