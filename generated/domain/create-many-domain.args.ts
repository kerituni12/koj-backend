import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainCreateManyInput } from './domain-create-many.input';

@ArgsType()
export class CreateManyDomainArgs {

    @Field(() => [DomainCreateManyInput], {nullable:false})
    data!: Array<DomainCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
