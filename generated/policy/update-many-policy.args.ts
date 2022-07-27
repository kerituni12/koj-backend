import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyUpdateManyMutationInput } from './policy-update-many-mutation.input';
import { PolicyWhereInput } from './policy-where.input';

@ArgsType()
export class UpdateManyPolicyArgs {

    @Field(() => PolicyUpdateManyMutationInput, {nullable:false})
    data!: PolicyUpdateManyMutationInput;

    @Field(() => PolicyWhereInput, {nullable:true})
    where?: PolicyWhereInput;
}
