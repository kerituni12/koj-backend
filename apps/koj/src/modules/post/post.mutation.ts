import { Args, Int, ResolveField, Resolver } from '@nestjs/graphql';

import { Post } from '@koj/generated/post/post.model';

import { PostMutations } from './post.type';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => PostMutations)
export class PostMutationsResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @ResolveField(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @ResolveField(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
