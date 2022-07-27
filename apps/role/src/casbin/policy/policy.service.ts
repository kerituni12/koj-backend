import * as casbin from 'casbin';
import { Prisma } from '@prisma/client';
import { compile } from 'expression-eval';
import { PrismaService } from 'nestjs-prisma';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';

import { Policy } from '@koj/generated/policy/policy.model';
import { PolicyCreateInput } from '@koj/generated/policy/policy-create.input';
import { PolicyUpdateInput } from '@koj/generated/policy/policy-update.input';
import { FindManyPolicyArgs } from '@koj/generated/policy/find-many-policy.args';
import { PolicyWhereUniqueInput } from '@koj/generated/policy/policy-where-unique.input';
import { PolicyFindByRoleResourceInput } from './dto/find-by-role.dto';
import { policyByRoleResourceQuery } from './query/policy.query';
import { HttpStatus } from '@nestjs/common';
import { ADAPTER_ENFORCER } from '@koj/common/constants';

@Injectable()
export class PolicyService {
  constructor(
    private prisma: PrismaService,
    @Inject(ADAPTER_ENFORCER)
    private readonly enforcer: casbin.Enforcer,
  ) {}

  async createPolicy(data: PolicyCreateInput) {
    const casbinResult = await this.enforcer.addPolicy(
      ...this.transformPolicyInput(data),
    );

    if (!casbinResult) {
      throw new BadRequestException({
        message: `Can't create policy`,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    return this.prisma.policy.create({ data });
  }

  async createPolicies(data: PolicyCreateInput[]) {
    const policies = [];

    data.forEach((policy) => {
      policies.push(this.transformPolicyInput(policy));
    });

    const casbinResult = await this.enforcer.addPolicies(policies);

    if (!casbinResult) {
      throw new BadRequestException({
        message: `Can't create policy`,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    return this.prisma.policy.createMany({ data });
  }

  findMany(args: FindManyPolicyArgs, select: object) {
    return this.prisma.policy.findMany({ ...args, select });
  }

  findUnique(where: PolicyWhereUniqueInput, select: object) {
    return this.prisma.policy.findUnique({ where, select });
  }

  findByRoleResource(where: PolicyFindByRoleResourceInput, select: object) {
    const query = policyByRoleResourceQuery(where, select);
    return this.prisma.$queryRawUnsafe(query);
  }

  async update(data: PolicyUpdateInput, where: PolicyWhereUniqueInput, select: object) {
    const policy = await this.prisma.policy.findUnique({ where });

    if (!policy) {
      throw new NotFoundException();
    }

    const { oldData, newData } = this.getOldNewPolicyData(<Policy>policy, <Policy>data);
    const updatePolicyResult = await this.enforcer.updatePolicy(oldData, newData);

    if (!updatePolicyResult) {
      throw new BadRequestException({
        message: `Can't update policy`,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    try {
      return await this.prisma.policy.update({ data, where, select });
    } catch (error) {
      await this.enforcer.updatePolicy(newData, oldData);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new NotImplementedException((<any>error.meta)?.cause);
      }
      throw error;
    }
  }

  remove(where: PolicyWhereUniqueInput, select: object) {
    return this.prisma.policy.delete({ where, select }).catch((e) => {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException();
        }
      }
      throw new NotImplementedException(e.meta?.cause);
    });
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
      data.domainId?.toString() || domainId.toString(),
    ];

    return { oldData, newData };
  }
}
