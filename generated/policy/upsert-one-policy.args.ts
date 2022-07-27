import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereUniqueInput } from './policy-where-unique.input';
import { PolicyCreateInput } from './policy-create.input';
import { PolicyUpdateInput } from './policy-update.input';

@ArgsType()
export class UpsertOnePolicyArgs {

    @Field(() => PolicyWhereUniqueInput, {nullable:false})
    where!: PolicyWhereUniqueInput;

    @Field(() => PolicyCreateInput, {nullable:false})
    create!: PolicyCreateInput;

    @Field(() => PolicyUpdateInput, {nullable:false})
    update!: PolicyUpdateInput;
}
