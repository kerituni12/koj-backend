import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusUpdateInput } from './status-update.input';
import { StatusWhereUniqueInput } from './status-where-unique.input';

@ArgsType()
export class UpdateOneStatusArgs {

    @Field(() => StatusUpdateInput, {nullable:false})
    data!: StatusUpdateInput;

    @Field(() => StatusWhereUniqueInput, {nullable:false})
    where!: StatusWhereUniqueInput;
}
