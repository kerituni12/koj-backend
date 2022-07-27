import { nanoid } from "nanoid";
import { Prisma } from "@prisma/client";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserInputError } from "apollo-server-express";

import { User } from "@koj/generated/user/user.model";
import { UserCreateInput } from "@koj/generated/user/user-create.input";
import { UserUpdateInput } from "@koj/generated/user/user-update.input";
import { FindManyUserArgs } from "@koj/generated/user/find-many-user.args";
import { UserWhereUniqueInput } from "@koj/generated/user/user-where-unique.input";

import { PasswordService } from "./password.service";
import { UserEmailDomainIdCompoundUniqueInput } from "@koj/generated/user/user-email-domain-id-compound-unique.input";
import { UserUsernameDomainIdCompoundUniqueInput } from "@koj/generated/user/user-username-domain-id-compound-unique.input";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}
  async create(data: UserCreateInput, select?: object): Promise<User> {
    const isExisted = await this.getUserByEmail(
      { email: data.email, domainId: data.domainId },
      { id: true }
    );
    if (isExisted) {
      throw new BadRequestException("User with that email already exists");
    }

    try {
      const hashedPassword = await this.passwordService.hashPassword(
        data.password || nanoid(8)
      );
      const user = (await this.prisma.user.create({
        data: { ...data, password: hashedPassword },
        select
      })) as User;

      return user;
    } catch (error) {
      throw new BadRequestException("Fail when create user");
    }
  }

  async createByUsername(
    data: UserCreateInput,
    select?: object
  ): Promise<User> {
    let username = data.username;
    const users: any = await this.prisma.user.findMany({
      where: {
        username: { startsWith: data.username },
        domainId: data.domainId
      },
      select: { username: true },
      orderBy: { username: "desc" }
    });

    if (users.findIndex((user) => user.username === data.username) > -1) {
      const [string, digit] = users[0].username.split(/(\d+)(?!.*\d)/);
      username = `${string}${Number(digit) + 1}`;
    }
    console.log(username);
    try {
      const hashedPassword = await this.passwordService.hashPassword(
        data.password || nanoid(8)
      );

      const user = (await this.prisma.user.create({
        data: { ...data, password: hashedPassword, username },
        select
      })) as User;

      return user;
    } catch (error) {
      throw new BadRequestException("Fail when create user");
    }
  }

  findMany(args: FindManyUserArgs, select: object, context?: any) {
    const { where = {}, ...args$ } = args;
    where.domainId = context.where.domainId;
    return this.prisma.user.findMany({ where, ...args$, ...select });
  }

  findUnique(where: UserWhereUniqueInput, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({ where, select });
  }

  getUserById(id: number, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({ where: { id }, select });
  }

  getUserByUsername(
    username_domainId: UserUsernameDomainIdCompoundUniqueInput,
    select?: Prisma.UserSelect
  ) {
    const whereCondition = { username_domainId };
    return this.prisma.user.findUnique({ where: whereCondition, select });
  }

  getUserByEmail(
    email_domainId: UserEmailDomainIdCompoundUniqueInput,
    select?: Prisma.UserSelect
  ) {
    const whereCondition: UserWhereUniqueInput = { email_domainId };
    return this.prisma.user.findUnique({ where: whereCondition, select });
  }

  update(data: UserUpdateInput, where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.update({ data, where });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
