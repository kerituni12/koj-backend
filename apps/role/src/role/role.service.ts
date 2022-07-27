import slugify from 'slugify';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';

import { RoleCreateInput } from './dto/role-create.input';
import { RoleUpdateInput } from '@koj/generated/role/role-update.input';
import { FindManyRoleArgs } from '@koj/generated/role/find-many-role.args';
import { RoleWhereUniqueInput } from '@koj/generated/role/role-where-unique.input';

import { RoleGroupService } from '../casbin/role/role.service';
import { PolicyService } from '../casbin/policy/policy.service';
import { context, trace } from '@opentelemetry/api';
import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RoleService {
  constructor(
    private readonly casbinPolicyService: PolicyService,
    private readonly roleGroupService: RoleGroupService,
    private readonly prisma: PrismaService,
  ) {}

  async create(data: RoleCreateInput, select?: object) {
    const { createdById, createdByName, domainId } = data;
    const key = slugify(data.name);

    const checkExist = await this.prisma.role.findFirst({
      where: { key, domainId },
      select: { id: true },
    });
    if (checkExist) {
      throw new RpcException('Role already exists');
    }

    data.policies.forEach((element) => {
      Object.assign(element, {
        domainId,
        createdById,
        createdByName,
        subject: key,
      });
    });

    await this.casbinPolicyService.createPolicies(data.policies);

    // TODO handle when inherit- multiple role
    await this.roleGroupService.createRole(
      {
        domainId,
        rule: key,
        role: key,
      },
      { id: true },
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { policies, ...dataCreate } = data;
    dataCreate.key = key;

    return this.prisma.role.create({ data: dataCreate, ...select });
  }

  async findMany(args: FindManyRoleArgs, select: object) {
    const result = await this.prisma.role.findMany({ ...args, select });
    console.log('result', result);
    return result;
  }

  async findUnique(where: RoleWhereUniqueInput, select: Prisma.RoleSelect) {
    const result = await this.prisma.role.findUnique({ where, select });
    if (!result) {
      throw new RpcException('Role is exists');
    }
    return result;
  }

  async update(data: RoleUpdateInput, where: RoleWhereUniqueInput, select: object) {
    const { domainId } = data;
    const key = slugify(data.name);

    const checkExistResult = await this.prisma.role.findFirst({
      where: { key, domainId },
      select: { id: true, name: true },
    });
    if (checkExistResult && data.name === checkExistResult.name) {
      throw new RpcException('Role is exists');
    }

    data.updatedAt = new Date().toISOString();
    return this.prisma.role.update({ data, where, select });
  }

  remove(where: RoleWhereUniqueInput, select: object) {
    return this.prisma.role.delete({ where, select });
  }
}
