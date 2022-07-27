import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';

@ArgsType()
export class DeleteManySubmissionArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    where?: SubmissionWhereInput;
}
