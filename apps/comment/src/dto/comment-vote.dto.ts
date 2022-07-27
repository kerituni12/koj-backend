import { Types } from 'mongoose';

export class CommentVoteDto {
  readonly commentId: Types.ObjectId;
  readonly userId: number;
  readonly vote?: number;
  readonly domainId: number;
}
