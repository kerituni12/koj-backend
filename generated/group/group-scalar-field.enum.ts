import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    name = "name",
    key = "key",
    status = "status",
    description = "description",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdByName = "createdByName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
