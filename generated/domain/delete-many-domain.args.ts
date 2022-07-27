import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereInput } from './domain-where.input';

@ArgsType()
export class DeleteManyDomainArgs {

    @Field(() => DomainWhereInput, {nullable:true})
    where?: DomainWhereInput;
}
