import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainCreateInput } from './domain-create.input';

@ArgsType()
export class CreateOneDomainArgs {

    @Field(() => DomainCreateInput, {nullable:false})
    data!: DomainCreateInput;
}
