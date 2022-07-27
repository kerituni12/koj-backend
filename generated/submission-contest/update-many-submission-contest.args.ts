import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestUpdateManyMutationInput } from './submission-contest-update-many-mutation.input';
import { SubmissionContestWhereInput } from './submission-contest-where.input';

@ArgsType()
export class UpdateManySubmissionContestArgs {

    @Field(() => SubmissionContestUpdateManyMutationInput, {nullable:false})
    data!: SubmissionContestUpdateManyMutationInput;

    @Field(() => SubmissionContestWhereInput, {nullable:true})
    where?: SubmissionContestWhereInput;
}
