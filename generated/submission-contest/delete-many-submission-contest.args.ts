import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestWhereInput } from './submission-contest-where.input';

@ArgsType()
export class DeleteManySubmissionContestArgs {

    @Field(() => SubmissionContestWhereInput, {nullable:true})
    where?: SubmissionContestWhereInput;
}
