import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionScalarFieldEnum {
    id = "id",
    languageId = "languageId",
    challengeId = "challengeId",
    content = "content",
    result = "result",
    info = "info",
    ip = "ip",
    shared = "shared",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdAt = "createdAt"
}


registerEnumType(SubmissionScalarFieldEnum, { name: 'SubmissionScalarFieldEnum', description: undefined })
