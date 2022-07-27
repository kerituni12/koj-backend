import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainUpdateManyMutationInput } from './domain-update-many-mutation.input';
import { DomainWhereInput } from './domain-where.input';

@ArgsType()
export class UpdateManyDomainArgs {

    @Field(() => DomainUpdateManyMutationInput, {nullable:false})
    data!: DomainUpdateManyMutationInput;

    @Field(() => DomainWhereInput, {nullable:true})
    where?: DomainWhereInput;
}
