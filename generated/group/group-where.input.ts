import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GroupWhereInput {

    @Field(() => [GroupWhereInput], {nullable:true})
    AND?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    OR?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    NOT?: Array<GroupWhereInput>;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    domainId?: number;

    @HideField()
    createdById?: number;

    @HideField()
    createdByUsername?: string;

    @Field(() => String, {nullable:true})
    createdByName?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
