import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestCreateInput } from './submission-contest-create.input';

@ArgsType()
export class CreateOneSubmissionContestArgs {

    @Field(() => SubmissionContestCreateInput, {nullable:false})
    data!: SubmissionContestCreateInput;
}
