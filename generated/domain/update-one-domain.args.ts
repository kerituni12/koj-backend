import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainUpdateInput } from './domain-update.input';
import { DomainWhereUniqueInput } from './domain-where-unique.input';

@ArgsType()
export class UpdateOneDomainArgs {

    @Field(() => DomainUpdateInput, {nullable:false})
    data!: DomainUpdateInput;

    @Field(() => DomainWhereUniqueInput, {nullable:false})
    where!: DomainWhereUniqueInput;
}
