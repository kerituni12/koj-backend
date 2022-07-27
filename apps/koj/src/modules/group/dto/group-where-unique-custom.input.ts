import { GroupWhereUniqueInput } from '@koj/generated/group/group-where-unique.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class GroupWhereUniqueInputCustom extends PartialType(GroupWhereUniqueInput) {
  @Field(() => String)
  slug: string;
}
