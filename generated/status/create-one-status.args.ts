import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusCreateInput } from './status-create.input';

@ArgsType()
export class CreateOneStatusArgs {

    @Field(() => StatusCreateInput, {nullable:false})
    data!: StatusCreateInput;
}
