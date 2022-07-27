import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChallengeSlugDomainIdCompoundUniqueInput } from './challenge-slug-domain-id-compound-unique.input';

@InputType()
export class ChallengeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ChallengeSlugDomainIdCompoundUniqueInput, {nullable:true})
    slug_domainId?: ChallengeSlugDomainIdCompoundUniqueInput;
}
