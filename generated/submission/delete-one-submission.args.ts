import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@ArgsType()
export class DeleteOneSubmissionArgs {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    where!: SubmissionWhereUniqueInput;
}
