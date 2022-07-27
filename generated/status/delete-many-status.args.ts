import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereInput } from './status-where.input';

@ArgsType()
export class DeleteManyStatusArgs {

    @Field(() => StatusWhereInput, {nullable:true})
    where?: StatusWhereInput;
}
