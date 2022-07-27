import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupCreateInput } from './group-create.input';
import { GroupUpdateInput } from './group-update.input';

@ArgsType()
export class UpsertOneGroupArgs {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateInput, {nullable:false})
    create!: GroupCreateInput;

    @Field(() => GroupUpdateInput, {nullable:false})
    update!: GroupUpdateInput;
}
