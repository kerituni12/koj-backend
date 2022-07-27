import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StatusUpdateInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    type?: string;
}
