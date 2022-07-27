import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    id = "id",
    title = "title",
    extension = "extension",
    statusId = "statusId"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
