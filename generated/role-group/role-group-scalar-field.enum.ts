import { registerEnumType } from '@nestjs/graphql';

export enum RoleGroupScalarFieldEnum {
    id = "id",
    ptype = "ptype",
    role = "role",
    rule = "rule",
    domainId = "domainId"
}


registerEnumType(RoleGroupScalarFieldEnum, { name: 'RoleGroupScalarFieldEnum', description: undefined })
