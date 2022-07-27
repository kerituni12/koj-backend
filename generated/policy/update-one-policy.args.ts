import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyUpdateInput } from './policy-update.input';
import { PolicyWhereUniqueInput } from './policy-where-unique.input';

@ArgsType()
export class UpdateOnePolicyArgs {

    @Field(() => PolicyUpdateInput, {nullable:false})
    data!: PolicyUpdateInput;

    @Field(() => PolicyWhereUniqueInput, {nullable:false})
    where!: PolicyWhereUniqueInput;
}
