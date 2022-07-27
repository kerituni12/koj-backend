import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereUniqueInput } from './policy-where-unique.input';

@ArgsType()
export class DeleteOnePolicyArgs {

    @Field(() => PolicyWhereUniqueInput, {nullable:false})
    where!: PolicyWhereUniqueInput;
}
