import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionStatisticScalarFieldEnum {
    id = "id",
    challengeId = "challengeId",
    languageId = "languageId",
    score = "score",
    submitCount = "submitCount",
    info = "info",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    lastSubmitTime = "lastSubmitTime"
}


registerEnumType(SubmissionStatisticScalarFieldEnum, { name: 'SubmissionStatisticScalarFieldEnum', description: undefined })
