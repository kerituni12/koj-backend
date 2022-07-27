import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class RoleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;
}
