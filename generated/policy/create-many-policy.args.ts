import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyCreateManyInput } from './policy-create-many.input';

@ArgsType()
export class CreateManyPolicyArgs {

    @Field(() => [PolicyCreateManyInput], {nullable:false})
    data!: Array<PolicyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
