import slugify from 'slugify';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/koj.prisma.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  NotImplementedException
} from '@nestjs/common';

import { RoleCreateInput } from './dto/role-create.input';
import { RoleUpdateInput } from '@koj/generated/role/role-update.input';
import { FindManyRoleArgs } from '@koj/generated/role/find-many-role.args';
import { RoleWhereUniqueInput } from '@koj/generated/role/role-where-unique.input';

import { RoleGroupService } from '../casbin/role/role.service';
import { PolicyService } from '../casbin/policy/policy.service';
import { Logger } from '@/logger/logger.service';
import { context, trace } from '@opentelemetry/api';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class RoleService {
  constructor(
    private readonly casbinPolicyService: PolicyService,
    private readonly roleGroupService: RoleGroupService,
    private readonly prisma: PrismaService
  ) {}

  async createRole(data: RoleCreateInput, select?: object) {
    const { createdById, createdByName, domainId } = data;
    const key = slugify(data.name);

    const checkExist = await this.prisma.role.findFirst({
      where: { key, domainId },
      select: { id: true }
    });
    if (checkExist) {
      throw new ConflictException({
        message: 'Role already exists',
        statusCode: HttpStatus.CONFLICT
      });
    }

    data.policies.forEach((element) => {
      Object.assign(element, {
        domainId,
        createdById,
        createdByName,
        subject: key
      });
    });

    await this.casbinPolicyService.createPolicies(data.policies);

    // TODO handle when inherit- multiple role
    await this.roleGroupService.createRole(
      {
        domainId,
        rule: key,
        role: key
      },
      { id: true }
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { policies, ...dataCreate } = data;
    dataCreate.key = key;

    return this.prisma.role.create({ data: dataCreate, ...select });
  }

  findMany(args: FindManyRoleArgs, select: object) {
    return this.prisma.role.findMany({ ...args, select });
  }

  async findUnique(where: RoleWhereUniqueInput, select: Prisma.RoleSelect) {
    return this.prisma.role.findUnique({ where, select }).then((data) => {
      if (!data) {
        throw new NotFoundException({
          message: 'Role not exists',
          statusCode: HttpStatus.NOT_FOUND
        });
      }
      return data;
    });
  }

  async update(
    data: RoleUpdateInput,
    where: RoleWhereUniqueInput,
    select: object
  ) {
    const { domainId } = data;
    const key = slugify(data.name);

    const checkExistResult = await this.prisma.role.findFirst({
      where: { key, domainId },
      select: { id: true, name: true }
    });
    if (checkExistResult && data.name === checkExistResult.name) {
      throw new ConflictException({
        message: 'Role is exists',
        statusCode: HttpStatus.CONFLICT
      });
    }

    data.updatedAt = new Date().toISOString();
    return this.prisma.role.update({ data, where, select });
    // return this.prisma.role.update({ data, where, select }).catch((error) => {
    //   if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //     if (error.code === 'P2025') {
    //       throw new NotFoundException({
    //         message: 'Role not exists',
    //         statusCode: HttpStatus.NOT_FOUND,
    //       });
    //     }
    //   }
    //   throw error;
    // });
  }

  remove(where: RoleWhereUniqueInput, select: object) {
    return this.prisma.role.delete({ where, select }).catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException();
        }
      }
      throw error;
    });
  }
}
