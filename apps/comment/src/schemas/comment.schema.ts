import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

export class Author {
  @Prop({ required: true })
  id: string;

  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  avatar: string;
}

export class Vote {
  @Prop({ required: true })
  userId: number;

  @Prop()
  vote: number;
}

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ default: 0 })
  challengeId: number;

  @Prop({ default: 0 })
  depth: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, default: null })
  parentId: Types.ObjectId | string;

  @Prop({ type: Author })
  author?: Author;

  @Prop({ required: true, isRequired: true })
  content: string;

  @Prop({ type: MongooseSchema.Types.Array, default: [] })
  votes?: Vote[];

  @Prop({ default: 0 })
  votePoint: number;

  @Prop({ default: 0 })
  domainId: number;

  @Prop({ default: 0 })
  replyCount: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

// export const commentSchema = new mongoose.Schema(
//   {
//     postId: {
//       type: Number,
//       default: 1,
//     },
//     depth: {
//       type: Number,
//       default: 1,
//     },
//     parentId: {
//       type: mongoose.Schema.Types.ObjectId,
//       default: null,
//     },
//     postedDate: { type: Date, default: Date.now },
//     author: {
//       id: mongoose.Schema.Types.ObjectId,
//       name: String,
//     },
//     commentText: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true },
// );
