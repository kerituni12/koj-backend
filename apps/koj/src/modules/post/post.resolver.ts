import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';

import { Post } from '@koj/generated/post/post.model';
import { FindManyPostArgs } from '@koj/generated/post/find-many-post.args';
import { FindUniquePostArgs } from '@koj/generated/post/find-unique-post.args';

import { PostMutations } from './post.type';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostMutations, { name: 'post', nullable: true })
  postMutations() {
    return {};
  }

  @Query(() => [Post], { name: 'posts' })
  findMany(@Args() args: FindManyPostArgs, @Info() info: GraphQLResolveInfo) {
    const select = new PrismaSelect(info).value;
    return this.postService.findMany(args, select);
  }

  @Query(() => Post, { name: 'post' })
  findUnique(@Args() args: FindUniquePostArgs, @Info() info: GraphQLResolveInfo) {
    const select = new PrismaSelect(info).value;
    return this.postService.findUnique(args, select);
  }
}
