/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/comment/src/comment/comment.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentController = void 0;
const tslib_1 = __webpack_require__("tslib");
const nestjs_otel_1 = __webpack_require__("nestjs-otel");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const instrumentation_2 = __webpack_require__("./libs/instrumentation/src/index.ts");
const exceptions_1 = __webpack_require__("./libs/common/exceptions/src/index.ts");
const comment_service_1 = __webpack_require__("./apps/comment/src/comment/comment.service.ts");
const comment_dto_1 = __webpack_require__("./apps/comment/src/dto/comment.dto.ts");
const comment_vote_dto_1 = __webpack_require__("./apps/comment/src/dto/comment-vote.dto.ts");
const comment_interface_1 = __webpack_require__("./apps/comment/src/comment/comment.interface.ts");
let CommentController = class CommentController {
    constructor(commentService, traceService) {
        this.commentService = commentService;
        this.traceService = traceService;
    }
    m_create(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.commentService.create(data);
        });
    }
    m_getCommentById(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.commentService.getCommentById(data);
        });
    }
    m_vote(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { userId, vote, commentId, domainId } = data;
            return this.commentService.vote({
                userId,
                vote,
                commentId,
                domainId
            });
        });
    }
    m_unvote(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { userId, vote, commentId, domainId } = data;
            return this.commentService.unVote({
                userId,
                vote,
                commentId,
                domainId
            });
        });
    }
    m_delete(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.commentService.remove(payload._id);
        });
    }
    /**
     * HTTP
     */
    vote(body) {
        return this.commentService.vote(body);
    }
    remove(body) {
        return this.commentService.remove(body._id);
    }
    unvote(body) {
        return this.commentService.unVote(body);
    }
    testGetData(body) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // const payload = { challengeId: 2, userId: 1, type: 'root' };
            // const payload = {
            //   parentId: '62b5644da23a6e8a3f82150d',
            //   userId: 1,
            //   domainId: 1,
            // };
            // const result = this.client.send(COMMENT_FIND_MANY_BY_ID, payload);
            // const vote = {
            //   vote: -1,
            //   userId: 1,
            //   commentId: '62b00a5f48b6a439fda6cf0f',
            // };
            // const result = this.client.send(COMMENT_VOTE, vote);
            const comment = {
                depth: 0,
                // challengeId: 1,
                author: { id: 1 },
                content: "hello dsafdsf dasf",
                parentId: "62b5644da23a6e8a3f82150d",
                domainId: 1
            };
            const result = this.client.send(constants_1.COMMENT_CREATE, comment);
            return result;
        });
    }
    getCommentById(id, body) {
        return this.commentService.getCommentById({
            parentId: body.parentId,
            userId: body.userId,
            type: body.type,
            domainId: body.domainId
        });
    }
};
(0, tslib_1.__decorate)([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.NATS,
        options: {
            queue: "comment_queue",
            servers: ["nats://localhost:4222"]
        }
    }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object)
], CommentController.prototype, "client", void 0);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.COMMENT_CREATE),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof comment_dto_1.CommentCreateDto !== "undefined" && comment_dto_1.CommentCreateDto) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "m_create", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.COMMENT_FIND_MANY_BY_ID),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof comment_interface_1.CommentPayload !== "undefined" && comment_interface_1.CommentPayload) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "m_getCommentById", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.COMMENT_VOTE),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof comment_vote_dto_1.CommentVoteDto !== "undefined" && comment_vote_dto_1.CommentVoteDto) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "m_vote", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.COMMENT_UNVOTE),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof comment_vote_dto_1.CommentVoteDto !== "undefined" && comment_vote_dto_1.CommentVoteDto) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "m_unvote", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.COMMENT_DELETE),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "m_delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)("/vote"),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof comment_interface_1.VotePayload !== "undefined" && comment_interface_1.VotePayload) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentController.prototype, "vote", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)("/delete"),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentController.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)("/unvote"),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof comment_interface_1.VotePayload !== "undefined" && comment_interface_1.VotePayload) === "function" ? _g : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentController.prototype, "unvote", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentController.prototype, "testGetData", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)("/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, tslib_1.__param)(0, (0, common_1.Param)("id")),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentController.prototype, "getCommentById", null);
CommentController = (0, tslib_1.__decorate)([
    (0, common_1.UseInterceptors)(instrumentation_2.TraceInterceptor),
    (0, common_1.UseFilters)(exceptions_1.AllRpcExceptionFilter),
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof comment_service_1.CommentService !== "undefined" && comment_service_1.CommentService) === "function" ? _h : Object, typeof (_j = typeof nestjs_otel_1.TraceService !== "undefined" && nestjs_otel_1.TraceService) === "function" ? _j : Object])
], CommentController);
exports.CommentController = CommentController;


/***/ }),

/***/ "./apps/comment/src/comment/comment.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/comment/src/comment/comment.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const comment_schema_1 = __webpack_require__("./apps/comment/src/schemas/comment.schema.ts");
const comment_controller_1 = __webpack_require__("./apps/comment/src/comment/comment.controller.ts");
const comment_service_1 = __webpack_require__("./apps/comment/src/comment/comment.service.ts");
const nestjs_otel_1 = __webpack_require__("nestjs-otel");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:9042,localhost:9142,localhost:9242/comments?replicaSet=docker-rs', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
                socketTimeoutMS: 5000,
                keepAlive: false,
                // readPreference: 'secondary',
                // w: 0,
                wtimeoutMS: 5000,
                waitQueueTimeoutMS: 5000,
                // retryWrites: true,
                // retryWrites: false,
                readPreference: 'secondaryPreferred',
                // replicaSet: 'dbrs',
            }),
            mongoose_1.MongooseModule.forFeature([{ name: comment_schema_1.Comment.name, schema: comment_schema_1.CommentSchema }]),
            nestjs_otel_1.OpenTelemetryModule.forRoot(),
        ],
        controllers: [comment_controller_1.CommentController],
        providers: [comment_service_1.CommentService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/comment/src/comment/comment.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_2 = __webpack_require__("@nestjs/mongoose");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const mongoose = (0, tslib_1.__importStar)(__webpack_require__("mongoose"));
const comment_schema_1 = __webpack_require__("./apps/comment/src/schemas/comment.schema.ts");
const utils_1 = __webpack_require__("./libs/common/utils/src/index.ts");
let CommentService = class CommentService {
    constructor(commentModel, connection) {
        this.commentModel = commentModel;
        this.connection = connection;
    }
    getSession() {
        const TIMEOUT = 1000;
        return new Promise((resolve, reject) => {
            const setTimeOut = setTimeout(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                yield this.connection.close();
                reject("timeout");
            }), TIMEOUT);
            (() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                const session = yield this.connection.startSession();
                if (session) {
                    clearTimeout(setTimeOut);
                }
                console.log("return ");
                resolve(session);
            }))();
        });
    }
    create(comment) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let result;
            try {
                const timeLimit = 1000; // 1 sec time limit
                const failureValue = null; // this is null for just an example.
                const session = yield (0, utils_1.fulfillWithTimeLimit)(timeLimit, this.connection.startSession(), failureValue);
                if (!session) {
                    throw new Error("cant work");
                }
                yield session.withTransaction(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                    console.log("run with transaction");
                    const { domainId, parentId } = comment;
                    const bulkOperation = [
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
                    result = yield this.commentModel.bulkWrite(bulkOperation, { session });
                    if (result.insertedCount !== 1) {
                        throw new Error("create comment fail");
                    }
                    // if (result.modifiedCount !== 1) {
                    //   // Log update count faile
                    //   throw new Error('update comment count fail');
                    // }
                    yield session.commitTransaction();
                    yield session.endSession();
                }));
            }
            catch (error) {
                throw new microservices_1.RpcException(error.message);
            }
            return { _id: result.insertedIds[0]._id };
        });
    }
    getCommentById({ challengeId, parentId, userId, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!challengeId && !parentId) {
                throw new microservices_1.RpcException("Must include challengeId or parentId");
            }
            try {
                const whereCondition = parentId
                    ? { parentId, domainId }
                    : { challengeId, domainId, depth: 0 };
                const result = yield this.commentModel
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
                console.log("🚀 ~ file: comment.service.ts ~ line 112 ~ CommentService ~ result", result);
                return result;
            }
            catch (error) {
                throw new microservices_1.RpcException(error.message);
            }
        });
    }
    vote({ userId, vote, commentId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updateVote = { userId, vote };
            try {
                const voteResult = yield this.commentModel.findOneAndUpdate({ _id: commentId }, [
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
                ], { new: true });
                return voteResult;
            }
            catch (error) {
                throw new microservices_1.RpcException(error.message);
            }
        });
    }
    unVote({ userId, commentId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const whereCondition = { _id: commentId };
                const unVoteResult = yield this.commentModel.updateOne(whereCondition, {
                    $pull: { votes: { userId: userId } },
                    $inc: { votePoint: -1 }
                });
                return unVoteResult.modifiedCount !== 0;
            }
            catch (error) {
                throw new microservices_1.RpcException(error.message);
            }
        });
    }
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.commentModel.find().exec();
        });
    }
    remove(_id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.commentModel.deleteOne({ _id });
            }
            catch (error) {
                throw new microservices_1.RpcException(error.message);
            }
        });
    }
};
CommentService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, mongoose_2.InjectModel)(comment_schema_1.Comment.name)),
    (0, tslib_1.__param)(1, (0, mongoose_2.InjectConnection)()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose !== "undefined" && mongoose.Connection) === "function" ? _b : Object])
], CommentService);
exports.CommentService = CommentService;


/***/ }),

/***/ "./apps/comment/src/dto/comment-vote.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentVoteDto = void 0;
class CommentVoteDto {
}
exports.CommentVoteDto = CommentVoteDto;


/***/ }),

/***/ "./apps/comment/src/dto/comment.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateDto = void 0;
class CommentCreateDto {
}
exports.CommentCreateDto = CommentCreateDto;


/***/ }),

/***/ "./apps/comment/src/schemas/comment.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentSchema = exports.Comment = exports.Vote = exports.Author = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
class Author {
}
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "avatar", void 0);
exports.Author = Author;
class Vote {
}
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Vote.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Vote.prototype, "vote", void 0);
exports.Vote = Vote;
let Comment = class Comment extends mongoose_2.Document {
};
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "depth", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, default: null }),
    (0, tslib_1.__metadata)("design:type", Object)
], Comment.prototype, "parentId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ type: Author }),
    (0, tslib_1.__metadata)("design:type", Author)
], Comment.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true, isRequired: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Comment.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Array, default: [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], Comment.prototype, "votes", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "votePoint", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "replyCount", void 0);
Comment = (0, tslib_1.__decorate)([
    (0, mongoose_1.Schema)({ timestamps: true })
], Comment);
exports.Comment = Comment;
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
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


/***/ }),

/***/ "./libs/common/constants/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/constants/src/lib/runner.constant.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/constants/src/lib/casbin.constant.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/constants/src/lib/message-partern.constant.ts"), exports);


/***/ }),

/***/ "./libs/common/constants/src/lib/casbin.constant.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PERMISSIONS_METADATA = exports.ADAPTER_ENFORCER = exports.ADAPTER_MODULE_OPTIONS = void 0;
exports.ADAPTER_MODULE_OPTIONS = 'ADAPTER_MODULE_OPTIONS';
exports.ADAPTER_ENFORCER = 'ADAPTER_ENFORCER';
exports.PERMISSIONS_METADATA = '__PERMISSIONS__';


/***/ }),

/***/ "./libs/common/constants/src/lib/message-partern.constant.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_SUBMIT = exports.USER_DELETE = exports.USER_UPDATE = exports.USER_CREATE = exports.USER_UNVOTE = exports.USER_VOTE = exports.USER_FIND_UNIQUE = exports.USER_FIND_UNIQUE_BY_USERNAME = exports.USER_FIND_MANY = exports.SUBMISSION_STATISTIC_FIND_MANY = exports.SUBMISSION_TEST = exports.SUBMISSION_SUBMIT = exports.SUBMISSION_DELETE = exports.SUBMISSION_UPDATE = exports.SUBMISSION_CREATE = exports.SUBMISSION_FIND_UNIQUE = exports.SUBMISSION_FIND_MANY_BY_USER = exports.SUBMISSION_FIND_MANY = exports.CHALLENGE_SUBMIT = exports.CHALLENGE_DELETE = exports.CHALLENGE_UPDATE = exports.CHALLENGE_CREATE = exports.CHALLENGE_FIND_UNIQUE = exports.CHALLENGE_FIND_UNIQUE_PUBLIC = exports.CHALLENGE_FIND_MANY_PUBLIC = exports.CHALLENGE_FIND_MANY = exports.ROLE_DELETE = exports.ROLE_UPDATE = exports.ROLE_CREATE = exports.ROLE_UNVOTE = exports.ROLE_VOTE = exports.ROLE_FIND_UNIQUE = exports.ROLE_FIND_MANY = exports.COMMENT_DELETE = exports.COMMENT_CREATE = exports.COMMENT_UNVOTE = exports.COMMENT_VOTE = exports.COMMENT_FIND_MANY_BY_ID = void 0;
exports.COMMENT_FIND_MANY_BY_ID = "comment.find.many.by_id";
exports.COMMENT_VOTE = "comment.vote";
exports.COMMENT_UNVOTE = "comment.unvote";
exports.COMMENT_CREATE = "comment.create";
exports.COMMENT_DELETE = "comment.delete";
/**
 * ROLE MESSAGE PATTERN
 */
exports.ROLE_FIND_MANY = "role.find.many";
exports.ROLE_FIND_UNIQUE = "role.find.unique";
exports.ROLE_VOTE = "role.vote";
exports.ROLE_UNVOTE = "role.unvote";
exports.ROLE_CREATE = "role.create";
exports.ROLE_UPDATE = "role.update";
exports.ROLE_DELETE = "role.delete";
/**
 * CHALLENGE MESSAGE PATTERN
 */
exports.CHALLENGE_FIND_MANY = "challenge.find.many";
exports.CHALLENGE_FIND_MANY_PUBLIC = "challenge.find.many.public";
exports.CHALLENGE_FIND_UNIQUE_PUBLIC = "challenge.find.unique.public";
exports.CHALLENGE_FIND_UNIQUE = "challenge.find.unique";
exports.CHALLENGE_CREATE = "challenge.create";
exports.CHALLENGE_UPDATE = "challenge.update";
exports.CHALLENGE_DELETE = "challenge.delete";
exports.CHALLENGE_SUBMIT = "challenge.submit";
/**
 * SUBMISSON MESSAGE PATTERN
 */
exports.SUBMISSION_FIND_MANY = "submission.find.many";
exports.SUBMISSION_FIND_MANY_BY_USER = "submission.find.many.by_user";
exports.SUBMISSION_FIND_UNIQUE = "submission.find.unique";
exports.SUBMISSION_CREATE = "submission.create";
exports.SUBMISSION_UPDATE = "submission.update";
exports.SUBMISSION_DELETE = "submission.delete";
exports.SUBMISSION_SUBMIT = "submission.submit";
exports.SUBMISSION_TEST = "submission.test";
/**
 * SUBMISSON MESSAGE PATTERN
 */
exports.SUBMISSION_STATISTIC_FIND_MANY = "submission.find.many";
/**
 * USER MESSAGE PATTERN
 */
exports.USER_FIND_MANY = "user.find.many";
exports.USER_FIND_UNIQUE_BY_USERNAME = "user.find.unique.by_username";
exports.USER_FIND_UNIQUE = "user.find.unique";
exports.USER_VOTE = "user.vote";
exports.USER_UNVOTE = "user.unvote";
exports.USER_CREATE = "user.create";
exports.USER_UPDATE = "user.update";
exports.USER_DELETE = "user.delete";
exports.USER_SUBMIT = "user.submit";


/***/ }),

/***/ "./libs/common/constants/src/lib/runner.constant.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RUN_TYPE = exports.RUN_ALL = exports.RUN_SUBMIT = exports.RUN_TEST = void 0;
exports.RUN_TEST = "run_test";
exports.RUN_SUBMIT = "run_submit";
exports.RUN_ALL = "run_all";
var RUN_TYPE;
(function (RUN_TYPE) {
    RUN_TYPE["TEST"] = "run_test";
    RUN_TYPE["SUBMIT"] = "run_submit";
    RUN_TYPE["ALL"] = "run_all";
})(RUN_TYPE = exports.RUN_TYPE || (exports.RUN_TYPE = {}));


/***/ }),

/***/ "./libs/common/exceptions/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/exceptions/src/lib/rpc.exception.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/exceptions/src/lib/rpc-prisma.exception.ts"), exports);


/***/ }),

/***/ "./libs/common/exceptions/src/lib/rpc-prisma.exception.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcPrismaExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rxjs_1 = __webpack_require__("rxjs");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const client_1 = __webpack_require__("@prisma/client");
let RpcPrismaExceptionFilter = class RpcPrismaExceptionFilter {
    catch(exception) {
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (exception.code === "P2002") {
                exception = new microservices_1.RpcException("Resource already exist");
            }
            if (exception.code === "P2025") {
                exception = new microservices_1.RpcException("Resource not exist");
            }
        }
        return (0, rxjs_1.throwError)(() => exception.message);
    }
};
RpcPrismaExceptionFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)()
], RpcPrismaExceptionFilter);
exports.RpcPrismaExceptionFilter = RpcPrismaExceptionFilter;


/***/ }),

/***/ "./libs/common/exceptions/src/lib/rpc.exception.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllRpcExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rxjs_1 = __webpack_require__("rxjs");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const api_1 = __webpack_require__("@opentelemetry/api");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const tracer = api_1.trace.getTracer('rpc-trace', '2.2.2');
let AllRpcExceptionFilter = class AllRpcExceptionFilter {
    catch(exception, host) {
        var _a;
        return tracer.startActiveSpan('rpc-exception', {}, (_a = instrumentation_1.StoreContext === null || instrumentation_1.StoreContext === void 0 ? void 0 : instrumentation_1.StoreContext.currentContext) === null || _a === void 0 ? void 0 : _a.context, (span) => {
            span.recordException(exception);
            span.end();
            return (0, rxjs_1.throwError)(() => exception.message);
        });
    }
};
AllRpcExceptionFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)(microservices_1.RpcException)
], AllRpcExceptionFilter);
exports.AllRpcExceptionFilter = AllRpcExceptionFilter;


/***/ }),

/***/ "./libs/common/utils/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/fs.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/common.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/crypto.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/string.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/policy.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/database-query.util.ts"), exports);


/***/ }),

/***/ "./libs/common/utils/src/lib/common.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeBase64 = exports.decodeBase64 = exports.fulfillWithTimeLimit = exports.template = void 0;
const tslib_1 = __webpack_require__("tslib");
function template(strings, ...keys) {
    return function (...values) {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach(function (key, i) {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}
exports.template = template;
function fulfillWithTimeLimit(timeLimit, task, failureValue) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        let timeout;
        const timeoutPromise = new Promise((resolve, reject) => {
            timeout = setTimeout(() => {
                resolve(failureValue);
            }, timeLimit);
        });
        const response = yield Promise.race([task, timeoutPromise]);
        if (timeout) {
            //the code works without this but let's be safe and clean up the timeout
            clearTimeout(timeout);
        }
        return response;
    });
}
exports.fulfillWithTimeLimit = fulfillWithTimeLimit;
function decodeBase64(data) {
    return Buffer.from(data, "base64").toString("ascii");
}
exports.decodeBase64 = decodeBase64;
function encodeBase64(data) {
    return Buffer.from(data).toString("base64");
}
exports.encodeBase64 = encodeBase64;


/***/ }),

/***/ "./libs/common/utils/src/lib/crypto.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = void 0;
const tslib_1 = __webpack_require__("tslib");
const crypto = (0, tslib_1.__importStar)(__webpack_require__("crypto"));
const algorithm = 'aes-256-cbc';
const initVector = crypto.randomBytes(16);
const defaultSecret = process.env.CRYPTO_AUTH_SECRET || 'defaultSecret!';
const defaultKey = crypto.scryptSync(defaultSecret, 'salt', 32);
function encrypt(data, securitykey = defaultKey) {
    const cipher = crypto.createCipheriv(algorithm, securitykey, initVector);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return { iv: initVector.toString('hex'), data: encryptedData };
    [];
}
exports.encrypt = encrypt;
function decrypt(encryptedData, securitykey = defaultKey) {
    const { iv, data } = encryptedData;
    const initVector = Buffer.from(iv, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, securitykey, initVector);
    let decryptedData = decipher.update(data, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
}
exports.decrypt = decrypt;


/***/ }),

/***/ "./libs/common/utils/src/lib/database-query.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformObjectToQuery = void 0;
const string_util_1 = __webpack_require__("./libs/common/utils/src/lib/string.util.ts");
function transformObjectToQuery(object, prefix) {
    return Object.keys(object)
        .map((obj) => {
        console.log('🚀 ~ file: database-query.ts ~ line 6 ~ .map ~ obj', obj);
        const column = (0, string_util_1.camelToSnakeCase)(obj);
        return prefix ? `${prefix}."${column}"` : column;
    })
        .join(', ');
}
exports.transformObjectToQuery = transformObjectToQuery;


/***/ }),

/***/ "./libs/common/utils/src/lib/fs.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeFile = exports.cleanDirectory = void 0;
const tslib_1 = __webpack_require__("tslib");
const promises_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs/promises"));
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const getDirName = path_1.default.dirname;
function cleanDirectory(directory) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        return promises_1.default
            .readdir(directory)
            .then((files) => Promise.all(files.map((file) => promises_1.default.unlink(`${directory}/${file}`))));
    });
}
exports.cleanDirectory = cleanDirectory;
function writeFile(path, contents) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        yield promises_1.default.mkdir(getDirName(path), { recursive: true });
        yield promises_1.default.writeFile(path, contents);
    });
}
exports.writeFile = writeFile;


/***/ }),

/***/ "./libs/common/utils/src/lib/policy.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformPolicyParam = void 0;
function transformPolicyParam(policyInput) {
    return;
}
exports.transformPolicyParam = transformPolicyParam;


/***/ }),

/***/ "./libs/common/utils/src/lib/string.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.camelToSnakeCase = exports.getValueAfterLastChar = void 0;
function getValueAfterLastChar(string, char) {
    return string.substring(string.lastIndexOf(char) + 1);
}
exports.getValueAfterLastChar = getValueAfterLastChar;
function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
exports.camelToSnakeCase = camelToSnakeCase;


/***/ }),

/***/ "./libs/instrumentation/src/RpcContextPropagator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTraceParent = exports.RpcTraceContextPropagator = exports.TRACE_STATE_HEADER = exports.TRACE_PARENT_HEADER = void 0;
const api_1 = __webpack_require__("@opentelemetry/api");
const core_1 = __webpack_require__("@opentelemetry/core");
exports.TRACE_PARENT_HEADER = 'traceparent';
exports.TRACE_STATE_HEADER = 'tracestate';
const VERSION = '00';
const VERSION_PART = '(?!ff)[\\da-f]{2}';
const TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
const PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
const FLAGS_PART = '[\\da-f]{2}';
const TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
/**
 *  Most of the part is same as W3CTraceContextPropagator
 *  Just leave the original code here for debug purpose
 */
class RpcTraceContextPropagator {
    inject(context, carrier, setter) {
        var _a;
        // const spanContext = trace.getSpanContext(context);
        const spanContext = ((_a = api_1.trace.getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext()) || api_1.trace.getSpanContext(context);
        if (!spanContext || (0, core_1.isTracingSuppressed)(context) || !(0, api_1.isSpanContextValid)(spanContext))
            return;
        const traceParent = `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || api_1.TraceFlags.NONE).toString(16)}`;
        setter.set(carrier, exports.TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter.set(carrier, exports.TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    }
    extract(context, carrier, getter) {
        const traceParentHeader = getter.get(carrier, exports.TRACE_PARENT_HEADER);
        if (!traceParentHeader)
            return context;
        const traceParent = Array.isArray(traceParentHeader)
            ? traceParentHeader[0]
            : traceParentHeader;
        if (typeof traceParent !== 'string')
            return context;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext)
            return context;
        spanContext.isRemote = true;
        const traceStateHeader = getter.get(carrier, exports.TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            const state = Array.isArray(traceStateHeader)
                ? traceStateHeader.join(',')
                : traceStateHeader;
            spanContext.traceState = new core_1.TraceState(typeof state === 'string' ? state : undefined);
        }
        return api_1.trace.setSpanContext(context, spanContext);
        // return context;
    }
    fields() {
        return [exports.TRACE_PARENT_HEADER, exports.TRACE_STATE_HEADER];
    }
}
exports.RpcTraceContextPropagator = RpcTraceContextPropagator;
function parseTraceParent(traceParent) {
    const match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match)
        return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5])
        return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16),
    };
}
exports.parseTraceParent = parseTraceParent;


/***/ }),

/***/ "./libs/instrumentation/src/decorator/span.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Span = void 0;
const api_1 = __webpack_require__("@opentelemetry/api");
const store_context_1 = __webpack_require__("./libs/instrumentation/src/trace/store-context.ts");
const utils_1 = __webpack_require__("./libs/instrumentation/src/utils.ts");
const recordException = (span, error) => {
    span.recordException(error);
    span.setStatus({ code: api_1.SpanStatusCode.ERROR, message: error.message });
};
function Span(name, attributes = {}) {
    return (target, propertyKey, propertyDescriptor) => {
        const originalFunction = propertyDescriptor.value;
        const wrappedFunction = function PropertyDescriptor(...args) {
            var _a;
            console.log('🚀 ~ file: span.decorator.ts ~ line 14 ~ wrappedFunction ~ args', args);
            const tracer = api_1.trace.getTracer('default');
            //   const currentSpan =
            //   trace.getSpan(context.active()) ?? tracer.startSpan('default');
            const parentCtx = (_a = store_context_1.StoreContext === null || store_context_1.StoreContext === void 0 ? void 0 : store_context_1.StoreContext.currentContext) === null || _a === void 0 ? void 0 : _a.context;
            const spanName = name || `${target.constructor.name}.${propertyKey}`;
            return tracer.startActiveSpan(spanName, {}, parentCtx, (span) => {
                // const span = tracer.startSpan(spanName, undefined, parentCtx);
                span.setAttributes(attributes);
                if (originalFunction.constructor.name === 'AsyncFunction') {
                    return originalFunction
                        .apply(this, args)
                        .catch((error) => {
                        recordException(span, error);
                        // Throw error to propagate it further
                        throw error;
                    })
                        .finally(() => {
                        span.end();
                    });
                }
                try {
                    return originalFunction.apply(this, args);
                }
                catch (error) {
                    recordException(span, error);
                    // Throw error to propagate it further
                    throw error;
                }
                finally {
                    span.end();
                }
            });
        };
        // eslint-disable-next-line no-param-reassign
        propertyDescriptor.value = wrappedFunction;
        (0, utils_1.copyMetadataFromFunctionToFunction)(originalFunction, wrappedFunction);
    };
}
exports.Span = Span;


/***/ }),

/***/ "./libs/instrumentation/src/graphql/enums/attribute-name.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeNames = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["COMPONENT"] = "graphql";
    AttributeNames["SOURCE"] = "graphql.source";
    AttributeNames["FIELD_NAME"] = "graphql.field.name";
    AttributeNames["FIELD_PATH"] = "graphql.field.path";
    AttributeNames["FIELD_TYPE"] = "graphql.field.type";
    AttributeNames["OPERATION_TYPE"] = "graphql.operation.type";
    AttributeNames["OPERATION_NAME"] = "graphql.operation.name";
    AttributeNames["VARIABLES"] = "graphql.variables.";
    AttributeNames["ERROR_VALIDATION_NAME"] = "graphql.validation.error";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {}));


/***/ }),

/***/ "./libs/instrumentation/src/graphql/enums/enum.ts":
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpanNames = exports.TokenKind = exports.AllowedOperationTypes = void 0;
var AllowedOperationTypes;
(function (AllowedOperationTypes) {
    AllowedOperationTypes["QUERY"] = "query";
    AllowedOperationTypes["MUTATION"] = "mutation";
    AllowedOperationTypes["SUBSCRIPTION"] = "subscription";
})(AllowedOperationTypes = exports.AllowedOperationTypes || (exports.AllowedOperationTypes = {}));
var TokenKind;
(function (TokenKind) {
    TokenKind["SOF"] = "<SOF>";
    TokenKind["EOF"] = "<EOF>";
    TokenKind["BANG"] = "!";
    TokenKind["DOLLAR"] = "$";
    TokenKind["AMP"] = "&";
    TokenKind["PAREN_L"] = "(";
    TokenKind["PAREN_R"] = ")";
    TokenKind["SPREAD"] = "...";
    TokenKind["COLON"] = ":";
    TokenKind["EQUALS"] = "=";
    TokenKind["AT"] = "@";
    TokenKind["BRACKET_L"] = "[";
    TokenKind["BRACKET_R"] = "]";
    TokenKind["BRACE_L"] = "{";
    TokenKind["PIPE"] = "|";
    TokenKind["BRACE_R"] = "}";
    TokenKind["NAME"] = "Name";
    TokenKind["INT"] = "Int";
    TokenKind["FLOAT"] = "Float";
    TokenKind["STRING"] = "String";
    TokenKind["BLOCK_STRING"] = "BlockString";
    TokenKind["COMMENT"] = "Comment";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
var SpanNames;
(function (SpanNames) {
    SpanNames["EXECUTE"] = "graphql.execute";
    SpanNames["PARSE"] = "graphql.parse";
    SpanNames["RESOLVE"] = "graphql.resolve";
    SpanNames["VALIDATE"] = "graphql.validate";
    SpanNames["SCHEMA_VALIDATE"] = "graphql.validateSchema";
    SpanNames["SCHEMA_PARSE"] = "graphql.parseSchema";
})(SpanNames = exports.SpanNames || (exports.SpanNames = {}));


/***/ }),

/***/ "./libs/instrumentation/src/graphql/enums/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OTEL_GRAPHQL_DATA_SYMBOL = exports.OTEL_PATCHED_SYMBOL = void 0;
exports.OTEL_PATCHED_SYMBOL = Symbol.for('opentelemetry.patched');
exports.OTEL_GRAPHQL_DATA_SYMBOL = Symbol.for('opentelemetry.graphql_data');


/***/ }),

/***/ "./libs/instrumentation/src/graphql/enums/types.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OPERATION_NOT_SUPPORTED = void 0;
const symbols_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/symbols.ts");
exports.OPERATION_NOT_SUPPORTED = 'Operation$operationName$not' + ' supported';


/***/ }),

/***/ "./libs/instrumentation/src/graphql/instrumentation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphQLInstrumentation = void 0;
const tslib_1 = __webpack_require__("tslib");
const api_1 = __webpack_require__("@opentelemetry/api");
const instrumentation_1 = __webpack_require__("@opentelemetry/instrumentation");
const enum_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/enum.ts");
const attribute_name_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/attribute-name.ts");
const symbols_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/symbols.ts");
const types_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/types.ts");
const utils_1 = __webpack_require__("./libs/instrumentation/src/graphql/utils.ts");
const version_1 = __webpack_require__("./libs/instrumentation/src/graphql/version.ts");
const api = (0, tslib_1.__importStar)(__webpack_require__("@opentelemetry/api"));
const DEFAULT_CONFIG = {
    mergeItems: false,
    depth: -1,
    allowValues: false,
};
const supportedVersions = ['>=14'];
class GraphQLInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}) {
        super('@opentelemetry/instrumentation', version_1.VERSION, Object.assign({}, DEFAULT_CONFIG, config));
    }
    _getConfig() {
        return this._config;
    }
    setConfig(config = {}) {
        this._config = Object.assign({}, DEFAULT_CONFIG, config);
    }
    init() {
        console.log('init grapqhl instrument');
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition('graphql', supportedVersions);
        module.files.push(this._addPatchingExecute());
        module.files.push(this._addPatchingParser());
        module.files.push(this._addPatchingValidate());
        return module;
    }
    _addPatchingExecute() {
        console.log('add patching grapqhl');
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/execution/execute.js', supportedVersions, 
        // cannot make it work with appropriate type as execute function has 2
        //types and/cannot import function but only types
        (moduleExports) => {
            if ((0, instrumentation_1.isWrapped)(moduleExports.execute)) {
                this._unwrap(moduleExports, 'execute');
            }
            this._wrap(moduleExports, 'execute', this._patchExecute(moduleExports.defaultFieldResolver));
            return moduleExports;
        }, (moduleExports) => {
            if (moduleExports) {
                this._unwrap(moduleExports, 'execute');
            }
        });
    }
    _addPatchingParser() {
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/language/parser.js', supportedVersions, (moduleExports) => {
            if ((0, instrumentation_1.isWrapped)(moduleExports.execute)) {
                this._unwrap(moduleExports, 'parse');
            }
            this._wrap(moduleExports, 'parse', this._patchParse());
            return moduleExports;
        }, (moduleExports) => {
            if (moduleExports) {
                this._unwrap(moduleExports, 'parse');
            }
        });
    }
    _addPatchingValidate() {
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/validation/validate.js', supportedVersions, (moduleExports) => {
            if ((0, instrumentation_1.isWrapped)(moduleExports.execute)) {
                this._unwrap(moduleExports, 'validate');
            }
            this._wrap(moduleExports, 'validate', this._patchValidate());
            return moduleExports;
        }, (moduleExports) => {
            if (moduleExports) {
                this._unwrap(moduleExports, 'validate');
            }
        });
    }
    _patchExecute(defaultFieldResolved) {
        console.log('execute grapqhl');
        const instrumentation = this;
        return function execute(original) {
            return function patchExecute() {
                let processedArgs;
                // case when apollo server is used for example
                if (arguments.length >= 2) {
                    const args = arguments;
                    processedArgs = instrumentation._wrapExecuteArgs(args[0], args[1], args[2], args[3], args[4], args[5], args[6] || defaultFieldResolved, args[7]);
                }
                else {
                    const args = arguments[0];
                    processedArgs = instrumentation._wrapExecuteArgs(args.schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver || defaultFieldResolved, args.typeResolver);
                }
                const operation = (0, utils_1.getOperation)(processedArgs.document, processedArgs.operationName);
                const httpSpan = api_1.trace.getSpan(api_1.context.active());
                if (httpSpan) {
                    const operationDefinition = operation;
                    httpSpan.setAttributes({
                        type: 'graphql',
                    });
                    httpSpan.updateName(`gql-${operationDefinition.operation}-${operationDefinition.name.value.toLowerCase()}`);
                }
                const span = instrumentation._createExecuteSpan(operation, processedArgs);
                processedArgs.contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL] = {
                    source: processedArgs.document
                        ? processedArgs.document ||
                            processedArgs.document[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL]
                        : undefined,
                    span,
                    fields: {},
                };
                return api_1.context.with(api_1.context.active(), () => {
                    return (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
                        return original.apply(this, [processedArgs]);
                    }, (err, result) => {
                        instrumentation._handleExecutionResult(span, err, result);
                    });
                });
            };
        };
    }
    _handleExecutionResult(span, err, result) {
        const config = this._getConfig();
        if (result === undefined || err) {
            (0, utils_1.endSpan)(span, err);
            return;
        }
        if (result.constructor.name === 'Promise') {
            result.then((resultData) => {
                if (typeof config.responseHook !== 'function') {
                    (0, utils_1.endSpan)(span);
                    return;
                }
                this._executeResponseHook(span, resultData);
            });
        }
        else {
            if (typeof config.responseHook !== 'function') {
                (0, utils_1.endSpan)(span);
                return;
            }
            this._executeResponseHook(span, result);
        }
    }
    _executeResponseHook(span, result) {
        const config = this._getConfig();
        (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
            config.responseHook(span, result);
        }, (err) => {
            if (err) {
                api.diag.error('Error running response hook', err);
            }
            (0, utils_1.endSpan)(span, undefined);
        }, true);
    }
    _patchParse() {
        const instrumentation = this;
        return function parse(original) {
            return function patchParse(source, options) {
                return instrumentation._parse(this, original, source, options);
            };
        };
    }
    _patchValidate() {
        const instrumentation = this;
        return function validate(original) {
            return function patchValidate(schema, documentAST, rules, typeInfo, options) {
                return instrumentation._validate(this, original, schema, documentAST, rules, typeInfo, options);
            };
        };
    }
    _parse(obj, original, source, options) {
        const config = this._getConfig();
        const span = this.tracer.startSpan(enum_1.SpanNames.PARSE);
        return api_1.context.with(api_1.context.active(), () => {
            return (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
                return original.call(obj, source, options);
            }, (err, result) => {
                if (result) {
                    const operation = (0, utils_1.getOperation)(result);
                    if (!operation) {
                        span.updateName(enum_1.SpanNames.SCHEMA_PARSE);
                    }
                    else if (result.loc) {
                        (0, utils_1.addSpanSource)(span, result.loc, config.allowValues);
                    }
                }
                (0, utils_1.endSpan)(span, err);
            });
        });
    }
    _validate(obj, original, schema, documentAST, rules, typeInfo, options) {
        const span = this.tracer.startSpan(enum_1.SpanNames.VALIDATE, {});
        return api_1.context.with(api_1.context.active(), () => {
            return (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
                return original.call(obj, schema, documentAST, rules, typeInfo, options);
            }, (err, errors) => {
                if (!documentAST.loc) {
                    span.updateName(enum_1.SpanNames.SCHEMA_VALIDATE);
                }
                if (errors && errors.length) {
                    span.recordException({
                        name: attribute_name_1.AttributeNames.ERROR_VALIDATION_NAME,
                        message: JSON.stringify(errors),
                    });
                }
                (0, utils_1.endSpan)(span, err);
            });
        });
    }
    _createExecuteSpan(operation, processedArgs) {
        var _a;
        const config = this._getConfig();
        const span = this.tracer.startSpan(enum_1.SpanNames.EXECUTE, {
        // attributes: {
        //   component: 'graphql',
        // },
        });
        if (operation) {
            const operationDefinition = operation;
            span.setAttribute(attribute_name_1.AttributeNames.OPERATION_TYPE, operationDefinition.operation);
            if (operationDefinition.name) {
                span.setAttribute(attribute_name_1.AttributeNames.OPERATION_NAME, operationDefinition.name.value);
            }
        }
        else {
            let operationName = ' ';
            if (processedArgs.operationName) {
                operationName = ` "${processedArgs.operationName}" `;
            }
            operationName = types_1.OPERATION_NOT_SUPPORTED.replace('$operationName$', operationName);
            span.setAttribute(attribute_name_1.AttributeNames.OPERATION_NAME, operationName);
        }
        if ((_a = processedArgs.document) === null || _a === void 0 ? void 0 : _a.loc) {
            (0, utils_1.addSpanSource)(span, processedArgs.document.loc, config.allowValues);
        }
        if (processedArgs.variableValues && config.allowValues) {
            (0, utils_1.addInputVariableAttributes)(span, processedArgs.variableValues);
        }
        return span;
    }
    _wrapExecuteArgs(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
        if (!contextValue) {
            contextValue = {};
        }
        if (contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL]) {
            return {
                schema,
                document,
                rootValue,
                contextValue,
                variableValues,
                operationName,
                fieldResolver,
                typeResolver,
            };
        }
        fieldResolver = (0, utils_1.wrapFieldResolver)(this.tracer, this._getConfig.bind(this), fieldResolver);
        if (schema) {
            (0, utils_1.wrapFields)(schema.getQueryType(), this.tracer, this._getConfig.bind(this));
            (0, utils_1.wrapFields)(schema.getMutationType(), this.tracer, this._getConfig.bind(this));
        }
        return {
            schema,
            document,
            rootValue,
            contextValue,
            variableValues,
            operationName,
            fieldResolver,
            typeResolver,
        };
    }
}
exports.GraphQLInstrumentation = GraphQLInstrumentation;


/***/ }),

/***/ "./libs/instrumentation/src/graphql/utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapFieldResolver = exports.wrapFields = exports.getSourceFromLocation = exports.getOperation = exports.endSpan = exports.addSpanSource = exports.addInputVariableAttributes = void 0;
const tslib_1 = __webpack_require__("tslib");
const api = (0, tslib_1.__importStar)(__webpack_require__("@opentelemetry/api"));
const enum_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/enum.ts");
const attribute_name_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/attribute-name.ts");
const symbols_1 = __webpack_require__("./libs/instrumentation/src/graphql/enums/symbols.ts");
const OPERATION_VALUES = Object.values(enum_1.AllowedOperationTypes);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addInputVariableAttribute(span, key, variable) {
    if (Array.isArray(variable)) {
        variable.forEach((value, idx) => {
            addInputVariableAttribute(span, `${key}.${idx}`, value);
        });
    }
    else if (variable instanceof Object) {
        Object.entries(variable).forEach(([nestedKey, value]) => {
            addInputVariableAttribute(span, `${key}.${nestedKey}`, value);
        });
    }
    else {
        span.setAttribute(`${attribute_name_1.AttributeNames.VARIABLES}${String(key)}`, variable);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addInputVariableAttributes(span, variableValues) {
    Object.entries(variableValues).forEach(([key, value]) => {
        addInputVariableAttribute(span, key, value);
    });
}
exports.addInputVariableAttributes = addInputVariableAttributes;
function addSpanSource(span, loc, allowValues, start, end) {
    const source = getSourceFromLocation(loc, allowValues, start, end);
    span.setAttribute(attribute_name_1.AttributeNames.SOURCE, source);
}
exports.addSpanSource = addSpanSource;
function createFieldIfNotExists(tracer, getConfig, contextValue, info, path) {
    let field = getField(contextValue, path);
    let spanAdded = false;
    if (!field) {
        spanAdded = true;
        const parent = getParentField(contextValue, path);
        field = {
            parent,
            span: createResolverSpan(tracer, getConfig, contextValue, info, path, parent.span),
            error: null,
        };
        addField(contextValue, path, field);
    }
    return { spanAdded, field };
}
function createResolverSpan(tracer, getConfig, contextValue, info, path, parentSpan) {
    var _a, _b;
    const attributes = {
        [attribute_name_1.AttributeNames.FIELD_NAME]: info.fieldName,
        [attribute_name_1.AttributeNames.FIELD_PATH]: path.join('.'),
        [attribute_name_1.AttributeNames.FIELD_TYPE]: info.returnType.toString(),
    };
    const span = tracer.startSpan(enum_1.SpanNames.RESOLVE, {
        attributes,
    }, parentSpan ? api.trace.setSpan(api.context.active(), parentSpan) : undefined);
    const document = contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].source;
    const fieldNode = info.fieldNodes.find((fieldNode) => fieldNode.kind === 'Field');
    if (fieldNode) {
        addSpanSource(span, document.loc, getConfig().allowValues, (_a = fieldNode.loc) === null || _a === void 0 ? void 0 : _a.start, (_b = fieldNode.loc) === null || _b === void 0 ? void 0 : _b.end);
    }
    return span;
}
function endSpan(span, error) {
    if (error) {
        span.recordException(error);
    }
    span.end();
}
exports.endSpan = endSpan;
function getOperation(document, operationName) {
    if (!document || !Array.isArray(document.definitions)) {
        return undefined;
    }
    if (operationName) {
        return document.definitions
            .filter((definition) => { var _a; return OPERATION_VALUES.indexOf((_a = definition) === null || _a === void 0 ? void 0 : _a.operation) !== -1; })
            .find((definition) => { var _a, _b; return operationName === ((_b = (_a = definition) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.value); });
    }
    else {
        return document.definitions.find((definition) => { var _a; return OPERATION_VALUES.indexOf((_a = definition) === null || _a === void 0 ? void 0 : _a.operation) !== -1; });
    }
}
exports.getOperation = getOperation;
function addField(contextValue, path, field) {
    return (contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join('.')] = field);
}
function getField(contextValue, path) {
    return contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join('.')];
}
function getParentField(contextValue, path) {
    for (let i = path.length - 1; i > 0; i--) {
        const field = getField(contextValue, path.slice(0, i));
        if (field) {
            return field;
        }
    }
    return {
        span: contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].span,
    };
}
function pathToArray(mergeItems, path) {
    const flattened = [];
    let curr = path;
    while (curr) {
        let key = curr.key;
        if (mergeItems && typeof key === 'number') {
            key = '*';
        }
        flattened.push(String(key));
        curr = curr.prev;
    }
    return flattened.reverse();
}
function repeatBreak(i) {
    return repeatChar('\n', i);
}
function repeatSpace(i) {
    return repeatChar(' ', i);
}
function repeatChar(char, to) {
    let text = '';
    for (let i = 0; i < to; i++) {
        text += char;
    }
    return text;
}
const KindsToBeRemoved = [
    enum_1.TokenKind.FLOAT,
    enum_1.TokenKind.STRING,
    enum_1.TokenKind.INT,
    enum_1.TokenKind.BLOCK_STRING,
];
function getSourceFromLocation(loc, allowValues = false, inputStart, inputEnd) {
    var _a, _b;
    let source = '';
    if (loc === null || loc === void 0 ? void 0 : loc.startToken) {
        const start = typeof inputStart === 'number' ? inputStart : loc.start;
        const end = typeof inputEnd === 'number' ? inputEnd : loc.end;
        let next = loc.startToken.next;
        let previousLine = 1;
        while (next) {
            if (next.start < start) {
                next = next.next;
                previousLine = next === null || next === void 0 ? void 0 : next.line;
                continue;
            }
            if (next.end > end) {
                next = next.next;
                previousLine = next === null || next === void 0 ? void 0 : next.line;
                continue;
            }
            let value = next.value || next.kind;
            let space = '';
            if (!allowValues && KindsToBeRemoved.indexOf(next.kind) >= 0) {
                // value = repeatChar('*', value.length);
                value = '*';
            }
            if (next.kind === enum_1.TokenKind.STRING) {
                value = `"${value}"`;
            }
            if (next.kind === enum_1.TokenKind.EOF) {
                value = '';
            }
            if (next.line > previousLine) {
                source += repeatBreak(next.line - previousLine);
                previousLine = next.line;
                space = repeatSpace(next.column - 1);
            }
            else {
                if (next.line === ((_a = next.prev) === null || _a === void 0 ? void 0 : _a.line)) {
                    space = repeatSpace(next.start - (((_b = next.prev) === null || _b === void 0 ? void 0 : _b.end) || 0));
                }
            }
            source += space + value;
            if (next) {
                next = next.next;
            }
        }
    }
    return source;
}
exports.getSourceFromLocation = getSourceFromLocation;
function wrapFields(type, tracer, getConfig) {
    if (!type || typeof type.getFields !== 'function' || type[symbols_1.OTEL_PATCHED_SYMBOL]) {
        return;
    }
    const fields = type.getFields();
    type[symbols_1.OTEL_PATCHED_SYMBOL] = true;
    Object.keys(fields).forEach((key) => {
        const field = fields[key];
        if (!field) {
            return;
        }
        if (field.resolve) {
            field.resolve = wrapFieldResolver(tracer, getConfig, field.resolve);
        }
        if (field.type) {
            let unwrappedType = field.type;
            while (unwrappedType.ofType) {
                unwrappedType = unwrappedType.ofType;
            }
            wrapFields(unwrappedType, tracer, getConfig);
        }
    });
}
exports.wrapFields = wrapFields;
function wrapFieldResolver(tracer, getConfig, fieldResolver) {
    if (wrappedFieldResolver[symbols_1.OTEL_PATCHED_SYMBOL] ||
        typeof fieldResolver !== 'function') {
        return fieldResolver;
    }
    function wrappedFieldResolver(source, args, contextValue, info) {
        if (!fieldResolver) {
            return undefined;
        }
        const config = getConfig();
        if (!contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL]) {
            return fieldResolver.call(this, source, args, contextValue, info);
        }
        const path = pathToArray(config.mergeItems, info && info.path);
        const depth = path.filter((item) => typeof item === 'string').length;
        let field;
        let shouldEndSpan = false;
        if (config.depth >= 0 && config.depth < depth) {
            field = getParentField(contextValue, path);
        }
        else {
            const newField = createFieldIfNotExists(tracer, getConfig, contextValue, info, path);
            field = newField.field;
            shouldEndSpan = newField.spanAdded;
        }
        return api.context.with(api.trace.setSpan(api.context.active(), field.span), () => {
            return safeExecuteInTheMiddleAsync(() => {
                return fieldResolver.call(this, source, args, contextValue, info);
            }, (err) => {
                if (shouldEndSpan) {
                    endSpan(field.span, err);
                }
            });
        });
    }
    wrappedFieldResolver[symbols_1.OTEL_PATCHED_SYMBOL] = true;
    return wrappedFieldResolver;
}
exports.wrapFieldResolver = wrapFieldResolver;
/**
 * Async version of safeExecuteInTheMiddle from instrumentation package
 * can be removed once this will be added to instrumentation package
 * @param execute
 * @param onFinish
 * @param preventThrowingError
 */
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        let error;
        let result;
        try {
            result = yield execute();
        }
        catch (e) {
            error = e;
        }
        finally {
            onFinish(error, result);
            if (error && !preventThrowingError) {
                // eslint-disable-next-line no-unsafe-finally
                throw error;
            }
            // eslint-disable-next-line no-unsafe-finally
            return result;
        }
    });
}


/***/ }),

/***/ "./libs/instrumentation/src/graphql/version.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION = void 0;
exports.VERSION = '2.2.2';


/***/ }),

/***/ "./libs/instrumentation/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/graphql/instrumentation.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/nestjs-core/instrumentation.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/RpcContextPropagator.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/trace/trace-client.proxy.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/trace/trace.interceptor.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/mongoose/src/index.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/trace/store-context.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/decorator/span.decorator.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/trace/query-to-path.ts"), exports);


/***/ }),

/***/ "./libs/instrumentation/src/mongoose/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/mongoose/src/mongoose.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/instrumentation/src/mongoose/src/types.ts"), exports);


/***/ }),

/***/ "./libs/instrumentation/src/mongoose/src/mongoose.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongooseInstrumentation = exports._STORED_PARENT_SPAN = void 0;
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-this-alias */
const api_1 = __webpack_require__("@opentelemetry/api");
const core_1 = __webpack_require__("@opentelemetry/core");
const utils_1 = __webpack_require__("./libs/instrumentation/src/mongoose/src/utils.ts");
const instrumentation_1 = __webpack_require__("@opentelemetry/instrumentation");
const version_1 = __webpack_require__("./libs/instrumentation/src/mongoose/src/version.ts");
const semantic_conventions_1 = __webpack_require__("@opentelemetry/semantic-conventions");
const contextCaptureFunctions = [
    'remove',
    'deleteOne',
    'deleteMany',
    'find',
    'findOne',
    'estimatedDocumentCount',
    'countDocuments',
    'count',
    'distinct',
    'where',
    '$where',
    'findOneAndUpdate',
    'findOneAndDelete',
    'findOneAndReplace',
    'findOneAndRemove',
];
// when mongoose functions are called, we store the original call context
// and then set it as the parent for the spans created by Query/Aggregate exec()
// calls. this bypass the unlinked spans issue on thenables await operations.
exports._STORED_PARENT_SPAN = Symbol('stored-parent-span');
class MongooseInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}) {
        super('opentelemetry-instrumentation-mongoose', version_1.VERSION, Object.assign({}, config));
        // According to specification, statement is not set by default on mongodb spans.
        if (!config.dbStatementSerializer)
            this._config.dbStatementSerializer = () => undefined;
    }
    setConfig(config = {}) {
        this._config = Object.assign({}, config);
        if (!config.dbStatementSerializer)
            this._config.dbStatementSerializer = () => undefined;
    }
    init() {
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition(MongooseInstrumentation.component, ['*'], this.patch.bind(this), this.unpatch.bind(this));
        return module;
    }
    patch(moduleExports, moduleVersion) {
        api_1.diag.debug('mongoose instrumentation: patching');
        this.moduleVersion = moduleVersion;
        this._wrap(moduleExports.Model.prototype, 'save', this.patchOnModelMethods('save'));
        this._wrap(moduleExports.Model.prototype, 'remove', this.patchOnModelMethods('remove'));
        this._wrap(moduleExports.Query.prototype, 'exec', this.patchQueryExec());
        this._wrap(moduleExports.Aggregate.prototype, 'exec', this.patchAggregateExec());
        contextCaptureFunctions.forEach((funcName) => {
            this._wrap(moduleExports.Query.prototype, funcName, this.patchAndCaptureSpanContext(funcName));
        });
        this._wrap(moduleExports.Model, 'aggregate', this.patchModelAggregate());
        return moduleExports;
    }
    unpatch(moduleExports) {
        api_1.diag.debug('mongoose instrumentation: unpatch mongoose');
        this._unwrap(moduleExports.Model.prototype, 'save');
        this._unwrap(moduleExports.Model.prototype, 'remove');
        this._unwrap(moduleExports.Query.prototype, 'exec');
        this._unwrap(moduleExports.Aggregate.prototype, 'exec');
        contextCaptureFunctions.forEach((funcName) => {
            this._unwrap(moduleExports.Query.prototype, funcName);
        });
        this._unwrap(moduleExports.Model, 'aggregate');
    }
    patchAggregateExec() {
        const self = this;
        api_1.diag.debug('mongoose instrumentation: patched mongoose Aggregate exec prototype');
        return (originalAggregate) => {
            return function exec(callback) {
                var _a;
                if (self._config.requireParentSpan &&
                    api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalAggregate.apply(this, arguments);
                }
                const parentSpan = this[exports._STORED_PARENT_SPAN];
                const attributes = {
                    [semantic_conventions_1.SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer('aggregate', {
                        options: this.options,
                        aggregatePipeline: this._pipeline,
                    }),
                };
                const span = (0, utils_1.startSpan)({
                    tracer: self.tracer,
                    modelName: (_a = this._model) === null || _a === void 0 ? void 0 : _a.modelName,
                    operation: 'aggregate',
                    attributes,
                    collection: this._model.collection,
                    parentSpan,
                });
                self._addModuleVersionIfNeeded(span);
                return self._handleResponse(span, originalAggregate, this, arguments, callback);
            };
        };
    }
    patchQueryExec() {
        const self = this;
        api_1.diag.debug('mongoose instrumentation: patched mongoose Query exec prototype');
        return (originalExec) => {
            return function exec(callback) {
                if (self._config.requireParentSpan &&
                    api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalExec.apply(this, arguments);
                }
                const parentSpan = this[exports._STORED_PARENT_SPAN];
                const attributes = {
                    [semantic_conventions_1.SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer(this.op, {
                        condition: this._conditions,
                        updates: this._update,
                        options: this.options,
                        fields: this._fields,
                    }),
                };
                const span = (0, utils_1.startSpan)({
                    tracer: self.tracer,
                    modelName: this.model.modelName,
                    operation: this.op,
                    attributes,
                    parentSpan,
                    collection: this.mongooseCollection,
                });
                self._addModuleVersionIfNeeded(span);
                return self._handleResponse(span, originalExec, this, arguments, callback);
            };
        };
    }
    patchOnModelMethods(op) {
        const self = this;
        api_1.diag.debug(`mongoose instrumentation: patched mongoose Model ${op} prototype`);
        return (originalOnModelFunction) => {
            return function method(options, callback) {
                if (self._config.requireParentSpan &&
                    api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalOnModelFunction.apply(this, arguments);
                }
                const serializePayload = { document: this };
                if (options && !(options instanceof Function)) {
                    serializePayload.options = options;
                }
                const parentSpan = this[exports._STORED_PARENT_SPAN];
                const attributes = {
                    [semantic_conventions_1.SemanticAttributes.DB_STATEMENT]: self._config.dbStatementSerializer(op, serializePayload),
                };
                const span = (0, utils_1.startSpan)({
                    tracer: self.tracer,
                    modelName: this.constructor.modelName,
                    operation: op,
                    attributes,
                    parentSpan,
                    collection: this.constructor.collection,
                });
                self._addModuleVersionIfNeeded(span);
                if (options instanceof Function) {
                    callback = options;
                    options = undefined;
                }
                return self._handleResponse(span, originalOnModelFunction, this, arguments, callback);
            };
        };
    }
    // we want to capture the otel span on the object which is calling exec.
    // in the special case of aggregate, we need have no function to path
    // on the Aggregate object to capture the context on, so we patch
    // the aggregate of Model, and set the context on the Aggregate object
    patchModelAggregate() {
        const self = this;
        api_1.diag.debug(`mongoose instrumentation: patched mongoose model aggregate`);
        return (original) => {
            return function captureSpanContext() {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const aggregate = self._callOriginalFunction(() => original.apply(this, arguments));
                if (aggregate)
                    aggregate[exports._STORED_PARENT_SPAN] = currentSpan;
                return aggregate;
            };
        };
    }
    patchAndCaptureSpanContext(funcName) {
        const self = this;
        api_1.diag.debug(`mongoose instrumentation: patched mongoose query ${funcName} prototype`);
        return (original) => {
            return function captureSpanContext() {
                this[exports._STORED_PARENT_SPAN] = api_1.trace.getSpan(api_1.context.active());
                return self._callOriginalFunction(() => original.apply(this, arguments));
            };
        };
    }
    _handleResponse(span, exec, originalThis, args, callback) {
        const self = this;
        if (callback instanceof Function) {
            return self._callOriginalFunction(() => (0, utils_1.handleCallbackResponse)(callback, exec, originalThis, span, self._config.responseHook));
        }
        else {
            const response = self._callOriginalFunction(() => exec.apply(originalThis, args));
            return (0, utils_1.handlePromiseResponse)(response, span, self._config.responseHook);
        }
    }
    _callOriginalFunction(originalFunction) {
        var _a;
        if ((_a = this._config) === null || _a === void 0 ? void 0 : _a.suppressInternalInstrumentation) {
            return api_1.context.with((0, core_1.suppressTracing)(api_1.context.active()), originalFunction);
        }
        else {
            return originalFunction();
        }
    }
    _addModuleVersionIfNeeded(span) {
        if (this._config.moduleVersionAttributeName) {
            span.setAttribute(this._config.moduleVersionAttributeName, this.moduleVersion);
        }
    }
}
exports.MongooseInstrumentation = MongooseInstrumentation;
MongooseInstrumentation.component = 'mongoose';


/***/ }),

/***/ "./libs/instrumentation/src/mongoose/src/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/instrumentation/src/mongoose/src/utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleCallbackResponse = exports.handlePromiseResponse = exports.startSpan = void 0;
const api_1 = __webpack_require__("@opentelemetry/api");
const instrumentation_1 = __webpack_require__("@opentelemetry/instrumentation");
const semantic_conventions_1 = __webpack_require__("@opentelemetry/semantic-conventions");
function getAttributesFromCollection(collection) {
    return {
        [semantic_conventions_1.SemanticAttributes.DB_MONGODB_COLLECTION]: collection.name,
        [semantic_conventions_1.SemanticAttributes.DB_NAME]: collection.conn.name,
        [semantic_conventions_1.SemanticAttributes.DB_USER]: collection.conn.user,
        [semantic_conventions_1.SemanticAttributes.NET_PEER_NAME]: collection.conn.host,
        [semantic_conventions_1.SemanticAttributes.NET_PEER_PORT]: collection.conn.port,
        [semantic_conventions_1.SemanticAttributes.NET_TRANSPORT]: 'IP.TCP', // Always true in mongodb
    };
}
function startSpan({ tracer, collection, modelName, operation, attributes, parentSpan, }) {
    console.log('currentspan', api_1.trace.getSpan(api_1.context.active()));
    return tracer.startSpan(`mongoose.${modelName}.${operation}`, {
        kind: api_1.SpanKind.CLIENT,
        attributes: Object.assign(Object.assign(Object.assign({}, attributes), getAttributesFromCollection(collection)), { [semantic_conventions_1.SemanticAttributes.DB_OPERATION]: operation, [semantic_conventions_1.SemanticAttributes.DB_SYSTEM]: 'mongodb' }),
    }, parentSpan ? api_1.trace.setSpan(api_1.context.active(), parentSpan) : undefined);
}
exports.startSpan = startSpan;
// ===== End Span Utils =====
function setErrorStatus(span, error = {}) {
    span.recordException(error);
    span.setStatus({
        code: api_1.SpanStatusCode.ERROR,
        message: `${error.message} ${error.code ? `\nMongo Error Code: ${error.code}` : ''}`,
    });
}
function applyResponseHook(span, response, responseHook) {
    if (responseHook) {
        (0, instrumentation_1.safeExecuteInTheMiddle)(() => responseHook(span, response), (e) => {
            if (e) {
                api_1.diag.error('mongoose instrumentation: responseHook error', e);
            }
        }, true);
    }
}
function handlePromiseResponse(execResponse, span, responseHook) {
    if (!(execResponse instanceof Promise)) {
        applyResponseHook(span, execResponse, responseHook);
        span.end();
        return execResponse;
    }
    return execResponse
        .then((response) => {
        applyResponseHook(span, response, responseHook);
        return response;
    })
        .catch((err) => {
        setErrorStatus(span, err);
        throw err;
    })
        .finally(() => span.end());
}
exports.handlePromiseResponse = handlePromiseResponse;
function handleCallbackResponse(callback, exec, originalThis, span, responseHook) {
    return exec.apply(originalThis, [
        (err, response) => {
            err ? setErrorStatus(span, err) : applyResponseHook(span, response, responseHook);
            span.end();
            return callback(err, response);
        },
    ]);
}
exports.handleCallbackResponse = handleCallbackResponse;


/***/ }),

/***/ "./libs/instrumentation/src/mongoose/src/version.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.28.0';


/***/ }),

/***/ "./libs/instrumentation/src/nestjs-core/enums/attribute-name.ts":
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeNames = void 0;
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["VERSION"] = "nestjs.version";
    AttributeNames["TYPE"] = "nestjs.type";
    AttributeNames["MODULE"] = "nestjs.module";
    AttributeNames["CONTROLLER"] = "nestjs.controller";
    AttributeNames["CALLBACK"] = "nestjs.callback";
    AttributeNames["PIPES"] = "nestjs.pipes";
    AttributeNames["INTERCEPTORS"] = "nestjs.interceptors";
    AttributeNames["GUARDS"] = "nestjs.guards";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {}));


/***/ }),

/***/ "./libs/instrumentation/src/nestjs-core/enums/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NestType = exports.AttributeNames = void 0;
var attribute_name_1 = __webpack_require__("./libs/instrumentation/src/nestjs-core/enums/attribute-name.ts");
Object.defineProperty(exports, "AttributeNames", ({ enumerable: true, get: function () { return attribute_name_1.AttributeNames; } }));
var type_1 = __webpack_require__("./libs/instrumentation/src/nestjs-core/enums/type.ts");
Object.defineProperty(exports, "NestType", ({ enumerable: true, get: function () { return type_1.NestType; } }));


/***/ }),

/***/ "./libs/instrumentation/src/nestjs-core/enums/type.ts":
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NestType = void 0;
var NestType;
(function (NestType) {
    NestType["APP_CREATION"] = "app_creation";
    NestType["REQUEST_CONTEXT"] = "request_context";
    NestType["REQUEST_HANDLER"] = "handler";
})(NestType = exports.NestType || (exports.NestType = {}));


/***/ }),

/***/ "./libs/instrumentation/src/nestjs-core/instrumentation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/ban-types */
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NestInstrumentation = void 0;
const tslib_1 = __webpack_require__("tslib");
const api = (0, tslib_1.__importStar)(__webpack_require__("@opentelemetry/api"));
const instrumentation_1 = __webpack_require__("@opentelemetry/instrumentation");
const semantic_conventions_1 = __webpack_require__("@opentelemetry/semantic-conventions");
const version_1 = __webpack_require__("./libs/instrumentation/src/nestjs-core/version.ts");
const enums_1 = __webpack_require__("./libs/instrumentation/src/nestjs-core/enums/index.ts");
class NestInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}) {
        super('@opentelemetry/instrumentation-nestjs-core', version_1.VERSION);
    }
    init() {
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition(NestInstrumentation.COMPONENT, ['>=4.0.0'], (moduleExports, moduleVersion) => {
            this._diag.debug(`Patching ${NestInstrumentation.COMPONENT}@${moduleVersion}`);
            return moduleExports;
        }, (moduleExports, moduleVersion) => {
            this._diag.debug(`Unpatching ${NestInstrumentation.COMPONENT}@${moduleVersion}`);
            if (moduleExports === undefined)
                return;
        });
        module.files.push(this.getNestFactoryFileInstrumentation(['>=4.0.0']), this.getRouterExecutionContextFileInstrumentation(['>=4.0.0']));
        return module;
    }
    getNestFactoryFileInstrumentation(versions) {
        return new instrumentation_1.InstrumentationNodeModuleFile('@nestjs/core/nest-factory.js', versions, (NestFactoryStatic, moduleVersion) => {
            this.ensureWrapped(moduleVersion, NestFactoryStatic.NestFactoryStatic.prototype, 'create', createWrapNestFactoryCreate(this.tracer, moduleVersion));
            return NestFactoryStatic;
        }, (NestFactoryStatic) => {
            this._unwrap(NestFactoryStatic.NestFactoryStatic.prototype, 'create');
        });
    }
    getRouterExecutionContextFileInstrumentation(versions) {
        return new instrumentation_1.InstrumentationNodeModuleFile('@nestjs/core/router/router-execution-context.js', versions, (RouterExecutionContext, moduleVersion) => {
            this.ensureWrapped(moduleVersion, RouterExecutionContext.RouterExecutionContext.prototype, 'create', createWrapCreateHandler(this.tracer, moduleVersion));
            return RouterExecutionContext;
        }, (RouterExecutionContext) => {
            this._unwrap(RouterExecutionContext.RouterExecutionContext.prototype, 'create');
        });
    }
    ensureWrapped(moduleVersion, obj, methodName, wrapper) {
        this._diag.debug(`Applying ${methodName} patch for ${NestInstrumentation.COMPONENT}@${moduleVersion}`);
        if ((0, instrumentation_1.isWrapped)(obj[methodName])) {
            this._unwrap(obj, methodName);
        }
        this._wrap(obj, methodName, wrapper);
    }
}
exports.NestInstrumentation = NestInstrumentation;
NestInstrumentation.COMPONENT = '@nestjs/core';
NestInstrumentation.COMMON_ATTRIBUTES = {
    component: NestInstrumentation.COMPONENT,
};
function createWrapNestFactoryCreate(tracer, moduleVersion) {
    return function wrapCreate(original) {
        return function createWithTrace(nestModule) {
            const span = tracer.startSpan('Create Nest App', {
                attributes: Object.assign(Object.assign({}, NestInstrumentation.COMMON_ATTRIBUTES), { [enums_1.AttributeNames.TYPE]: enums_1.NestType.APP_CREATION, [enums_1.AttributeNames.VERSION]: moduleVersion, [enums_1.AttributeNames.MODULE]: nestModule.name }),
            });
            const spanContext = api.trace.setSpan(api.context.active(), span);
            return api.context.with(spanContext, () => (0, tslib_1.__awaiter)(this, arguments, void 0, function* () {
                try {
                    return yield original.apply(this, arguments);
                }
                catch (e) {
                    throw addError(span, e);
                }
                finally {
                    span.end();
                }
            }));
        };
    };
}
function createWrapCreateHandler(tracer, moduleVersion) {
    return function wrapCreateHandler(original) {
        return function createHandlerWithTrace(instance, callback) {
            arguments[1] = createWrapHandler(tracer, moduleVersion, callback);
            const handler = original.apply(this, arguments);
            const exceptionList = [];
            return function (req, res, next) {
                var _a;
                const callbackName = callback.name;
                const instanceName = instance.constructor && instance.constructor.name
                    ? instance.constructor.name
                    : 'UnnamedInstance';
                const spanName = callbackName ? `${instanceName}.${callbackName}` : instanceName;
                const span = tracer.startSpan(spanName, {
                    attributes: Object.assign(Object.assign({}, NestInstrumentation.COMMON_ATTRIBUTES), { [enums_1.AttributeNames.VERSION]: moduleVersion, [enums_1.AttributeNames.TYPE]: enums_1.NestType.REQUEST_CONTEXT, [semantic_conventions_1.SemanticAttributes.HTTP_METHOD]: req.method, [semantic_conventions_1.SemanticAttributes.HTTP_URL]: req.originalUrl || req.url, [semantic_conventions_1.SemanticAttributes.HTTP_ROUTE]: ((_a = req.route) === null || _a === void 0 ? void 0 : _a.path) || req.routerPath, [enums_1.AttributeNames.CONTROLLER]: instanceName, [enums_1.AttributeNames.CALLBACK]: callbackName }),
                });
                const spanContext = api.trace.setSpan(api.context.active(), span);
                return api.context.with(spanContext, () => (0, tslib_1.__awaiter)(this, arguments, void 0, function* () {
                    try {
                        return yield handler.apply(this, arguments);
                    }
                    finally {
                        span.end();
                    }
                }));
            };
        };
    };
}
function createWrapHandler(tracer, moduleVersion, handler) {
    const wrappedHandler = function () {
        const span = tracer.startSpan(handler.name || 'anonymous nest handler', {
            attributes: Object.assign(Object.assign({}, NestInstrumentation.COMMON_ATTRIBUTES), { [enums_1.AttributeNames.VERSION]: moduleVersion, [enums_1.AttributeNames.TYPE]: enums_1.NestType.REQUEST_HANDLER, [enums_1.AttributeNames.CALLBACK]: handler.name }),
        });
        const spanContext = api.trace.setSpan(api.context.active(), span);
        return api.context.with(spanContext, () => (0, tslib_1.__awaiter)(this, arguments, void 0, function* () {
            try {
                return yield handler.apply(this, arguments);
            }
            finally {
                span.end();
            }
        }));
    };
    if (handler.name) {
        Object.defineProperty(wrappedHandler, 'name', { value: handler.name });
    }
    // Get the current metadata and set onto the wrapper to ensure other decorators ( ie: NestJS EventPattern / RolesGuard )
    // won't be affected by the use of this instrumentation
    Reflect.getMetadataKeys(handler).forEach((metadataKey) => {
        Reflect.defineMetadata(metadataKey, Reflect.getMetadata(metadataKey, handler), wrappedHandler);
    });
    return wrappedHandler;
}
const addError = (span, error) => {
    span.recordException(error);
    span.setStatus({ code: api.SpanStatusCode.ERROR, message: error.message });
    return error;
};


/***/ }),

/***/ "./libs/instrumentation/src/nestjs-core/version.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION = void 0;
exports.VERSION = '2.2.2';


/***/ }),

/***/ "./libs/instrumentation/src/trace/query-to-path.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPaths = exports.getPathsFromAST = void 0;
const getPathsFromAST = (ast) => {
    return ast.definitions.map(walkDefinitions);
};
exports.getPathsFromAST = getPathsFromAST;
const walkDefinitions = (node) => {
    if (node.kind === 'OperationDefinition') {
        return node.selectionSet.selections.reduce(createReduceSelections('/'), []);
    }
};
const getPaths = (info) => {
    return info.operation.selectionSet.selections.reduce(createReduceSelections('/'), []);
};
exports.getPaths = getPaths;
const createReduceSelections = (parent) => (acc, curr) => {
    if (curr.kind === 'Field') {
        if (curr.selectionSet && curr.selectionSet.selections) {
            acc.push(parent + curr.name.value + '/');
            return curr.selectionSet.selections.reduce(createReduceSelections(parent + curr.name.value + '/'), acc);
        }
        else {
            acc.push(parent + curr.name.value);
            return acc;
        }
    }
    return acc;
};


/***/ }),

/***/ "./libs/instrumentation/src/trace/store-context.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreContext = void 0;
const async_hooks_1 = __webpack_require__("async_hooks");
class StoreContext {
    constructor(context) {
        this.context = context;
    }
    static get currentContext() {
        return this.cls.getStore();
    }
}
exports.StoreContext = StoreContext;
StoreContext.cls = new async_hooks_1.AsyncLocalStorage();


/***/ }),

/***/ "./libs/instrumentation/src/trace/trace-client.proxy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RPCTraceClientProxy = void 0;
const tslib_1 = __webpack_require__("tslib");
const rxjs_1 = __webpack_require__("rxjs");
const common_1 = __webpack_require__("@nestjs/common");
const api_1 = __webpack_require__("@opentelemetry/api");
let RPCTraceClientProxy = class RPCTraceClientProxy {
    send(client, pattern, payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const span = api_1.trace.getSpan(api_1.context.active());
            if (span === null || span === void 0 ? void 0 : span.spanContext()) {
                api_1.propagation.inject(api_1.context.active(), payload, api_1.defaultTextMapSetter);
            }
            try {
                const res = yield (0, rxjs_1.lastValueFrom)(client.send(pattern, payload));
                return res;
            }
            catch (error) {
                throw new common_1.BadRequestException(error);
            }
        });
    }
};
RPCTraceClientProxy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], RPCTraceClientProxy);
exports.RPCTraceClientProxy = RPCTraceClientProxy;


/***/ }),

/***/ "./libs/instrumentation/src/trace/trace.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TraceInterceptor_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const rxjs_1 = __webpack_require__("rxjs");
const api_1 = __webpack_require__("@opentelemetry/api");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const store_context_1 = __webpack_require__("./libs/instrumentation/src/trace/store-context.ts");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let TraceInterceptor = TraceInterceptor_1 = class TraceInterceptor {
    intercept(ctx, next) {
        const reflector = new core_1.Reflector();
        const except = reflector.get('ExceptTracerInterceptor', ctx.getHandler());
        if (except)
            return next.handle();
        const _logger = new common_1.Logger(TraceInterceptor_1.name);
        const tracer = api_1.trace.getTracer('default');
        if (!tracer)
            return next.handle();
        const getRPCSpan = (ctx) => {
            var _a;
            const rpcContext = ctx
                .switchToRpc()
                .getContext();
            const attributes = {};
            const methodKey = ctx.getHandler().name;
            let spanName = `rpc::${methodKey}`;
            if (rpcContext instanceof microservices_1.NatsContext) {
                attributes.type = 'nats';
                spanName = 'nats::' + rpcContext.getSubject();
            }
            const data = ctx.switchToRpc().getData();
            const parentCtx = api_1.propagation.extract(api_1.context.active(), data, api_1.defaultTextMapGetter);
            const currentSpan = (_a = api_1.trace.getSpan(api_1.context.active())) !== null && _a !== void 0 ? _a : tracer.startSpan(spanName, undefined, parentCtx);
            currentSpan.setAttributes(attributes);
            _logger.log(`traceid: ${currentSpan.spanContext().traceId}`);
            store_context_1.StoreContext.cls.enterWith(new store_context_1.StoreContext(parentCtx));
            return currentSpan;
        };
        const getHTTPSpan = (ctx) => {
            var _a;
            const req = ctx.switchToHttp().getRequest();
            // const res: ExpressRes = ctx.switchToHttp().getResponse();
            // ** instrumentation-http wll auto inject and extract parentCtx
            // const parentCtx = Array.isArray(req.headers.spanContext)
            //   ? req.headers.spanContext[0]
            //   : req.headers.spanContext;
            // const traceCtx = parentCtx
            //   ? trace.setSpanContext(context.active(), JSON.parse(parentCtx))
            //   : undefined;
            const host = req.hostname;
            const path = req.path;
            _logger.log(`httpSpan: ${host} ${path}`);
            const span = (_a = api_1.trace.getSpan(api_1.context.active())) !== null && _a !== void 0 ? _a : tracer.startSpan(host + path);
            span.updateName(`http-xxx`);
            _logger.log(`traceid: ${span.spanContext().traceId}`);
            span.setAttribute('request.body', JSON.stringify(req.body) || 'UNKNOW');
            span.setAttribute('request.query', JSON.stringify(req.query) || 'UNKNOW');
            return span;
        };
        const getGraphqlSpan = (ctx) => {
            var _a;
            const gqlContext = graphql_1.GqlExecutionContext.create(ctx);
            const { operation, fieldName, path } = gqlContext.getInfo();
            const req = gqlContext.getContext().req;
            const span = api_1.trace.getSpan(api_1.context.active()) || tracer.startSpan('default');
            span.setAttribute('request.body', JSON.stringify(req.body) || 'UNKNOW');
            span.setAttribute('request.query', JSON.stringify(req.query) || 'UNKNOW');
            span.setAttribute('type', 'graphql');
            const typeNames = ['Mutation', 'Query'];
            if (typeNames.includes(path.typename)) {
                span.updateName(`gql::${operation.operation}:${fieldName}`.toLocaleLowerCase());
            }
            if (typeNames.includes((_a = path.prev) === null || _a === void 0 ? void 0 : _a.typename)) {
                span.updateName(`gql::${operation.operation}:${path.prev.key}.${fieldName}`.toLocaleLowerCase());
            }
            _logger.log(`traceid: ${span.spanContext().traceId}`);
            return span;
        };
        const ctxType = ctx.getType();
        const span = ctxType === 'rpc'
            ? getRPCSpan(ctx)
            : ctxType === 'graphql'
                ? getGraphqlSpan(ctx)
                : getHTTPSpan(ctx);
        if (ctxType === 'graphql')
            return next.handle();
        return next.handle().pipe((0, rxjs_1.tap)({
            next: () => {
                span.end();
            },
            error: () => {
                span.end();
            },
        }));
    }
};
TraceInterceptor = TraceInterceptor_1 = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], TraceInterceptor);
exports.TraceInterceptor = TraceInterceptor;


/***/ }),

/***/ "./libs/instrumentation/src/utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.copyMetadataFromFunctionToFunction = void 0;
const copyMetadataFromFunctionToFunction = (originalFunction, newFunction) => {
    // Get the current metadata and set onto the wrapper
    // to ensure other decorators ( ie: NestJS EventPattern / RolesGuard )
    // won't be affected by the use of this instrumentation
    Reflect.getMetadataKeys(originalFunction).forEach((metadataKey) => {
        Reflect.defineMetadata(metadataKey, Reflect.getMetadata(metadataKey, originalFunction), newFunction);
    });
};
exports.copyMetadataFromFunctionToFunction = copyMetadataFromFunctionToFunction;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/microservices":
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@opentelemetry/api":
/***/ ((module) => {

module.exports = require("@opentelemetry/api");

/***/ }),

/***/ "@opentelemetry/core":
/***/ ((module) => {

module.exports = require("@opentelemetry/core");

/***/ }),

/***/ "@opentelemetry/instrumentation":
/***/ ((module) => {

module.exports = require("@opentelemetry/instrumentation");

/***/ }),

/***/ "@opentelemetry/semantic-conventions":
/***/ ((module) => {

module.exports = require("@opentelemetry/semantic-conventions");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nestjs-otel":
/***/ ((module) => {

module.exports = require("nestjs-otel");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "async_hooks":
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs/promises":
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

// import './tracing';
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const comment_module_1 = __webpack_require__("./apps/comment/src/comment/comment.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(comment_module_1.AppModule);
        const globalPrefix = 'comments';
        app.setGlobalPrefix(globalPrefix);
        app.connectMicroservice({
            transport: microservices_1.Transport.NATS,
            options: {
                servers: ['nats://localhost:4222'],
                queue: 'comment_queue',
            },
        });
        yield app.startAllMicroservices();
        const port = 4004;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map