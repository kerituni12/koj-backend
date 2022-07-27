import { IsNotEmpty } from 'class-validator';

export class CommentCreateDto {
  // @IsNotEmpty()
  readonly challengeId: number;
  // @IsNotEmpty()
  readonly depth: number;
  // @IsNotEmpty()
  readonly parentId: string;
  // @IsNotEmpty()
  readonly content?: string;
  readonly author: {
    id: number;
    username?: string;
    name?: string;
  };
  readonly domainId: number;
}
