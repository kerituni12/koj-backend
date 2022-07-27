import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyCreateInput } from './policy-create.input';

@ArgsType()
export class CreateOnePolicyArgs {

    @Field(() => PolicyCreateInput, {nullable:false})
    data!: PolicyCreateInput;
}
