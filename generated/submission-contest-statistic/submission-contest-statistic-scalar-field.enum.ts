import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionContestStatisticScalarFieldEnum {
    id = "id",
    contestId = "contestId",
    info = "info",
    domainId = "domainId",
    createdById = "createdById"
}


registerEnumType(SubmissionContestStatisticScalarFieldEnum, { name: 'SubmissionContestStatisticScalarFieldEnum', description: undefined })
