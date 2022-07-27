import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereUniqueInput } from './domain-where-unique.input';
import { DomainCreateInput } from './domain-create.input';
import { DomainUpdateInput } from './domain-update.input';

@ArgsType()
export class UpsertOneDomainArgs {

    @Field(() => DomainWhereUniqueInput, {nullable:false})
    where!: DomainWhereUniqueInput;

    @Field(() => DomainCreateInput, {nullable:false})
    create!: DomainCreateInput;

    @Field(() => DomainUpdateInput, {nullable:false})
    update!: DomainUpdateInput;
}
