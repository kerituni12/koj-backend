import { InputType, Field, PartialType } from '@nestjs/graphql';
import { RoleCreateInput as RoleCreateInputGenerated } from '@koj/generated/role/role-create.input';

@InputType()
export class RoleCreateInput extends PartialType(RoleCreateInputGenerated) {
  @Field(() => [RolePolicies], { description: 'Example field (placeholder)' })
  policies: RolePolicies[];
}

@InputType()
export class RolePolicies {
  @Field(() => String, { nullable: true })
  object: string;

  @Field(() => String, { nullable: true })
  effect: string;

  @Field(() => String, { nullable: true })
  action: string;

  @Field(() => String, { nullable: true })
  effectWith: string;

  @Field(() => String, { nullable: true })
  condition?: string;
}
