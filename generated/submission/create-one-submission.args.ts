import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionCreateInput } from './submission-create.input';

@ArgsType()
export class CreateOneSubmissionArgs {

    @Field(() => SubmissionCreateInput, {nullable:false})
    data!: SubmissionCreateInput;
}
