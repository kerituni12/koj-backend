import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    key = "key",
    name = "name",
    description = "description",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdByName = "createdByName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })
