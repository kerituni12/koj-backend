import { GroupCreateInput } from '@koj/generated/group/group-create.input';
import { GroupUpdateInput } from '@koj/generated/group/group-update.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { FindManyGroupArgs } from '@koj/generated/group/find-many-group.args';
import { GroupWhereUniqueInput } from '@koj/generated/group/group-where-unique.input';
import { GroupWhereInput } from '@koj/generated/group/group-where.input';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  create(data: GroupCreateInput) {
    return this.prisma.group.create({ data });
  }

  findMany(args: FindManyGroupArgs, select: object) {
    return this.prisma.group.findMany({ ...args, select });
  }

  findUnique(where: GroupWhereUniqueInput, select: object) {
    return this.prisma.group.findUnique({ where, select });
  }

  findFist(where: GroupWhereInput, select: object) {
    return this.prisma.group.findFirst({ where, select });
  }

  update(data: GroupUpdateInput, where: GroupWhereUniqueInput, select: object) {
    return this.prisma.group.update({ data, where, select });
  }

  remove(where: GroupWhereUniqueInput) {
    return this.prisma.group.update({ data: { status: 'deleted' }, where });
  }
}
