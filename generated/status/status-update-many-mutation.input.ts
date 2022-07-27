import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StatusUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    type?: string;
}
