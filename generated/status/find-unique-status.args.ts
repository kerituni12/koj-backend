import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereUniqueInput } from './status-where-unique.input';

@ArgsType()
export class FindUniqueStatusArgs {

    @Field(() => StatusWhereUniqueInput, {nullable:false})
    where!: StatusWhereUniqueInput;
}
