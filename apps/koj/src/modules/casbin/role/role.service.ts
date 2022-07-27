import * as casbin from 'casbin';
import { PrismaService } from 'nestjs-prisma';
import { Inject, Injectable } from '@nestjs/common';

import { ADAPTER_ENFORCER } from '../casbin.constant';
import { RoleGroupCreateInput } from '@koj/generated/role-group/role-group-create.input';
import { RoleGroupUpdateInput } from '@koj/generated/role-group/role-group-update.input';
import { RoleGroupWhereUniqueInput } from '@koj/generated/role-group/role-group-where-unique.input';

@Injectable()
export class RoleGroupService {
  constructor(
    private prisma: PrismaService,
    @Inject(ADAPTER_ENFORCER)
    private readonly enforcer: casbin.Enforcer,
  ) {}

  async createRole(data: RoleGroupCreateInput, select?: object) {
    const result = await this.enforcer.addPolicy(...this.transformRoleInput(data));

    if (result) {
      await this.prisma.roleGroup.create({ data, select });
      return true;
    }
    return false;
  }

  async createRoles(data: RoleGroupCreateInput[]) {
    const policies = [];

    data.forEach((policy) => {
      policies.push(this.transformRoleInput(policy));
    });

    const result = await this.enforcer.addPolicies(policies);

    if (result)
      this.prisma.roleGroup.createMany({ data }).catch((e) => {
        throw e;
      });
    return true;
  }

  findMany() {
    return this.prisma.roleGroup.findMany();
  }

  findUnique(where: RoleGroupWhereUniqueInput) {
    return this.prisma.roleGroup.findUnique({ where });
  }

  update(data: RoleGroupUpdateInput, where: RoleGroupWhereUniqueInput) {
    return this.prisma.roleGroup.update({ data, where });
  }

  remove(id: number) {
    return `This action removes a #${id} roleGroup`;
  }

  transformRoleInput(p: RoleGroupCreateInput) {
    return [p.role, p.rule, p.domainId?.toString()];
  }

  transformRoleArrayToObject(p: Array<unknown>) {
    return { role: p[0], rule: p[1], domainId: p[2] };
  }
}
