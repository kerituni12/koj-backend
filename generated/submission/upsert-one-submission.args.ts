import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionCreateInput } from './submission-create.input';
import { SubmissionUpdateInput } from './submission-update.input';

@ArgsType()
export class UpsertOneSubmissionArgs {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    where!: SubmissionWhereUniqueInput;

    @Field(() => SubmissionCreateInput, {nullable:false})
    create!: SubmissionCreateInput;

    @Field(() => SubmissionUpdateInput, {nullable:false})
    update!: SubmissionUpdateInput;
}
