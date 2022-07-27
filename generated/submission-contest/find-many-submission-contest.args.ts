import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereInput } from './submission-contest-where.input';
import { SubmissionContestOrderByWithRelationInput } from './submission-contest-order-by-with-relation.input';
import { SubmissionContestWhereUniqueInput } from './submission-contest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestScalarFieldEnum } from './submission-contest-scalar-field.enum';

@ArgsType()
export class FindManySubmissionContestArgs {

    @Field(() => SubmissionContestWhereInput, {nullable:true})
    where?: SubmissionContestWhereInput;

    @Field(() => [SubmissionContestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionContestOrderByWithRelationInput>;

    @Field(() => SubmissionContestWhereUniqueInput, {nullable:true})
    cursor?: SubmissionContestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubmissionContestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubmissionContestScalarFieldEnum>;
}
