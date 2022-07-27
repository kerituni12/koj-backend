import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    firstname?: true;

    @Field(() => Boolean, {nullable:true})
    lastname?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    avatar?: true;

    @Field(() => Boolean, {nullable:true})
    provider?: true;

    @HideField()
    domainId?: true;

    @HideField()
    createdById?: true;

    @HideField()
    createdByUsername?: true;

    @Field(() => Boolean, {nullable:true})
    createdByName?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    extendData?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
