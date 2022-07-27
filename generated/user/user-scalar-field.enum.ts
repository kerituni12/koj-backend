import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    password = "password",
    firstname = "firstname",
    lastname = "lastname",
    status = "status",
    role = "role",
    avatar = "avatar",
    provider = "provider",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdByName = "createdByName",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    extendData = "extendData"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
