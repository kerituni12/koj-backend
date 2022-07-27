import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereUniqueInput } from './domain-where-unique.input';

@ArgsType()
export class DeleteOneDomainArgs {

    @Field(() => DomainWhereUniqueInput, {nullable:false})
    where!: DomainWhereUniqueInput;
}
