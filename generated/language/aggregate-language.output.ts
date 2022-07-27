import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCountAggregate } from './language-count-aggregate.output';
import { LanguageAvgAggregate } from './language-avg-aggregate.output';
import { LanguageSumAggregate } from './language-sum-aggregate.output';
import { LanguageMinAggregate } from './language-min-aggregate.output';
import { LanguageMaxAggregate } from './language-max-aggregate.output';

@ObjectType()
export class AggregateLanguage {

    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: LanguageCountAggregate;

    @Field(() => LanguageAvgAggregate, {nullable:true})
    _avg?: LanguageAvgAggregate;

    @Field(() => LanguageSumAggregate, {nullable:true})
    _sum?: LanguageSumAggregate;

    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: LanguageMinAggregate;

    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: LanguageMaxAggregate;
}
