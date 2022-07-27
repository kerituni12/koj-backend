import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereUniqueInputCustom } from './group-where-unique-custom.input';

@ArgsType()
export class FindUniqueGroupArgsCustom {
  @Field(() => GroupWhereUniqueInputCustom, { nullable: false })
  where!: GroupWhereUniqueInputCustom;
}
