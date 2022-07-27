import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupUpdateInput } from './group-update.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@ArgsType()
export class UpdateOneGroupArgs {

    @Field(() => GroupUpdateInput, {nullable:false})
    data!: GroupUpdateInput;

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    where!: GroupWhereUniqueInput;
}
