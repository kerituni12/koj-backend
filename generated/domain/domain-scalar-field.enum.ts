import { registerEnumType } from '@nestjs/graphql';

export enum DomainScalarFieldEnum {
    id = "id",
    domain = "domain",
    domainId = "domainId",
    status = "status"
}


registerEnumType(DomainScalarFieldEnum, { name: 'DomainScalarFieldEnum', description: undefined })
