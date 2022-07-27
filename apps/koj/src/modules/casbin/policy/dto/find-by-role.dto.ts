import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class PolicyFindByRoleResourceInput {
  @Field(() => String, { nullable: true })
  roleId?: number;

  @Field(() => String, { nullable: true })
  resource?: string;
}
