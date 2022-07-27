import { RoleCreateInput } from './role-create.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class RoleUpdateInput extends PartialType(RoleCreateInput) {
  @Field(() => Int)
  id: number;
}
