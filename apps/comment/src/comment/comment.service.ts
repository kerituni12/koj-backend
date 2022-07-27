import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { RpcException } from "@nestjs/microservices";
import * as mongoose from "mongoose";

import { CommentCreateDto } from "../dto/comment.dto";
import { CommentVoteDto } from "../dto/comment-vote.dto";
import { Comment, CommentDocument } from "../schemas/comment.schema";
import { CommentPayload } from "./comment.interface";
import mongodb from "mongodb";
import { fulfillWithTimeLimit } from "@koj/common/utils";

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection
  ) {}

  getSession(): Promise<mongodb.ClientSession> {
    const TIMEOUT = 1000;
    return new Promise((resolve, reject) => {
      const setTimeOut = setTimeout(async () => {
        await this.connection.close();
        reject("timeout");
      }, TIMEOUT);

      (async () => {
        const session = await this.connection.startSession();
        if (session) {
          clearTimeout(setTimeOut);
        }

        console.log("return ");
        resolve(session);
      })();
    });
  }
  async create(comment: CommentCreateDto) {
    let result;

    try {
      const timeLimit = 1000; // 1 sec time limit
      const failureValue = null; // this is null for just an example.
      const session = await fulfillWithTimeLimit(
        timeLimit,
        this.connection.startSession(),
        failureValue
      );

      if (!session) {
        throw new Error("cant work");
      }

      await session.withTransaction(async () => {
        console.log("run with transaction");
        const { domainId, parentId } = comment;
        const bulkOperation: Array<mongodb.AnyBulkWriteOperation> = [
          {
            insertOne: {
              document: comment
            }
          }
        ];

        if (parentId) {
          bulkOperation.push({
            updateOne: {
              filter: { _id: comment.parentId, domainId },
              update: {
                $inc: { replyCount: 1 }
              }
            }
          });
        }

        result = await this.commentModel.bulkWrite(bulkOperation, { session });

        if (result.insertedCount !== 1) {
          throw new Error("create comment fail");
        }
        // if (result.modifiedCount !== 1) {
        //   // Log update count faile
        //   throw new Error('update comment count fail');
        // }
        await session.commitTransaction();
        await session.endSession();
      });
    } catch (error) {
      throw new RpcException(error.message);
    }

    return { _id: result.insertedIds[0]._id };
  }

  async getCommentById({
    challengeId,
    parentId,
    userId,
    domainId
  }: CommentPayload) {
    if (!challengeId && !parentId) {
      throw new RpcException("Must include challengeId or parentId");
    }
    try {
      const whereCondition = parentId
        ? { parentId, domainId }
        : { challengeId, domainId, depth: 0 };

      const result: any = await this.commentModel
        .find(whereCondition)
        .sort({ createdAt: -1 })
        .lean();

      if (userId) {
        result.forEach((comment) => {
          comment.currentVote = 0;

          comment.votes.forEach((vote) => {
            if (vote.userId === userId) {
              comment.currentVote = vote.vote;
              return;
            }
          });
          delete comment.votes;
        });
      }

      console.log(
        "🚀 ~ file: comment.service.ts ~ line 112 ~ CommentService ~ result",
        result
      );
      return result;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  async vote({ userId, vote, commentId }: CommentVoteDto): Promise<Comment> {
    const updateVote = { userId, vote };
    try {
      const voteResult = await this.commentModel.findOneAndUpdate(
        { _id: commentId },
        [
          {
            $set: {
              votes: {
                $cond: [
                  { $in: [userId, "$votes.userId"] },
                  {
                    $map: {
                      input: "$votes",
                      in: {
                        $mergeObjects: [
                          "$$this",
                          {
                            $cond: [
                              { $eq: ["$$this.userId", userId] },
                              updateVote,
                              {}
                            ]
                          }
                        ]
                      }
                    }
                  },
                  { $concatArrays: ["$votes", [updateVote]] }
                ]
              },
              votePoint: { $sum: ["$votePoint", vote] }
            }
          }
        ],
        { new: true }
      );

      return voteResult;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  async unVote({ userId, commentId }: CommentVoteDto) {
    try {
      const whereCondition = { _id: commentId };
      const unVoteResult = await this.commentModel.updateOne(whereCondition, {
        $pull: { votes: { userId: userId } },
        $inc: { votePoint: -1 }
      });

      return unVoteResult.modifiedCount !== 0;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async remove(_id) {
    try {
      return await this.commentModel.deleteOne({ _id });
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
