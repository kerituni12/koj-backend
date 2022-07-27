import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { FindUniquePostArgs } from '@koj/generated/post/find-unique-post.args';
import { FindManyPostArgs } from '@koj/generated/post/find-many-post.args';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostInput: CreatePostInput) {
    return 'This action adds a new post';
  }

  findMany(args: FindManyPostArgs, select: object) {
    return this.prisma.post.findMany({ ...args, ...select });
  }

  findUnique(args: FindUniquePostArgs, select: object) {
    return this.prisma.post.findUnique({ ...args, ...select });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
