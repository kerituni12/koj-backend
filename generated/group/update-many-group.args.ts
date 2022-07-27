import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupUpdateManyMutationInput } from './group-update-many-mutation.input';
import { GroupWhereInput } from './group-where.input';

@ArgsType()
export class UpdateManyGroupArgs {

    @Field(() => GroupUpdateManyMutationInput, {nullable:false})
    data!: GroupUpdateManyMutationInput;

    @Field(() => GroupWhereInput, {nullable:true})
    where?: GroupWhereInput;
}
