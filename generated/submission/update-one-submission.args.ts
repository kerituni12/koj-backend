import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionUpdateInput } from './submission-update.input';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@ArgsType()
export class UpdateOneSubmissionArgs {

    @Field(() => SubmissionUpdateInput, {nullable:false})
    data!: SubmissionUpdateInput;

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    where!: SubmissionWhereUniqueInput;
}
