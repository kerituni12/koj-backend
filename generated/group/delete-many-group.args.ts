import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';

@ArgsType()
export class DeleteManyGroupArgs {

    @Field(() => GroupWhereInput, {nullable:true})
    where?: GroupWhereInput;
}
