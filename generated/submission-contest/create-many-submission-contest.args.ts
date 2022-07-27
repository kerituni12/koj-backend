import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionContestCreateManyInput } from './submission-contest-create-many.input';

@ArgsType()
export class CreateManySubmissionContestArgs {

    @Field(() => [SubmissionContestCreateManyInput], {nullable:false})
    data!: Array<SubmissionContestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
