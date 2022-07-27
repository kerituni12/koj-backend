import { registerEnumType } from '@nestjs/graphql';

export enum TopicTagScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    status = "status",
    domainId = "domainId"
}


registerEnumType(TopicTagScalarFieldEnum, { name: 'TopicTagScalarFieldEnum', description: undefined })
