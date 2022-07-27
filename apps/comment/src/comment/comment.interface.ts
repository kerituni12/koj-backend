import { Types } from 'mongoose';

export interface VotePayload {
  userId: number;
  vote: number;
  commentId: Types.ObjectId;
  domainId: number;
}

export interface CommentPayload {
  userId?: number;
  type?: string;
  parentId?: string;
  challengeId?: number;
  domainId: number;
  content?: string;
}
