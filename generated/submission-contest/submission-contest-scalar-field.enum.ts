import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionContestScalarFieldEnum {
    id = "id",
    languageId = "languageId",
    contestId = "contestId",
    challengeId = "challengeId",
    content = "content",
    result = "result",
    ip = "ip",
    shared = "shared",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdAt = "createdAt"
}


registerEnumType(SubmissionContestScalarFieldEnum, { name: 'SubmissionContestScalarFieldEnum', description: undefined })
