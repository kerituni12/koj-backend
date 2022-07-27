import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PolicyWhereInput } from './policy-where.input';

@ArgsType()
export class DeleteManyPolicyArgs {

    @Field(() => PolicyWhereInput, {nullable:true})
    where?: PolicyWhereInput;
}
