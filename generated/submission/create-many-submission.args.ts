import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionCreateManyInput } from './submission-create-many.input';

@ArgsType()
export class CreateManySubmissionArgs {

    @Field(() => [SubmissionCreateManyInput], {nullable:false})
    data!: Array<SubmissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
