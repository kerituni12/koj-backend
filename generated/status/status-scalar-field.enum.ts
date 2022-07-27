import { registerEnumType } from '@nestjs/graphql';

export enum StatusScalarFieldEnum {
    id = "id",
    description = "description",
    type = "type"
}


registerEnumType(StatusScalarFieldEnum, { name: 'StatusScalarFieldEnum', description: undefined })
