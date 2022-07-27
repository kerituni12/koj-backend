import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostMutationsResolver } from './post.mutation';

@Module({
  providers: [PostResolver, PostMutationsResolver, PostService, PrismaService],
})
export class PostModule {}
