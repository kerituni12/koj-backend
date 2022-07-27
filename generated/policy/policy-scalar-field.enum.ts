import { registerEnumType } from '@nestjs/graphql';

export enum PolicyScalarFieldEnum {
    id = "id",
    ptype = "ptype",
    subject = "subject",
    object = "object",
    action = "action",
    effect = "effect",
    effectWith = "effectWith",
    condition = "condition",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdByName = "createdByName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PolicyScalarFieldEnum, { name: 'PolicyScalarFieldEnum', description: undefined })
