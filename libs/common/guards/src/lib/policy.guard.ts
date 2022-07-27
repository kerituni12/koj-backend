import * as casbin from "casbin";
import { Reflector } from "@nestjs/core";
import { PrismaService } from "nestjs-prisma";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ForbiddenException, HttpStatus } from "@nestjs/common";
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject
} from "@nestjs/common";

// import { User } from '@koj/generated/user/user.model';
import { Permission } from "@koj/common/interfaces";
import { CasbinModuleOptions } from "@koj/common/interfaces";
import {
  ADAPTER_ENFORCER,
  ADAPTER_MODULE_OPTIONS,
  PERMISSIONS_METADATA
} from "@koj/common/constants";
import { ForbiddenError } from "apollo-server-express";
import { UserCustom as User } from "@koj/common/interfaces";

@Injectable()
export class GqlPolicyGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
    @Inject(ADAPTER_ENFORCER) private enforcer: casbin.Enforcer,
    @Inject(ADAPTER_MODULE_OPTIONS) private options: CasbinModuleOptions
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);

    const permissions: Permission[] = this.reflector.get<Permission[]>(
      PERMISSIONS_METADATA,
      gqlContext.getHandler()
    );

    if (!permissions) {
      return true;
    }

    const request = gqlContext.getContext().req;
    const user = request.user;
    const polices = [];

    if (!user.role) {
      throw new ForbiddenError("User no have role");
    }

    const hasPermission = async (
      user: User,
      permission: Permission
    ): Promise<boolean> => {
      const { resource, action } = permission;

      // console.log(await this.enforcer.getPolicy());
      const [isAllow, policy] = await this.enforcer.enforceEx(
        { role: user.role },
        resource,
        action,
        user.domainId
      );

      if (!isAllow) {
        throw new ForbiddenException({
          message: `Don't have permission`,
          statusCode: HttpStatus.FORBIDDEN
        });
      }

      if (policy.length !== 0) {
        polices.push(policy);
        return true;
      }

      return false;
    };

    const result = await GqlPolicyGuard.asyncEvery<Permission>(
      permissions,
      async (permission) => hasPermission(user, permission)
    );

    if (result) {
      const attachCtxWhere = {
        createdById: user.userId,
        domainId: user.domainId,
        effectWith: polices[0].effectWith
      };
      const attachCtxData = {
        createdById: user.userId,
        domainId: user.domainId,
        createdByUsername: user.username,
        createdByName: `${user.firstname}:${user.lastname}`
      };

      Object.assign(request, {
        context: { where: attachCtxWhere, data: attachCtxData, polices }
      });
    }

    return result;
  }

  static async asyncSome<T>(
    array: T[],
    callback: (value: T, index: number, a: T[]) => Promise<boolean>
  ): Promise<boolean> {
    for (let i = 0; i < array.length; i++) {
      const result = await callback(array[i], i, array);
      if (result) {
        return result;
      }
    }

    return false;
  }

  static async asyncEvery<T>(
    array: T[],
    callback: (value: T, index: number, a: T[]) => Promise<boolean>
  ): Promise<boolean> {
    for (let i = 0; i < array.length; i++) {
      const result = await callback(array[i], i, array);
      if (!result) {
        return result;
      }
    }

    return true;
  }
}
