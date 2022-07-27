import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusWhereUniqueInput } from './status-where-unique.input';
import { StatusCreateInput } from './status-create.input';
import { StatusUpdateInput } from './status-update.input';

@ArgsType()
export class UpsertOneStatusArgs {

    @Field(() => StatusWhereUniqueInput, {nullable:false})
    where!: StatusWhereUniqueInput;

    @Field(() => StatusCreateInput, {nullable:false})
    create!: StatusCreateInput;

    @Field(() => StatusUpdateInput, {nullable:false})
    update!: StatusUpdateInput;
}
