import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupCreateManyInput } from './group-create-many.input';

@ArgsType()
export class CreateManyGroupArgs {

    @Field(() => [GroupCreateManyInput], {nullable:false})
    data!: Array<GroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
