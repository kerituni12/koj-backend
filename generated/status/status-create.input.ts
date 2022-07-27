import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StatusCreateInput {

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    type?: string;
}
