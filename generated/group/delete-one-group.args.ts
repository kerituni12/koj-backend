import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@ArgsType()
export class DeleteOneGroupArgs {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    where!: GroupWhereUniqueInput;
}
