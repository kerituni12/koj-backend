import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupCreateInput } from './group-create.input';

@ArgsType()
export class CreateOneGroupArgs {

    @Field(() => GroupCreateInput, {nullable:false})
    data!: GroupCreateInput;
}
