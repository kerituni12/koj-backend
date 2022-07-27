import { registerEnumType } from '@nestjs/graphql';

export enum ChallengeScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    acceptedLanguages = "acceptedLanguages",
    languages = "languages",
    rate = "rate",
    audience = "audience",
    functionName = "functionName",
    commentCount = "commentCount",
    contestId = "contestId",
    status = "status",
    categoryId = "categoryId",
    description = "description",
    companyTags = "companyTags",
    contributors = "contributors",
    examples = "examples",
    inputs = "inputs",
    structs = "structs",
    types = "types",
    output = "output",
    highlightSolutionCount = "highlightSolutionCount",
    hint = "hint",
    isFavorited = "isFavorited",
    officalSolutionCount = "officalSolutionCount",
    testcases = "testcases",
    difficulty = "difficulty",
    likes = "likes",
    dislikes = "dislikes",
    solutions = "solutions",
    domainId = "domainId",
    createdById = "createdById",
    createdByUsername = "createdByUsername",
    createdByName = "createdByName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ChallengeScalarFieldEnum, { name: 'ChallengeScalarFieldEnum', description: undefined })
