import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatusUpdateManyMutationInput } from './status-update-many-mutation.input';
import { StatusWhereInput } from './status-where.input';

@ArgsType()
export class UpdateManyStatusArgs {

    @Field(() => StatusUpdateManyMutationInput, {nullable:false})
    data!: StatusUpdateManyMutationInput;

    @Field(() => StatusWhereInput, {nullable:true})
    where?: StatusWhereInput;
}
