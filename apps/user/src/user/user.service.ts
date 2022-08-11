import { nanoid } from 'nanoid';
import { Prisma } from '@koj-prisma/user';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../user.prisma.service';

import { User } from '@koj/generated/user/user.model';
import { UserCreateInput } from '@koj/generated/user/user-create.input';
import { UserUpdateInput } from '@koj/generated/user/user-update.input';
import { FindManyUserArgs } from '@koj/generated/user/find-many-user.args';
import { UserWhereUniqueInput } from '@koj/generated/user/user-where-unique.input';

import { PasswordService } from './password.service';
import { UserEmailDomainIdCompoundUniqueInput } from '@koj/generated/user/user-email-domain-id-compound-unique.input';

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
      throw new BadRequestException('User with that email already exists');
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
      throw new BadRequestException('Fail when create user');
    }
  }

  findMany(args: FindManyUserArgs, select: object) {
    return this.prisma.user.findMany({ ...args, select });
  }

  findUnique(where: UserWhereUniqueInput, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({ where, select });
  }

  getUserById(id: number, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({ where: { id }, select });
  }

  getUserByUsername(where: UserWhereUniqueInput, select?: Prisma.UserSelect) {
    // const whereCondition = { username_domainId };
    return this.prisma.user.findUnique({ where, select });
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
