import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionUpdateManyMutationInput } from './submission-update-many-mutation.input';
import { SubmissionWhereInput } from './submission-where.input';

@ArgsType()
export class UpdateManySubmissionArgs {

    @Field(() => SubmissionUpdateManyMutationInput, {nullable:false})
    data!: SubmissionUpdateManyMutationInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    where?: SubmissionWhereInput;
}
