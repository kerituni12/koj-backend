import * as casbin from 'casbin';
import { compile } from 'expression-eval';
import { PrismaService } from 'nestjs-prisma';
import { Inject, Injectable } from '@nestjs/common';

import { Policy } from '@koj/generated/policy/policy.model';
import { ADAPTER_ENFORCER } from '@koj/common/constants';
import { PolicyCreateInput } from '@koj/generated/policy/policy-create.input';
import { FindManyPolicyArgs } from '@koj/generated/policy/find-many-policy.args';
import { permissionQuery } from './permission.query';
import { User } from '@koj/generated/user/user.model';

@Injectable()
export class PermissionService {
  constructor(
    private prisma: PrismaService,
    @Inject(ADAPTER_ENFORCER)
    private readonly enforcer: casbin.Enforcer,
  ) {}

  findMany(args: FindManyPolicyArgs, select: object) {
    return this.prisma.policy.findMany({ ...args, select });
  }

  async getPermissionForUser(user: User) {
    const permissions: { permission: string }[] = await this.prisma.$queryRaw(
      permissionQuery(user),
    );

    return permissions.map((permission) => permission.permission);
  }

  transformPolicyInput(p: PolicyCreateInput) {
    return [
      p.subject,
      p.object,
      p.action,
      p.effect,
      p.effectWith,
      p.condition,
      p.domainId?.toString(),
    ];
  }

  transformPolicyToObject(policy: string[]) {
    const obj: Policy | unknown = {};
    policy.forEach((value, i) => (obj[i] = value));
    return obj;
  }

  checkValidPolicyCondition(condition: string) {
    if (condition == '') return true;

    try {
      const mockData = {
        subject: { username: 'username', role: 'role', type: 'type', level: 'level' },
      };

      const resultCompile = compile(condition)(mockData);

      return typeof resultCompile !== 'undefined';
    } catch (err) {
      return false;
    }
  }

  getOldNewPolicyData(policy: Policy, data: Policy) {
    const { subject, object, action, effect, effectWith, domainId } = policy;
    const condition = (policy.condition ||= '');
    const oldData = [
      subject,
      object,
      action,
      effect,
      effectWith,
      condition,
      domainId.toString(),
    ];
    const newData = [
      data.subject || subject,
      data.object || object,
      data.action || action,
      data.effect || effect,
      data.effectWith || effectWith,
      data.condition || condition,
      data.domainId.toString() || domainId.toString(),
    ];

    return { oldData, newData };
  }
}
