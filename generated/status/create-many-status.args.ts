import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusCreateManyInput } from './status-create-many.input';

@ArgsType()
export class CreateManyStatusArgs {

    @Field(() => [StatusCreateManyInput], {nullable:false})
    data!: Array<StatusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
