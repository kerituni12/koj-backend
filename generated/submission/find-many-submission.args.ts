import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { SubmissionOrderByWithRelationInput } from './submission-order-by-with-relation.input';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionScalarFieldEnum } from './submission-scalar-field.enum';

@ArgsType()
export class FindManySubmissionArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    where?: SubmissionWhereInput;

    @Field(() => [SubmissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionOrderByWithRelationInput>;

    @Field(() => SubmissionWhereUniqueInput, {nullable:true})
    cursor?: SubmissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubmissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubmissionScalarFieldEnum>;
}
