import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestStatisticWhereInput } from './submission-contest-statistic-where.input';
import { SubmissionContestStatisticOrderByWithRelationInput } from './submission-contest-statistic-order-by-with-relation.input';
import { SubmissionContestStatisticWhereUniqueInput } from './submission-contest-statistic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionContestStatisticScalarFieldEnum } from './submission-contest-statistic-scalar-field.enum';

@ArgsType()
export class FindManySubmissionContestStatisticArgs {

    @Field(() => SubmissionContestStatisticWhereInput, {nullable:true})
    where?: SubmissionContestStatisticWhereInput;

    @Field(() => [SubmissionContestStatisticOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionContestStatisticOrderByWithRelationInput>;

    @Field(() => SubmissionContestStatisticWhereUniqueInput, {nullable:true})
    cursor?: SubmissionContestStatisticWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubmissionContestStatisticScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubmissionContestStatisticScalarFieldEnum>;
}
