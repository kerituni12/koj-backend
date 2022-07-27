import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DomainWhereInput } from './domain-where.input';
import { DomainOrderByWithRelationInput } from './domain-order-by-with-relation.input';
import { DomainWhereUniqueInput } from './domain-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DomainScalarFieldEnum } from './domain-scalar-field.enum';

@ArgsType()
export class FindFirstDomainArgs {

    @Field(() => DomainWhereInput, {nullable:true})
    where?: DomainWhereInput;

    @Field(() => [DomainOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DomainOrderByWithRelationInput>;

    @Field(() => DomainWhereUniqueInput, {nullable:true})
    cursor?: DomainWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DomainScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DomainScalarFieldEnum>;
}
