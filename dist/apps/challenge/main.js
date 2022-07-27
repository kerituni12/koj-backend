/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/challenge/src/challenge/challenge.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const challenge_service_1 = __webpack_require__("./apps/challenge/src/challenge/challenge.service.ts");
const exceptions_1 = __webpack_require__("./libs/common/exceptions/src/index.ts");
const microservices_2 = __webpack_require__("@nestjs/microservices");
let AppController = class AppController {
    constructor(challengeService) {
        this.challengeService = challengeService;
    }
    m_create({ data, select }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.challengeService.create(data, select);
            }
            catch (error) {
                console.log(error);
                throw new microservices_2.RpcException(error.message);
            }
        });
    }
    m_findMany({ args, select }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.challengeService.findMany(args, select);
        });
    }
    m_findUniquePublic({ where, select }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.challengeService.findUniquePublic(where, select);
        });
    }
    m_findUnique({ where, select }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.challengeService.findUnique(where, select);
        });
    }
    m_update({ data, where, select }) {
        return this.challengeService.update(data, where, select);
    }
    m_remove({ where, select }) {
        return this.challengeService.remove(where, select);
    }
    m_submit({ data }) {
        return this.challengeService.submit(data);
    }
};
(0, tslib_1.__decorate)([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.NATS,
        options: {
            queue: "challenge_queue",
            servers: ["nats://localhost:4222"]
        }
    }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object)
], AppController.prototype, "client", void 0);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_CREATE),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "m_create", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_FIND_MANY),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "m_findMany", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_FIND_UNIQUE_PUBLIC),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "m_findUniquePublic", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_FIND_UNIQUE),
    (0, instrumentation_1.Span)(),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "m_findUnique", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_UPDATE),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "m_update", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_DELETE),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "m_remove", null);
(0, tslib_1.__decorate)([
    (0, microservices_1.MessagePattern)(constants_1.CHALLENGE_SUBMIT),
    (0, tslib_1.__param)(0, (0, microservices_1.Payload)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "m_submit", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.UseFilters)(exceptions_1.RpcPrismaExceptionFilter),
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof challenge_service_1.ChallengeService !== "undefined" && challenge_service_1.ChallengeService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/challenge/src/challenge/challenge.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const challenge_controller_1 = __webpack_require__("./apps/challenge/src/challenge/challenge.controller.ts");
const challenge_service_1 = __webpack_require__("./apps/challenge/src/challenge/challenge.service.ts");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            nestjs_prisma_1.PrismaModule.forRootAsync({
                isGlobal: true,
                useFactory: () => ({
                    prismaOptions: { log: ['info', 'query'], errorFormat: 'minimal' },
                    // middlewares: [loggingMiddleware()],
                }),
            }),
            logger_module_1.LoggerModule,
        ],
        controllers: [challenge_controller_1.AppController],
        providers: [challenge_service_1.ChallengeService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/challenge/src/challenge/challenge.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const slugify_1 = (0, tslib_1.__importDefault)(__webpack_require__("slugify"));
const client_1 = __webpack_require__("@prisma/client");
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
const perf_hooks_1 = __webpack_require__("perf_hooks");
const common_2 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const code_gen_1 = __webpack_require__("./libs/code-gen/src/index.ts");
const code_executor_1 = __webpack_require__("./libs/code-executor/src/index.ts");
const save_folder_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/challenge/src/utils/save-folder.util.ts"));
const save_testcase_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/challenge/src/utils/save-testcase.util.ts"));
const language_config_1 = __webpack_require__("./apps/challenge/src/utils/language.config.ts");
const codeExecutor = new code_executor_1.CodeExecutor("myExecutor", "redis://127.0.0.1:6379");
let ChallengeService = class ChallengeService {
    constructor(prisma, logger) {
        this.prisma = prisma;
        this.logger = logger;
    }
    create(data, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { domainId, title } = data;
            const slug = (0, slugify_1.default)(title).toLowerCase();
            console.log("🚀 ~ file: challenge.service.ts ~ line 42 ~ ChallengeService ~ create ~ slug", slug);
            data.slug = slug;
            yield this.saveCode(data, domainId, slug);
            return this.prisma.challenge.create(Object.assign({ data }, select));
        });
    }
    findMany(args, select) {
        return this.prisma.challenge.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    findUniquePublic(where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const whereCondition = this.getChallengeWhereUnique(where, where.domainId);
            const data = (yield this.prisma.challenge.findUnique({
                where: whereCondition,
                select
            }));
            if (!data) {
                throw new common_1.NotFoundException({
                    message: "Challenge not exists",
                    statusCode: common_2.HttpStatus.NOT_FOUND
                });
            }
            data.testcases.forEach(({ id, hidden }, index) => {
                if (hidden)
                    data.testcases[index] = { id, hidden };
            });
            console.log(data.testcases);
            return data;
        });
    }
    findUnique(where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const whereCondition = this.getChallengeWhereUnique(where, where.domainId);
            return this.prisma.challenge
                .findUnique({ where: whereCondition, select })
                .then((data) => {
                if (!data) {
                    throw new common_1.NotFoundException({
                        message: "Challenge not exists",
                        statusCode: common_2.HttpStatus.NOT_FOUND
                    });
                }
                return data;
            });
        });
    }
    update(data, where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { domainId, title } = data;
            const slug = (0, slugify_1.default)(title).toLowerCase();
            data.updatedAt = new Date().toISOString();
            const checkExistResult = yield this.prisma.challenge.findFirst({
                where: {
                    NOT: where.id ? { id: where.id } : { slug: where.slug },
                    slug,
                    domainId
                },
                select: { id: true, title: true, inputs: true, structs: true }
            });
            if (checkExistResult) {
                throw new common_1.ConflictException({
                    message: "Challenge is exists",
                    statusCode: common_2.HttpStatus.CONFLICT
                });
            }
            yield this.saveCode(data, domainId, slug);
            const whereCondition = this.getChallengeWhereUnique(where, domainId);
            return this.prisma.challenge.update({
                data,
                where: whereCondition,
                select
            });
        });
    }
    remove(where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.prisma.challenge.delete({ where, select }).catch((error) => {
                if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    if (error.code === "P2025") {
                        throw new common_1.NotFoundException();
                    }
                }
                throw error;
            });
        });
    }
    // Todo convert to microservice
    saveCode(data, domainId, slug) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const inputSchema = {
                name: data.functionName,
                inputs: data.inputs || [],
                structs: data.structs || [],
                output: { type: data.output }
            };
            const inputData = code_gen_1.Input.formJson(inputSchema);
            try {
                const basePath = "/mnt/Data/code1/code-executor1";
                const path = `${basePath}/challenges/${domainId}/${slug}`;
                yield (0, save_folder_util_1.default)(path);
                const promiseWriteCode = data.languages
                    .filter((language) => ["cplusplus", "javascript"].includes(language.id))
                    .map((language) => language_config_1.languageConfigs[language.id].gen({ inputData, domainId, slug, path }));
                promiseWriteCode.push(language_config_1.languageConfigs["output"].gen({ inputData, domainId, slug, path }));
                const promiseWriteTestCase = (data.testcases || []).map((testcase, index) => {
                    return (0, save_testcase_util_1.default)({
                        inputSchema: inputData,
                        path,
                        testcase,
                        index
                    });
                });
                yield Promise.all([...promiseWriteCode, ...promiseWriteTestCase]);
            }
            catch (error) {
                console.log("🚀 ~ file: challenge.service.ts ~ line 135 ~ ChallengeService ~ saveCode ~ error", error);
                throw new common_1.InternalServerErrorException(error.message);
            }
        });
    }
    submit(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { content, functionName, languageId, challengeId, type, domainId } = data;
            console.log("🚀 ~ file: challenge.service.ts ~ line 190 ~ ChallengeService ~ submit ~ type", type);
            try {
                const basePath = process.env.BASE_PATH;
                const userId = "hieunguyen-123";
                const challengePath = `${basePath}/challenges/${domainId}/${challengeId}`;
                const userSolvePath = `${basePath}/user-solve/${challengeId}/${userId}`;
                const time = perf_hooks_1.performance.now();
                const result = yield codeExecutor.runCode({
                    type,
                    userSolvePath,
                    challengePath,
                    language: languageId,
                    code: language_config_1.languageConfigs[languageId].genSolution(content, functionName)
                });
                if (result.error) {
                    return {
                        result: null,
                        error: result.error
                    };
                }
                this.logger.info(result);
                this.logger.info(`time take : ${(perf_hooks_1.performance.now() - time) / 1000}s`);
                return { result: result.data.tests };
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    getChallengeWhereUnique({ id, slug }, domainId) {
        if (id)
            return { id };
        return { slug_domainId: { slug, domainId } };
    }
};
ChallengeService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof nestjs_pino_1.PinoLogger !== "undefined" && nestjs_pino_1.PinoLogger) === "function" ? _b : Object])
], ChallengeService);
exports.ChallengeService = ChallengeService;


/***/ }),

/***/ "./apps/challenge/src/utils/decode-base64.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function decodeBase64(code) {
    return Buffer.from(code, 'base64').toString('ascii');
}
exports["default"] = decodeBase64;


/***/ }),

/***/ "./apps/challenge/src/utils/language.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.languageConfigs = void 0;
const tslib_1 = __webpack_require__("tslib");
const code_gen_1 = __webpack_require__("./libs/code-gen/src/index.ts");
const save_code_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/challenge/src/utils/save-code.util.ts"));
exports.languageConfigs = {
    javascript: {
        gen: genJavascriptFile,
        genSolution: code_gen_1.genJavascriptSolution,
        name: 'javascript',
        extension: 'js',
    },
    python: {
        gen: code_gen_1.genPython,
        name: 'python',
        extension: 'py',
    },
    cplusplus: {
        gen: genCplusPlusFile,
        genModule: code_gen_1.genCplusplusModule,
        genSolution: code_gen_1.genCplusplusSolution,
        name: 'cplusplus',
        extension: 'cpp',
    },
    output: {
        gen: genOutputFile,
        name: 'output',
        extension: 'js',
    },
};
function genJavascriptFile({ inputData, domainId, slug, path }) {
    const codegen = (0, code_gen_1.genJavascript)(inputData);
    return (0, save_code_util_1.default)(path, `main.js`, codegen, false);
}
function genCplusPlusFile({ inputData, domainId, slug, path }) {
    const codegen = (0, code_gen_1.genCplusplus)(inputData);
    return Promise.all([
        (0, save_code_util_1.default)(path, `main.cpp`, codegen.main, false),
        (0, save_code_util_1.default)(path, 'solution.h', codegen.lib, false),
    ]);
}
function genOutputFile({ inputData, domainId, slug, path }) {
    const codegen = (0, code_gen_1.genOutput)(inputData);
    return (0, save_code_util_1.default)(path, `output.js`, codegen, false);
}


/***/ }),

/***/ "./apps/challenge/src/utils/save-code.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const promises_1 = __webpack_require__("fs/promises");
const decode_base64_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/challenge/src/utils/decode-base64.ts"));
function saveCode(folderPath, fileName, code, base64) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const folderPromises = [];
        folderPromises.push((0, promises_1.mkdir)(`${folderPath}`, { recursive: true }));
        const folders = ['input', 'output'];
        const status = ['show', 'hide'];
        folders.flatMap((d) => status.forEach((v) => folderPromises.push((0, promises_1.mkdir)(`${folderPath}/${d}/${v}`, { recursive: true }))));
        yield Promise.all(folderPromises);
        const promisesToKeep = [];
        promisesToKeep.push(base64
            ? (0, promises_1.writeFile)(path_1.default.join(folderPath, fileName), (0, decode_base64_1.default)(code))
            : (0, promises_1.writeFile)(path_1.default.join(folderPath, fileName), code));
        yield Promise.all(promisesToKeep);
        Promise.resolve();
    });
}
exports["default"] = saveCode;


/***/ }),

/***/ "./apps/challenge/src/utils/save-folder.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const del_1 = (0, tslib_1.__importDefault)(__webpack_require__("del"));
const promises_1 = __webpack_require__("fs/promises");
function saveFolder(folderPath) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        yield (0, del_1.default)(`${folderPath}/*`, { force: true });
        const folderPromises = [];
        folderPromises.push((0, promises_1.mkdir)(`${folderPath}`, { recursive: true }));
        const folders = ['input', 'output'];
        const status = ['show', 'hide'];
        folders.flatMap((d) => status.forEach((v) => folderPromises.push((0, promises_1.mkdir)(`${folderPath}/${d}/${v}`, { recursive: true }))));
        yield Promise.all(folderPromises);
    });
}
exports["default"] = saveFolder;


/***/ }),

/***/ "./apps/challenge/src/utils/save-testcase.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const promises_1 = __webpack_require__("fs/promises");
const transform_input_util_1 = __webpack_require__("./apps/challenge/src/utils/transform-input.util.ts");
function saveTestcases({ path, index, testcase, inputSchema }) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const type = testcase.hidden ? "hide" : "show";
        const inputPath = `${path}/input/${type}/${index}.in`;
        const outputPath = `${path}/output/${type}/${index}.out`;
        const transformInputResult = (0, transform_input_util_1.transformInput)(inputSchema, testcase);
        return Promise.all([
            (0, promises_1.writeFile)(inputPath, transformInputResult),
            (0, promises_1.writeFile)(outputPath, testcase.expectedOutput)
        ]);
    });
}
exports["default"] = saveTestcases;


/***/ }),

/***/ "./apps/challenge/src/utils/transform-input.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const fs_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs"));
const ws = fs_1.default.createWriteStream('./newtransform.in');
const inputSchema = {
    name: 'custom',
    structs: [
        {
            name: 'a struct',
            comment: 'A struct for the example',
            fields: [
                {
                    name: 'listt',
                    comment: 'an listt',
                    type: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } },
                    formatStyle: 'DEFAULT',
                },
            ],
        },
    ],
    inputs: [
        {
            name: 'size',
            comment: 'size',
            type: { main: 'INTEGER' },
            formatStyle: 'DEFAULT',
        },
        {
            name: 'a struct',
            comment: 'a struct',
            type: { main: 'OBJECT', structName: 'a struct' },
            formatStyle: 'DEFAULT',
        },
        {
            name: 'sizex',
            comment: 'sizex',
            type: { main: 'INTEGER' },
            formatStyle: 'DEFAULT',
        },
        {
            name: 'list',
            comment: 'a list of structs',
            type: {
                main: 'ARRAY',
                encapsulated: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } },
            },
            formatStyle: 'DEFAULT',
        },
    ],
    output: {
        name: 'output',
        comment: 'a list of structs',
        type: {
            main: 'ARRAY',
            encapsulated: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } },
        },
        formatStyle: 'DEFAULT',
    },
};
const testcases = [
    {
        inputs: [
            { value: 5, key: '1' },
            { value: { listt: [1, 2, 3] }, key: '2' },
            { value: 5, key: '3' },
            {
                value: [
                    [1, 2, 3],
                    [1, 4, 5],
                ],
                key: '4',
            },
        ],
        output: '',
    },
];
function transformInput(inputSchema, testcase) {
    const resultLine = [];
    function canBeInlined(type) {
        const canBeInlinedType = ['INTEGER', 'CHAR'];
        return canBeInlinedType.includes(type === null || type === void 0 ? void 0 : type.main);
    }
    function fitsInOneLine({ data, inputSchema, structs = [] }) {
        const fitsInOneLineType = ['INTEGER', 'CHAR', 'STRING'];
        if (fitsInOneLineType.includes(inputSchema.type.main))
            return [true, data];
        if (inputSchema.type.main === 'ARRAY') {
            const isFit = canBeInlined(inputSchema.type.encapsulated);
            if (isFit) {
                return [true, data.join(' ')];
            }
            //   ws.write((data.length || inputSchema.size) + '\n');
            resultLine.push(data.length || inputSchema.size);
            return [false, null];
        }
        if (inputSchema.type.main === 'OBJECT') {
            const struct = structs.find((struct) => struct.name === inputSchema.type.structName);
            if (!struct) {
                throw new Error('khong co struct');
                return [false, null];
            }
            for (let i = 0; i < struct.fields.length; i++) {
                if (!canBeInlined(struct.fields[i].type)) {
                    return [false, null];
                }
            }
            return [true, Object.values(data).join(' ')];
        }
        throw new Error('khong phai type');
        return [false, null];
    }
    function getData2(data, inputSchema, structs) {
        console.log('🚀 ~ file: transform-input.util.ts ~ line 123 ~ getData2 ~ inputSchema', inputSchema);
        const [isFit, result] = fitsInOneLine({ data, inputSchema, structs });
        if (isFit) {
            //   ws.write(result + '\n')
            resultLine.push(result);
            return;
        }
        if (inputSchema.type.main === 'ARRAY') {
            // ws.write((data.length || inputSchema.size) + '\n');
            data.forEach((arr) => {
                const inputSchema$ = {};
                inputSchema$.type = inputSchema.type.encapsulated;
                console.log('inputSchema$', inputSchema$);
                getData2(arr, inputSchema$);
            });
        }
        if (inputSchema.type.main === 'OBJECT') {
            const struct = structs.find((struct) => struct.name == inputSchema.type.structName);
            console.log('struct', struct);
            if (!struct) {
                throw new Error('khong co struct');
                return [false, null];
            }
            Object.entries(data)
                .sort()
                .forEach(([key, value], index) => {
                const inputSchema$ = struct.fields[index];
                // console.log("inputSchema$",inputSchema$)
                getData2(value, inputSchema$);
            });
        }
    }
    function getData(inputs, inputSchema) {
        console.log('🚀 ~ file: transform-input.util.ts ~ line 161 ~ getData ~ inputs', inputs);
        inputs.forEach((value, index) => {
            getData2(value, inputSchema.inputs[index], inputSchema.structs);
        });
        ws.end();
    }
    const inputMapping = (testcase.inputs || []).map((input) => input.value);
    console.log('🚀 ~ file: transform-input.util.ts ~ line 170 ~ transformInput ~ inputMapping', inputMapping);
    getData(inputMapping, inputSchema);
    console.log('resultLine', resultLine);
    return resultLine.join('\n');
}
exports.transformInput = transformInput;
// const result = transformInput(inputSchema, testcases[0]);
// console.log(result);
const inputSchemaTest = {
    structs: [
        {
            name: 'STRUCT1',
            fields: [{ name: 'a', type: { main: 'INTEGER' }, formatStyle: 'DEFAULT' }],
        },
    ],
    inputs: [
        {
            name: 'input1',
            type: { main: 'OBJECT', structName: 'STRUCT1' },
            formatStyle: 'DEFAULT',
        },
        {
            name: 'input2',
            type: { main: 'INTEGER' },
            formatStyle: 'DEFAULT',
        },
    ],
    output: {
        name: '__output__',
        type: { main: 'OBJECT', structName: 'STRUCT1' },
        formatStyle: 'DEFAULT',
    },
};
const testcaseTest = [
    {
        inputs: [
            { value: { a: 1 }, key: '3' },
            {
                value: 2,
                key: '4',
            },
        ],
        output: '',
    },
];
const result = transformInput(inputSchemaTest, testcaseTest[0]);
console.log(result);


/***/ }),

/***/ "./apps/koj/src/logger/logger.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = exports.loggerOptions = void 0;
const tslib_1 = __webpack_require__("tslib");
const pino_1 = (0, tslib_1.__importDefault)(__webpack_require__("pino"));
const pino_2 = __webpack_require__("pino");
const api_1 = __webpack_require__("@opentelemetry/api");
exports.loggerOptions = {
    level: 'info',
    timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
    formatters: {
        level(label) {
            return { level: label };
        },
        log(object) {
            const span = api_1.trace.getSpan(api_1.context.active());
            if (!span)
                return Object.assign({}, object);
            const { spanId, traceId, traceFlags } = span.spanContext();
            return Object.assign(Object.assign({}, object), { spanId, traceId, traceFlags });
        },
    },
};
exports.logger = (0, pino_1.default)(exports.loggerOptions, (0, pino_2.destination)(__dirname + process.env.LOG_FILE_NAME));


/***/ }),

/***/ "./apps/koj/src/logger/logger.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
const logger_config_1 = __webpack_require__("./apps/koj/src/logger/logger.config.ts");
const logger_service_1 = __webpack_require__("./apps/koj/src/logger/logger.service.ts");
let LoggerModule = class LoggerModule {
};
LoggerModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    logger: logger_config_1.logger,
                    autoLogging: false,
                    customProps: function (req) {
                        return {
                            ip: req.userIp || '',
                        };
                    },
                },
                forRoutes: ['*'],
                exclude: [{ method: common_1.RequestMethod.ALL, path: '/health' }],
            }),
        ],
        providers: [logger_service_1.Logger, nestjs_pino_1.PinoLogger],
        exports: [logger_service_1.Logger, nestjs_pino_1.PinoLogger],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ "./apps/koj/src/logger/logger.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
class Logger extends nestjs_pino_1.PinoLogger {
}
exports.Logger = Logger;


/***/ }),

/***/ "./libs/code-executor/src/Builder.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const logger_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/logger.ts"));
const findExtension_1 = __webpack_require__("./libs/code-executor/src/utils/findExtension.ts");
class Builder {
    constructor(docker) {
        this.docker = docker;
    }
    build(langs) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const supportedLanguages = Object.keys(findExtension_1.extension);
            const languages = langs || supportedLanguages;
            const streams = [];
            languages.forEach((lang) => {
                if (supportedLanguages.includes(lang.toLowerCase())) {
                    logger_1.default.info(`Building ${lang}...`);
                    streams.push(this.docker.buildImage({
                        context: path_1.default.join(__dirname, 'langs', lang),
                        src: ['Dockerfile', 'start.sh'],
                    }, {
                        t: `${lang.toLowerCase()}-runnerx`,
                    }));
                }
                else {
                    logger_1.default.error(`${lang} is not supported`);
                }
            });
            const progress = [];
            (yield Promise.all(streams)).forEach((stream) => {
                stream.on('data', (chunk) => {
                    logger_1.default.debug(chunk);
                    // console.log(chunk.toString());
                });
                progress.push(new Promise((resolve, reject) => {
                    this.docker.modem.followProgress(stream, (err, res) => {
                        if (err) {
                            console.log('🚀 ~ file: Builder.ts ~ line 46 ~ Builder ~ progress.push ~ err', err);
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }));
            });
            yield Promise.all(progress);
            logger_1.default.info('Built containers successfully');
        });
    }
}
exports["default"] = Builder;


/***/ }),

/***/ "./libs/code-executor/src/CodeExecutor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.languages = exports.Worker = void 0;
const tslib_1 = __webpack_require__("tslib");
const bull_1 = (0, tslib_1.__importDefault)(__webpack_require__("bull"));
const uuid_1 = __webpack_require__("uuid");
const logger_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/logger.ts"));
const findExtension_1 = __webpack_require__("./libs/code-executor/src/utils/findExtension.ts");
const languages = Object.keys(findExtension_1.extension);
exports.languages = languages;
class CodeExecutor {
    constructor(name, redis) {
        this.queue = new bull_1.default(name, redis);
        this.jobs = new Map();
        this.queue.on("global:completed", (_job, result) => {
            const parseResult = JSON.parse(result);
            logger_1.default.info(`Running on complete for id: ${parseResult.data.id}`);
            const currentJob = this.jobs.get(parseResult.data.id);
            if (currentJob) {
                currentJob.resolve(parseResult);
                this.jobs.delete(parseResult.data.id);
            }
        });
    }
    runCode(codeOptions) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            const codeObject = Object.assign(Object.assign({}, codeOptions), { id });
            logger_1.default.info(`Running code with id: ${id}`);
            return new Promise((resolve, reject) => {
                this.jobs.set(id, { resolve, reject });
                this.queue.add(codeObject);
            });
        });
    }
    stop() {
        this.queue.close();
    }
}
exports["default"] = CodeExecutor;
var Worker_1 = __webpack_require__("./libs/code-executor/src/Worker.ts");
Object.defineProperty(exports, "Worker", ({ enumerable: true, get: function () { return (0, tslib_1.__importDefault)(Worker_1).default; } }));


/***/ }),

/***/ "./libs/code-executor/src/Runner.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const perf_hooks_1 = __webpack_require__("perf_hooks");
// import del from 'del';
const worker_threads_1 = __webpack_require__("worker_threads");
const logger_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/logger.ts"));
const getOutput_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/getOutput.ts"));
const saveCode_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/saveCode.ts"));
const memory_streams_1 = (0, tslib_1.__importDefault)(__webpack_require__("memory-streams"));
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
class Runner {
    constructor(docker, workerPath) {
        this.docker = docker;
        this.worker = new worker_threads_1.Worker(workerPath || `${__dirname}/transform-worker.js`);
    }
    run({ id, tag, code, language, timeout = 2, userSolvePath, challengePath, type = constants_1.RUN_TEST }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield (0, saveCode_1.default)(userSolvePath, code, language);
            logger_1.default.info(`Starting process ${id}`);
            const t0 = perf_hooks_1.performance.now();
            const testcaseType = type === constants_1.RUN_TEST ? "show" : "all";
            const stdout = new memory_streams_1.default.WritableStream();
            const stderr = new memory_streams_1.default.WritableStream();
            const { error } = yield this.docker
                .run(tag, ["bash", "/start.sh", `${timeout}`, `${type}`], [stdout, stderr], {
                Tty: false,
                HostConfig: {
                    AutoRemove: true,
                    Mounts: [
                        {
                            Source: challengePath,
                            Target: "/app",
                            Type: "bind"
                        },
                        {
                            Source: userSolvePath,
                            Target: "/user-solve",
                            Type: "bind"
                        }
                    ]
                }
            })
                .then(function (data) {
                const error = stderr.toString();
                return { error: error || null };
            })
                .catch(function (error) {
                return { error };
            });
            if (error) {
                return { id, error };
            }
            const t1 = perf_hooks_1.performance.now();
            logger_1.default.info(`Process ${id} completed in ${(t1 - t0) / 1000} seconds`);
            logger_1.default.info(language);
            if (["cplusplus"].includes(language.toLowerCase())) {
                const userOutputs = [];
                const outputs = yield this.getOutPut(userSolvePath, testcaseType);
                outputs.forEach((element, index) => {
                    if (!element.error) {
                        return userOutputs.push({
                            id: index,
                            value: element.output.split("\n")
                        });
                    }
                    element.result = false;
                });
                const transformResult = yield this.workerTransform(userOutputs, challengePath);
                transformResult.forEach((element) => {
                    outputs[element.id].output = element.value;
                });
                const info = this.modifyAndGetInfoResult(outputs);
                return { id, result: outputs, info };
            }
            const userOutputs = [];
            const outputs = yield this.getOutPut(userSolvePath, testcaseType);
            outputs.forEach((element, index) => {
                if (!element.error) {
                    return userOutputs.push({
                        id: index,
                        value: element.output.split("\n")
                    });
                }
                element.result = false;
            });
            console.log("result ", outputs);
            const info = this.modifyAndGetInfoResult(outputs);
            return { id, result: outputs, info };
        });
    }
    // Mutate data
    modifyAndGetInfoResult(outputs) {
        const testcaseCount = outputs.length;
        let testcasePassCount = 0;
        let score = 0;
        let totalScore = 0;
        outputs.forEach((element, index) => {
            totalScore += element.totalScore || 0;
            if (element.output === element.expectedOutput) {
                element.result = true;
                testcasePassCount++;
                score += element.score || 0;
            }
            else {
                element.message = "wrong";
                element.result = false;
            }
            if (element.hidden) {
                element.expectedOutput = "";
                element.message = "";
            }
        });
        return { testcaseCount, testcasePassCount, score, totalScore };
    }
    getOutPut(userSolvePath, testcaseType) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const outPutPromises = [];
            outPutPromises.push((0, getOutput_1.default)(userSolvePath, "show"));
            if (testcaseType === "all") {
                outPutPromises.push((0, getOutput_1.default)(userSolvePath, "hide"));
            }
            const result = yield Promise.all(outPutPromises);
            return result.flat(1);
        });
    }
    workerTransform(outputs, challengePath) {
        return new Promise((resolve, reject) => {
            this.worker.on("message", (result) => {
                resolve(result);
            });
            this.worker.on("error", (error) => {
                reject(error);
            });
            this.worker.on("exit", (exitCode) => {
                console.log(exitCode);
            });
            this.worker.postMessage({
                outputs: outputs,
                path: challengePath
            });
        });
    }
}
exports["default"] = Runner;


/***/ }),

/***/ "./libs/code-executor/src/Worker.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const dockerode_1 = (0, tslib_1.__importDefault)(__webpack_require__("dockerode"));
const bull_1 = (0, tslib_1.__importDefault)(__webpack_require__("bull"));
const Runner_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/Runner.ts"));
const Builder_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/Builder.ts"));
const logger_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/logger.ts"));
class Worker {
    constructor(name, redis, folderPath, transformWorkerPath) {
        this.docker = new dockerode_1.default();
        this.runner = new Runner_1.default(this.docker, transformWorkerPath);
        this.builder = new Builder_1.default(this.docker);
        this.queue = new bull_1.default(name, redis, {
            defaultJobOptions: { attempts: 3, timeout: 60000 }
        });
        this.folderPath = folderPath || "/tmp/code-exec";
    }
    work(codeOptions) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const tag = `${codeOptions.language.toLowerCase()}-runnerx`;
            try {
                const result = yield this.runner.run(Object.assign({ tag }, codeOptions));
                return { data: result, error: result.error || null };
            }
            catch (error) {
                return {
                    data: { id: codeOptions.id },
                    error
                };
            }
        });
    }
    build(langs) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.builder.build(langs);
        });
    }
    start() {
        this.queue.process((job, done) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            logger_1.default.info(`Received: ${job.data.id}`);
            const result = yield this.work(job.data);
            logger_1.default.debug(JSON.stringify(result));
            done(null, result);
        }));
    }
    pause() {
        this.queue.pause();
    }
    resume() {
        this.queue.resume();
    }
    stop() {
        this.queue.close();
    }
}
exports["default"] = Worker;


/***/ }),

/***/ "./libs/code-executor/src/index.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Worker = exports.languages = exports.CodeExecutor = void 0;
var CodeExecutor_1 = __webpack_require__("./libs/code-executor/src/CodeExecutor.ts");
Object.defineProperty(exports, "CodeExecutor", ({ enumerable: true, get: function () { return __importDefault(CodeExecutor_1).default; } }));
Object.defineProperty(exports, "languages", ({ enumerable: true, get: function () { return CodeExecutor_1.languages; } }));
var Worker_1 = __webpack_require__("./libs/code-executor/src/Worker.ts");
Object.defineProperty(exports, "Worker", ({ enumerable: true, get: function () { return __importDefault(Worker_1).default; } }));


/***/ }),

/***/ "./libs/code-executor/src/utils/findExtension.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extension = void 0;
exports.extension = {
    python: 'py', bash: 'sh', c: 'c', cplusplus: 'cpp', golfscript: 'gs', ruby: 'rb', javascript: 'js', java: 'java', perl: 'pl', swift: 'swift', rust: 'rs', brainfuck: 'bf', o5AB1E: 'abe',
};
function findExtension(language) {
    let fileExtension = '';
    Object.entries(exports.extension).forEach((entry) => {
        const [key, value] = entry;
        if (key.toLowerCase() === language.toLowerCase()) {
            fileExtension = value;
        }
    });
    return fileExtension;
}
exports["default"] = findExtension;


/***/ }),

/***/ "./libs/code-executor/src/utils/getOutput.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loopFiles = void 0;
const tslib_1 = __webpack_require__("tslib");
const promises_1 = __webpack_require__("fs/promises");
function loopFiles(dir) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        try {
            const files = yield (0, promises_1.readdir)(dir);
            const promisesToKeep = [];
            files.forEach((file) => promisesToKeep.push((0, promises_1.readFile)(`${dir}/${file}`, { encoding: 'utf8' }).then(JSON.parse)));
            const result = yield Promise.all(promisesToKeep);
            return result;
        }
        catch (e) {
            console.error(e);
            return [];
        }
    });
}
exports.loopFiles = loopFiles;
function getOutput(Path, type) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        switch (type) {
            case 'show':
                return loopFiles(`${Path}/result/show`);
            case 'hide':
                return loopFiles(`${Path}/result/hide`);
            default:
                return Promise.all([
                    loopFiles(`${Path}/result/show`),
                    loopFiles(`${Path}/result/hide`),
                ]);
        }
    });
}
exports["default"] = getOutput;


/***/ }),

/***/ "./libs/code-executor/src/utils/logger.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loggerOptions = void 0;
const tslib_1 = __webpack_require__("tslib");
const pino_1 = (0, tslib_1.__importDefault)(__webpack_require__("pino"));
const pino_pretty_1 = (0, tslib_1.__importDefault)(__webpack_require__("pino-pretty"));
const stream = (0, pino_pretty_1.default)({
    colorize: true
});
exports.loggerOptions = {
    level: 'info',
    formatters: {
        level(label) {
            return { level: label };
        }
    },
};
const logger = (0, pino_1.default)(exports.loggerOptions, stream);
exports["default"] = logger;


/***/ }),

/***/ "./libs/code-executor/src/utils/saveCode.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const promises_1 = __webpack_require__("fs/promises");
const writeToFile_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/writeToFile.ts"));
const findExtension_1 = (0, tslib_1.__importDefault)(__webpack_require__("./libs/code-executor/src/utils/findExtension.ts"));
function saveCode(folderPath, code, language) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const folderPromises = [];
        const folders = ["result", "error", "output"];
        const status = ["show", "hide"];
        folders.flatMap((d) => status.forEach((v) => folderPromises.push((0, promises_1.mkdir)(`${folderPath}/${d}/${v}`, { recursive: true }))));
        yield Promise.all(folderPromises);
        const extension = (0, findExtension_1.default)(language);
        yield (0, writeToFile_1.default)(path_1.default.join(folderPath, `solution.${extension}`), code);
    });
}
exports["default"] = saveCode;


/***/ }),

/***/ "./libs/code-executor/src/utils/writeToFile.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const fs_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs"));
function writeToFile(path, data) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs_1.default.writeFile(path, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    });
}
exports["default"] = writeToFile;


/***/ }),

/***/ "./libs/code-gen/src/configs/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_OUTPUT_NAME = void 0;
exports.DEFAULT_OUTPUT_NAME = '__output__';


/***/ }),

/***/ "./libs/code-gen/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/code-gen/src/languages/javascript.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/code-gen/src/languages/python.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/code-gen/src/languages/cplusplus.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/code-gen/src/languages/output.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/code-gen/src/types.ts"), exports);


/***/ }),

/***/ "./libs/code-gen/src/languages/cplusplus.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genCplusplusSolution = exports.genCplusplusModule = exports.genCplusplus = void 0;
const keywords_1 = __webpack_require__("./libs/code-gen/src/utils/keywords.ts");
const utils_1 = __webpack_require__("./libs/code-gen/src/utils/utils.ts");
const types_1 = __webpack_require__("./libs/code-gen/src/types.ts");
const constants_1 = __webpack_require__("./libs/code-gen/src/configs/constants.ts");
function varName(name) {
    const candidate = (0, utils_1.snakeCaseWithoutDot)(name);
    return keywords_1.cplusplusKeyword.has(candidate) ? candidate + "_" : candidate;
}
function structName(name) {
    /* Transform a class name into a valid one for Python */
    return (0, utils_1.pascalCase)(name);
}
/* Create the C++ code to parse an input */
class ParserCpp {
    constructor(input_data) {
        this.input = input_data;
        this.includes = new Set();
        this.main = [];
        this.method = [];
        this.output = [];
        this.iterator = new utils_1.IteratorName(input_data.inputs.map((variable) => variable.name));
        this.indent_lvl = 0;
        this.indentation = 4;
    }
    type_str(type) {
        /* Return the C++ name for a type */
        if (type.main === types_1.TypeEnum.INTEGER) {
            return "int";
        }
        if (type.main === types_1.TypeEnum.STRING) {
            this.includes.add("string");
            return "string";
        }
        if (type.main === types_1.TypeEnum.CHAR) {
            return "char";
        }
        if (type.main === types_1.TypeEnum.OBJECT) {
            return structName(type.structName);
        }
        this.includes.add("vector");
        return `vector<${this.type_str(type.encapsulated)}>`;
    }
    /* Read an entire line and store it into the right place(s) */
    read_line(name, type, size) {
        const indent = " ".repeat(this.indentation * this.indent_lvl);
        this.includes.add("vector");
        if ([types_1.TypeEnum.INTEGER, types_1.TypeEnum.CHAR].includes(type.main)) {
            this.main.push(indent + `cin >> ${name};`);
            return;
        }
        if (type.main === types_1.TypeEnum.STRING) {
            if (type.can_be_empty) {
                this.main.push(indent + `if (${size} > 0)`);
            }
            this.main.push(indent +
                " ".repeat(type.can_be_empty ? this.indentation : 0) +
                `getline(cin >> ws, ${name});`);
            return;
        }
        if (type.main === types_1.TypeEnum.ARRAY) {
            const innerName = this.iterator.new_it();
            //   this.main.push(
            //     indent + `for (${this.type_str(type.encapsulated)}& ${innerName} : ${name})`,
            //   );
            //   this.main.push(' '.repeat(this.indentation) + indent + `cin >> ${innerName};`);
            this.main.push(`${this.type_str(type.encapsulated)} ${innerName};`);
            this.main.push(`${indent}cin >> ws;`);
            this.main.push(`${indent}getline(cin, buffer);`);
            this.main.push(`${indent}istringstream ${innerName}_cin(buffer);`);
            this.main.push(`${indent}while (${innerName}_cin >> ${innerName}){`);
            this.main.push(`${" ".repeat(this.indentation * (this.indent_lvl + 1))}${name}.push_back(${innerName});`);
            this.main.push(`${indent}}`);
            // this.iterator.pop_it();
            return;
        }
        if (type.main === types_1.TypeEnum.OBJECT) {
            const struct = this.input.getStruct(type.structName);
            const properties = struct.fields
                .map((field) => `${name}.${varName(field.name)}`)
                .join(" >> ");
            this.main.push(`${indent}cin >> ${properties};`);
            return;
        }
        throw new Error("khong co type");
    }
    read_lines(name, type, size, already_resized = false) {
        if (type.main === types_1.TypeEnum.ARRAY &&
            !already_resized &&
            !type.encapsulated.canBeInlined()) {
            const sizeDeclare = `${varName(name)}_size`;
            const indent = " ".repeat(this.indentation * this.indent_lvl);
            this.main.push(`${indent}int ${sizeDeclare};`);
            this.main.push(`${indent}cin >> ${sizeDeclare};`);
            this.main.push(`${indent}${(0, utils_1.snakeCase)(name)}.resize(${sizeDeclare});`);
        }
        if (type.fitsInOneLine(this.input.structs)) {
            this.read_line(name, type, size);
            return;
        }
        if (type.main === types_1.TypeEnum.OBJECT) {
            const struct = this.input.getStruct(type.structName);
            const structNameTypeSize = struct.fieldsNameTypeSize(`${name}.$$`, varName);
            structNameTypeSize.forEach(({ name, type, size }) => {
                this.read_lines(name, type, size);
            });
            return;
        }
        const innerName = this.iterator.new_it();
        this.main.push(`${" ".repeat(this.indentation * this.indent_lvl)}for (${this.type_str(type.encapsulated)}& ${innerName} : ${name}) {`);
        this.indent_lvl += 1;
        this.read_lines(innerName, type.encapsulated, varName(type.encapsulated.size));
        this.indent_lvl -= 1;
        this.main.push(" ".repeat(this.indentation * this.indent_lvl) + "}");
        this.iterator.pop_it();
    }
    print_line(name, type, indent_lvl, style) {
        const indent = " ".repeat(this.indentation * indent_lvl);
        const endl = style == types_1.FormatStyle.NO_ENDLINE ? '" "' : "endl";
        if ([types_1.TypeEnum.INTEGER, types_1.TypeEnum.CHAR, types_1.TypeEnum.STRING].includes(type.main)) {
            this.output.push(`${indent}cout << ${name} << ${endl};`);
            return;
        }
        if (type.main === types_1.TypeEnum.ARRAY) {
            const innerName = this.iterator.new_it();
            this.output.push(`${indent}for (size_t ${innerName} = 0; ${innerName} < ${name}.size(); ++${innerName})`);
            this.output.push(" ".repeat(this.indentation) +
                indent +
                "cout << " +
                `${name}[${innerName}] << (${innerName} < ${name}.size() - 1 ? "${type.encapsulated.main === types_1.TypeEnum.CHAR ? "" : " "}" : "\\n");`);
            this.output.push(indent + `if (${name}.size() == 0) cout << endl;`);
            this.iterator.pop_it();
            return;
        }
        //Struct
        const struct = this.input.getStruct(type.structName);
        const properties = struct.fields
            .map((field) => `${name}.${varName(field.name)}`)
            .join(" << ' ' << ");
        this.output.push(`${indent}cout << ${properties} << endl;`);
    }
    print_lines(name, type, indent_lvl, style = types_1.FormatStyle.DEFAULT) {
        if (type.fitsInOneLine(this.input.structs, style)) {
            this.print_line(name, type, indent_lvl, style);
            return;
        }
        // Struct
        if (type.main === types_1.TypeEnum.OBJECT) {
            this.input.getStruct(type.structName).fields.forEach((field) => {
                this.print_lines(`${name}.${varName(field.name)}`, field.type, indent_lvl);
            });
            return;
        }
        //Array
        const inner_name = this.iterator.new_it();
        this.output.push(`${" ".repeat(this.indentation)}cout << ${name}.size() << endl;`);
        this.output.push(`${" ".repeat(this.indentation * indent_lvl)}for (const ${this.type_str(type.encapsulated)}& ${inner_name} : ${name}) {`);
        this.print_lines(inner_name, type.encapsulated, indent_lvl + 1);
        this.output.push(" ".repeat(this.indentation * indent_lvl) + "}");
        this.iterator.pop_it();
    }
    /* Read a variable */
    read_var(variable) {
        let size = "";
        if (variable.type.main === types_1.TypeEnum.ARRAY) {
            size = variable.type.size ? `(${varName(variable.type.size)})` : "";
        }
        this.main.push(`${this.type_str(variable.type)} ${varName(variable.name)}${size}; ///< ${variable.comment}`);
        this.read_lines(varName(variable.name), variable.type, varName(variable.type.size)
        //   true,
        );
    }
    genOutput(output) {
        this.print_lines(varName(output.name), output.type, 1, output.format_style);
    }
    placeholder() {
        const name = this.input.name;
        const args = [];
        this.input.inputs.forEach((arg) => {
            const argName = varName(arg.name);
            // this.method.push(`/// \\param ${arg.name} ${arg.comment}`);
            if ([types_1.TypeEnum.STRING, types_1.TypeEnum.OBJECT, types_1.TypeEnum.ARRAY].includes(arg.type.main)) {
                args.push(`${this.type_str(arg.type)}& ${argName}`);
                return;
            }
            args.push(`${this.type_str(arg.type)} ${argName}`);
        });
        this.method.push(`${this.type_str(this.input.output.type)} ${name}(${args.join(", ")});`);
    }
    content() {
        const indent = " ".repeat(this.indentation);
        const outputName = this.input.output.name
            ? varName(this.input.output.name)
            : constants_1.DEFAULT_OUTPUT_NAME;
        let output = '#include "solution.h"\n\n';
        output += "int main() {\n";
        output += indent + "string buffer;\n";
        this.main.forEach((line) => {
            output += indent + line + "\n";
        });
        const argsCall = this.input.inputs
            .map((variable) => varName(variable.name))
            .join(", ");
        output +=
            indent +
                `${this.type_str(this.input.output.type)} ${outputName} = ${this.input.name}(${argsCall});\n`;
        output += indent + 'cout << "@result@" << endl;\n';
        this.genOutput(this.input.output);
        this.output.forEach((line) => (output += line + "\n"));
        output += "}\n";
        return output;
    }
    genLib() {
        let output = "#pragma once\n";
        output += "#include <iostream>\n";
        output += "#include <string>\n";
        output += "#include <sstream>\n";
        const indent = " ".repeat(this.indentation);
        this.includes.forEach((line) => (output += `#include <${line}>\n`));
        output += "using namespace std;\n\n";
        this.input.structs.forEach((struct) => {
            // output += `/// ${struct.comment}\n`;
            output += `struct ${structName(struct.name)} {\n`;
            struct.fields.forEach((field) => {
                output +=
                    indent + `${this.type_str(field.type)} ${varName(field.name)};\n`;
            });
            output += "};\n\n";
        });
        this.method.forEach((line) => (output += line + "\n"));
        return output;
    }
}
function genCplusplus(inputSchema) {
    // const inputData = Input.formJson(inputSchema);
    const parser = new ParserCpp(inputSchema);
    inputSchema.inputs.forEach((variable) => parser.read_var(variable));
    parser.placeholder();
    return { main: parser.content(), lib: parser.genLib() };
}
exports.genCplusplus = genCplusplus;
function genCplusplusModule() {
    //
}
exports.genCplusplusModule = genCplusplusModule;
function genCplusplusSolution(placeholder, functionName) {
    let result = `#include "/app/solution.h"\n`;
    result += placeholder;
    return result;
}
exports.genCplusplusSolution = genCplusplusSolution;


/***/ }),

/***/ "./libs/code-gen/src/languages/javascript.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genJavascriptSolution = exports.genPlaceholderTest = exports.genJavascript = void 0;
const jsTemplate_1 = __webpack_require__("./libs/code-gen/src/utils/jsTemplate.ts");
const keywords_1 = __webpack_require__("./libs/code-gen/src/utils/keywords.ts");
const types_1 = __webpack_require__("./libs/code-gen/src/types.ts");
const utils_1 = __webpack_require__("./libs/code-gen/src/utils/utils.ts");
const INDENTATION = '    ';
/**
 * Transform a variable name into a valid one for Javascript
 * @param name
 * @returns
 */
function varName(name) {
    const candidate = (0, utils_1.camelCase)(name);
    return keywords_1.javascriptKeyword.has(candidate) ? candidate + '_' : candidate;
}
function typeString(type, inputData) {
    switch (type.main) {
        case types_1.TypeEnum.INTEGER:
            return 'number';
        case types_1.TypeEnum.CHAR:
            return 'string';
        case types_1.TypeEnum.STRING:
            return 'string';
        case types_1.TypeEnum.ARRAY:
            return `Array.<${typeString(type.encapsulated, inputData)}>`;
        case types_1.TypeEnum.OBJECT: {
            const struct = inputData.getStruct(type.structName);
            const typeStruct = struct.fields.map((field) => {
                return `'${field.name}': ${typeString(field.type, inputData)}`;
            });
            return `{${typeStruct.join(', ')}}`;
        }
        default:
            throw new Error('khong ton tai type');
    }
}
class ParserJS {
    /* Create the Javascript code to parse an input */
    constructor(input_data) {
        this.inputs = input_data;
        this.existingName = input_data.inputs
            .map((element) => varName(element.name))
            .concat(varName(input_data.name));
        this.iterator = new utils_1.IteratorName(this.existingName);
        this.words = new utils_1.WordsName(this.existingName);
    }
    /* Generate the Javascript code to read a line of given type */
    read_line(decl, name, type, size, indentLvl) {
        let lines, struct, words;
        const indent = INDENTATION.repeat(indentLvl);
        const start = indent + (decl ? 'const ' : '') + name + ' = ';
        if (type.main === types_1.TypeEnum.ARRAY) {
            const lines = [];
            const sizeName = size;
            // if (!size) {
            //   sizeName = varName(name) + 'Size';
            //   lines.push(`${indent}const ${sizeName} = Number(stdin[line++]);`);
            // }
            if (type.encapsulated.main === types_1.TypeEnum.CHAR) {
                lines.push(start + 'stdin[line++].split("");');
            }
            lines.push(start + `stdin[line++].split(" ", ${sizeName || -1}).map(Number);`);
            return lines;
        }
        if (type.main === types_1.TypeEnum.OBJECT) {
            struct = this.inputs.getStruct(type.structName);
            words = this.words.next_name();
            lines = [indent + `const ${words} = stdin[line++].split(" ");`, start + '{'];
            const fields = struct.fields.map((field, index) => {
                return `${indent}${INDENTATION}"${varName(field.name)}": ${field.type.main === types_1.TypeEnum.CHAR
                    ? `${words}[${index}]`
                    : `Number(${words}[${index}])`},`;
            });
            lines.push(...fields);
            lines.push(`${indent}};`);
            return lines;
        }
        return [
            start +
                {
                    [types_1.TypeEnum.INTEGER]: 'Number(stdin[line++]);',
                    [types_1.TypeEnum.CHAR]: 'stdin[line++];',
                    [types_1.TypeEnum.STRING]: 'stdin[line++];',
                }[type.main],
        ];
    }
    /* Generate the Javascript code to read the lines for a given type */
    read_lines(decl, variable, size, indentLvl) {
        if (variable.fitsInOneLine(this.inputs.structs)) {
            return this.read_line(decl, variable.name, variable.type, size, indentLvl);
        }
        const indent = INDENTATION.repeat(indentLvl);
        if (variable.type.main === types_1.TypeEnum.ARRAY) {
            const lines = [];
            let sizeName = size;
            if (!size) {
                sizeName = varName(variable.name) + 'Size';
                lines.push(`${indent}const ${sizeName} = Number(stdin[line++]);`);
            }
            lines.push(indent + `${decl ? 'const ' : ''}${variable.name} = [];`);
            const iterator = this.iterator.new_it();
            const inner_name = this.iterator.new_it();
            lines.push(indent + `for (let ${iterator} = 0; ${iterator} < ${sizeName}; ${iterator}++) {`);
            this.words.push_scope();
            const readLinesResult = this.read_lines(true, new types_1.Variable({ name: inner_name, type: variable.type.encapsulated }), varName(variable.type.encapsulated.size), indentLvl + 1);
            lines.push(...readLinesResult);
            lines.push(indent + INDENTATION + `${variable.name}.push(${inner_name});`);
            this.words.pop_scope();
            this.iterator.pop_it();
            this.iterator.pop_it();
            lines.push(`${indent}};`);
            return lines;
        }
        const struct = this.inputs.getStruct(variable.type.structName);
        const lines = [];
        lines.push(indent + `${decl ? 'const ' : ''}${variable.name} = {};`);
        const structNameTypeSize = struct.fieldsNameTypeSize(`${variable.name}.$$`, varName);
        structNameTypeSize.forEach(({ name, type, size }) => {
            const readLinesResult = this.read_lines(false, new types_1.Variable({ name, type }), size, indentLvl);
            lines.push(...readLinesResult);
        });
        return lines;
    }
    /* Generate the Javascript code to read all input variables */
    read_vars() {
        const lines = [];
        const allVariable = this.inputs.getAllVars();
        allVariable.forEach((variable$) => {
            if (variable$.length === 1) {
                const { name, type, formatStyle } = variable$[0];
                const readLinesResult = this.read_lines(true, new types_1.Variable({
                    name: varName(name),
                    type: type,
                    formatStyle: formatStyle,
                }), varName(type.size), 1);
                lines.push(...readLinesResult);
            }
            else {
                const variable = variable$.map((variable) => varName(variable.name)).join(', ');
                lines.push(`${INDENTATION}const [${variable}] = stdin[line++].split(" ").map(Number);`);
            }
        });
        return lines;
    }
}
function genJavascript(inputSchema) {
    // const inputData = Input.formJson(inputSchema);
    const args = inputSchema.inputs.map((i) => varName(i.name)).join(', ');
    const call = `${inputSchema.name}(${args});`;
    const parserJS = new ParserJS(inputSchema);
    const parser = parserJS.read_vars().join('\n');
    const result = (0, jsTemplate_1.jsTemplate)({
        call,
        parser,
        ind: INDENTATION,
        outputName: inputSchema.output.name,
        functionName: inputSchema.name,
    });
    return result;
}
exports.genJavascript = genJavascript;
function genPlaceholderTest(inputSchema) {
    // const inputData = Input.formJson(inputSchema);
    const args = inputSchema.inputs.map((i) => varName(i.name)).join(', ');
    const placeholderCall = `function ${inputSchema.name} (${args}) {\n\t\n};`;
    return placeholderCall;
}
exports.genPlaceholderTest = genPlaceholderTest;
function genJavascriptSolution(placeholder, functionName) {
    let result = placeholder + '\n';
    result += `module.exports = ${functionName}`;
    return result;
}
exports.genJavascriptSolution = genJavascriptSolution;


/***/ }),

/***/ "./libs/code-gen/src/languages/output.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genOutput = void 0;
const keywords_1 = __webpack_require__("./libs/code-gen/src/utils/keywords.ts");
const constants_1 = __webpack_require__("./libs/code-gen/src/configs/constants.ts");
const types_1 = __webpack_require__("./libs/code-gen/src/types.ts");
const jsTemplate_1 = __webpack_require__("./libs/code-gen/src/utils/jsTemplate.ts");
const utils_1 = __webpack_require__("./libs/code-gen/src/utils/utils.ts");
const INDENTATION = '    ';
/**
 * Transform a variable name into a valid one for Javascript
 * @param name
 * @returns
 */
function varName(name) {
    const candidate = (0, utils_1.camelCase)(name);
    if (['process', 'stdin', 'line', 'main'].includes(candidate)) {
        return candidate + '_';
    }
    return keywords_1.javascriptKeyword.has(candidate) ? candidate + '_' : candidate;
}
class ParserJSOutput {
    /* Create the Javascript code to parse an input */
    constructor(input_data) {
        this.input = input_data;
        this.existingName = input_data.inputs
            .map((element) => varName(element.name))
            .concat(varName(input_data.name));
        this.iterator = new utils_1.IteratorName(this.existingName);
        this.words = new utils_1.WordsName(this.existingName);
    }
    read_line(decl, name, type, size, indentLvl) {
        /* Generate the Javascript code to read a line of given type */
        let lines, struct, words;
        const indent = INDENTATION.repeat(indentLvl);
        const start = indent + (decl ? 'const ' : '') + name + ' = ';
        if (type.main === types_1.TypeEnum.ARRAY) {
            const lines = [];
            const sizeName = size;
            if (type.encapsulated.main === types_1.TypeEnum.CHAR) {
                lines.push(start + 'stdin[line++].split("");');
            }
            lines.push(start + `stdin[line++].split(" ", ${sizeName}).map(Number);`);
            return lines;
        }
        if (type.main === types_1.TypeEnum.OBJECT) {
            struct = this.input.getStruct(type.structName);
            words = this.words.next_name();
            lines = [indent + `const ${words} = stdin[line++].split(" ");`, start + '{'];
            const fields = struct.fields.map((field, index) => {
                return `${indent}${INDENTATION}"${varName(field.name)}": ${field.type.main === types_1.TypeEnum.CHAR
                    ? `${words}[${index}]`
                    : `Number(${words}[${index}])`},`;
            });
            lines.push(...fields);
            lines.push(`${indent}};`);
            return lines;
        }
        return [
            start +
                {
                    [types_1.TypeEnum.INTEGER]: 'Number(stdin[line++]);',
                    [types_1.TypeEnum.CHAR]: 'stdin[line++];',
                    [types_1.TypeEnum.STRING]: 'stdin[line++];',
                }[type.main],
        ];
    }
    read_lines(decl, variable, size, indentLvl) {
        /* Generate the Javascript code to read the lines for a given type */
        if (variable.fitsInOneLine(this.input.structs)) {
            return this.read_line(decl, variable.name, variable.type, size, indentLvl);
        }
        const indent = INDENTATION.repeat(indentLvl);
        if (variable.type.main === types_1.TypeEnum.ARRAY) {
            const lines = [];
            let sizeName = size;
            if (!size) {
                sizeName = varName(variable.name) + 'Size';
                lines.push(`${indent}const ${sizeName} = Number(stdin[line++]);`);
            }
            lines.push(indent + `${decl ? 'const ' : ''}${variable.name} = [];`);
            const iterator = this.iterator.new_it();
            const inner_name = this.iterator.new_it();
            lines.push(indent + `for (let ${iterator} = 0; ${iterator} < ${sizeName}; ${iterator}++) {`);
            this.words.push_scope();
            const readLinesResult = this.read_lines(true, new types_1.Variable({ name: inner_name, type: variable.type.encapsulated }), varName(variable.type.encapsulated.size), indentLvl + 1);
            lines.push(...readLinesResult);
            lines.push(indent + INDENTATION + `${variable.name}.push(${inner_name});`);
            this.words.pop_scope();
            this.iterator.pop_it();
            this.iterator.pop_it();
            lines.push(`${indent}};`);
            return lines;
        }
        const struct = this.input.getStruct(variable.type.structName);
        const lines = [];
        lines.push(indent + `${decl ? 'const ' : ''}${variable.name} = {};`);
        const structNameTypeSize = struct.fieldsNameTypeSize(`${variable.name}.$$`, varName);
        structNameTypeSize.forEach(({ name, type, size }) => {
            const readLinesResult = this.read_lines(false, new types_1.Variable({ name, type }), size, indentLvl);
            lines.push(...readLinesResult);
        });
        return lines;
    }
    read_vars() {
        /* Generate the Javascript code to read all input variables */
        const lines = [];
        const { name, type, formatStyle } = this.input.output;
        const readLinesResult = this.read_lines(true, new types_1.Variable({
            name: varName(name),
            type: type,
            formatStyle: formatStyle,
        }), varName(type.size), 1);
        lines.push(...readLinesResult);
        return lines;
    }
}
function genOutput(inputSchema) {
    const parserJS = new ParserJSOutput(inputSchema);
    const parser = parserJS.read_vars().join('\n');
    const outputName = inputSchema.output.name
        ? varName(inputSchema.output.name)
        : constants_1.DEFAULT_OUTPUT_NAME;
    return (0, jsTemplate_1.jsTemplateOutput)({
        ind: INDENTATION,
        parser,
        outputName,
    });
}
exports.genOutput = genOutput;
// genOutput();


/***/ }),

/***/ "./libs/code-gen/src/languages/python.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genPython = void 0;
const keywords_1 = __webpack_require__("./libs/code-gen/src/utils/keywords.ts");
const types_1 = __webpack_require__("./libs/code-gen/src/types.ts");
const utils_1 = __webpack_require__("./libs/code-gen/src/utils/utils.ts");
const INDENTATION = '    ';
/* Transform a variable name into a valid one for Python */
function varName(name) {
    const candidate = (0, utils_1.snakeCase)(name);
    return keywords_1.pythonKeyword.has(candidate) || candidate === 'dataclass'
        ? candidate + '_'
        : candidate;
}
function className(name) {
    /* Transform a class name into a valid one for Python */
    const candidate = (0, utils_1.pascalCase)(name);
    return candidate === 'List' ? candidate + '_' : candidate;
}
function typeString(type) {
    switch (type.main) {
        case types_1.TypeEnum.INTEGER:
            return 'int';
        case types_1.TypeEnum.CHAR:
            return 'str';
        case types_1.TypeEnum.STRING:
            return 'str';
        case types_1.TypeEnum.OBJECT:
            return className(type.structName);
        case types_1.TypeEnum.ARRAY:
            return `List[${typeString(type.encapsulated)}]`;
        default:
            throw new Error('khong ton tai type');
    }
}
function declareClasses(input_data) {
    /* Return declarations of structs as data classes */
    const lines = [];
    input_data.structs.forEach((struct) => {
        lines.push('@dataclass');
        lines.push(`class ${className(struct.name)}:`);
        lines.push(`${INDENTATION}"""${struct.comment}"""`);
        struct.fields.forEach((field) => {
            lines.push(`${INDENTATION}${varName(field.name)}: ` +
                `${typeString(field.type)}  # ${field.comment}`);
        });
    });
    return lines;
}
function declareImport(input_data) {
    const lines = ['import json'];
    if (input_data.structs) {
        lines.push('from dataclasses import dataclass');
    }
    let hasList = false;
    input_data.structs.forEach((struct) => {
        struct.fields.forEach((field) => {
            if (field.type.main === types_1.TypeEnum.ARRAY) {
                hasList = true;
            }
        });
    });
    input_data.inputs.forEach((variable) => {
        if (variable.type.main === types_1.TypeEnum.ARRAY) {
            hasList = true;
        }
    });
    if (hasList) {
        lines.push('from typing import List');
    }
    if (lines) {
        lines.push('');
    }
    return lines;
}
/* Wrap a line of function define/call just like black would do */
function wrapLine(begin, end, args, indent_lvl = 0) {
    const max_chars = 88;
    const args_size = args.join(', ').length;
    if (begin.length + end.length + args_size + INDENTATION.repeat(indent_lvl).length <=
        max_chars) {
        return [`${INDENTATION.repeat(indent_lvl)}${begin}${args.join(', ')}${end}`];
    }
    if (args_size + INDENTATION.repeat(indent_lvl + 1).length <= max_chars) {
        return [
            `${INDENTATION.repeat(indent_lvl)}${begin}`,
            `${INDENTATION.repeat(indent_lvl + 1)}${args.join(', ')}`,
            `${INDENTATION.repeat(indent_lvl)}${end}`,
        ];
    }
    return [`${INDENTATION.repeat(indent_lvl)}${begin}`]
        .concat(args.map((line) => `${INDENTATION.repeat(indent_lvl + 1)}${line},`))
        .concat([`${INDENTATION.repeat(indent_lvl)}${end}`]);
}
function readLine(type, input_data) {
    if (type.main === types_1.TypeEnum.ARRAY) {
        if (type.encapsulated.main === types_1.TypeEnum.CHAR) {
            return 'list(input())';
        }
        return 'list(map(int, input().split()))';
    }
    if (type.main === types_1.TypeEnum.OBJECT) {
        const struct = input_data.getStruct(type.structName);
        if (struct.fields.every((field) => field.type.main === types_1.TypeEnum.INTEGER)) {
            return `${className(struct.name)}(*map(int, input().split()))`;
        }
        if (struct.fields.every((field) => field.type.main === types_1.TypeEnum.CHAR)) {
            return `${className(struct.name)}(*input().split())`;
        }
        const lamdaStatment = 'lamda x, y: int(y) if x else y';
        const mappingStdin = struct.fields
            .map((field) => (field.type.main === types_1.TypeEnum.INTEGER ? 1 : 0))
            .join(', ');
        return `${className(struct.name)}(*map(${lamdaStatment}, (${mappingStdin}), input().split()))`;
    }
    return {
        [types_1.TypeEnum.INTEGER]: 'int(input())',
        [types_1.TypeEnum.CHAR]: 'input()[0]',
        [types_1.TypeEnum.STRING]: 'input()',
    }[type.main];
}
function readLines(type, size, input_data, style = types_1.FormatStyle.DEFAULT) {
    if (type.fitsInOneLine(input_data.structs, style)) {
        return [readLine(type, input_data)];
    }
    if (type.main == types_1.TypeEnum.ARRAY) {
        let lines = readLines(type.encapsulated, varName(type.encapsulated.size), input_data);
        if (lines.length === 1) {
            const candidate = `[${lines[0]} for _ in range(int(input()))]`;
            if (candidate.length <= 75) {
                return [candidate];
            }
        }
        lines.append(`for _ in range(int(input()))`);
        if (lines[0].length < 5) {
            lines[0] = '[' + lines[0];
        }
        lines = ['['].concat(lines.map((i) => INDENTATION + i));
        lines.append(']');
        return lines;
    }
    const struct = input_data.getStruct(type.structName);
    if (struct.is_sized_struct()) {
        const inner = 'i';
        const lines = readLines(struct.fields[1].type, inner, input_data);
        return [`(lambda ${inner}: ${className(struct.name)}(`, INDENTATION + `${inner},`]
            .concat(lines.map((i) => INDENTATION + i))
            .concat(['))(int(input()))']);
    }
    const fields = [];
    struct.fields.forEach((field) => {
        const lines = readLines(field.type, varName(field.type.size), input_data);
        lines[lines.length - 1] += ',';
        const fieldLines = lines.map((i) => INDENTATION + i);
        fields.push(...fieldLines);
    });
    return [`${className(struct.name)}(`].concat(fields).concat([')']);
}
function readVars(input_data) {
    const lines = [];
    const allVaraible = input_data.getAllVars();
    allVaraible.forEach((variables) => {
        if (variables.length === 1) {
            const variable = variables[0];
            const variableLines = readLines(variable.type, varName(variable.type.size), input_data, variable.formatStyle);
            variableLines[0] = `${varName(variable.name)} = ${variableLines[0]}`;
            lines.push(...variableLines);
        }
        else {
            const variables$ = variables.map((variable) => varName(variable.name)).join(', ');
            lines.push(variables$);
            lines.push(` = map(int, input().split())`);
        }
    });
    return lines;
}
class ParserPython {
    constructor(input_data) {
        this.input = input_data;
        this.main = [];
        this.method = [];
    }
    call(reprint = false) {
        const functionName = varName(this.input.name);
        const outputName = varName(this.input.output.name) || '__output__';
        const argsParam = this.input.inputs.map((element) => `${varName(element.name)}: ${typeString(element.type)}`);
        this.method.push(...wrapLine(`def ${functionName}(`, `) -> None:`, argsParam));
        //Todo comment
        // this.method.push(INDENTATION + '"""')
        // this.input.inputs.forEach(arg => {
        //   this.method.push(`${INDENTATION}:param ${varName(arg.name)}: ${arg.comment}`)
        // })
        // this.method.push(INDENTATION + '"""')
        // if(reprint) {
        // }
        // else{
        // }
        this.method.push('\n');
        this.method.push(INDENTATION + 'pass');
        const argsCall = this.input.inputs.map((element) => varName(element.name));
        this.main.push(...wrapLine(`${varName(this.input.output.name)} = ${functionName}(`, ')', argsCall));
        this.main.push(`print('@@result@@')`);
        this.main.push(`print(${outputName})`);
    }
    content() {
        let output = '';
        declareImport(this.input).forEach((line) => (output += line + '\n'));
        declareClasses(this.input).forEach((line) => (output += line + '\n'));
        this.main.push(...readVars(this.input));
        this.call();
        this.method.forEach((line) => (output += line + '\n'));
        // if (this.method) output += '\n';
        output += '\nif __name__ == "__main__":\n';
        this.main.forEach((line) => (output += INDENTATION + line + '\n'));
        return output;
    }
}
function genPython(inputSchema) {
    // const inputData = Input.formJson(inputSchema);
    const result = new ParserPython(inputSchema).content();
    return result;
}
exports.genPython = genPython;


/***/ }),

/***/ "./libs/code-gen/src/types.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = exports.Input = exports.Variable = exports.Struct = exports.FormatStyle = exports.TypeEnum = void 0;
const utils_1 = __webpack_require__("./libs/code-gen/src/utils/utils.ts");
const constants_1 = __webpack_require__("./libs/code-gen/src/configs/constants.ts");
var TypeEnum;
(function (TypeEnum) {
    TypeEnum["INTEGER"] = "INTEGER";
    TypeEnum["CHAR"] = "CHAR";
    TypeEnum["STRING"] = "STRING";
    TypeEnum["ARRAY"] = "ARRAY";
    TypeEnum["OBJECT"] = "OBJECT";
})(TypeEnum = exports.TypeEnum || (exports.TypeEnum = {}));
var FormatStyle;
(function (FormatStyle) {
    FormatStyle["DEFAULT"] = "DEFAULT";
    FormatStyle["NO_ENDLINE"] = "NO_ENDLINE";
    FormatStyle["FORCE_NEWLINES"] = "FORCE_NEWLINES";
})(FormatStyle = exports.FormatStyle || (exports.FormatStyle = {}));
/* Represent a struct (like in C) */
class Struct {
    constructor(data) {
        Object.assign(this, data);
    }
    /* A special kind of struct: first field is the size of the second */
    is_sized_struct() {
        return (this.fields.length === 2 &&
            this.fields[0].type.main === TypeEnum.INTEGER &&
            [TypeEnum.STRING, TypeEnum.ARRAY].includes(this.fields[1].type.main) &&
            this.fields[0].name === this.fields[1].type.size);
    }
    fieldsNameTypeSize(format_spec, varName) {
        let typeSize = this.fields.map((element) => varName(element.type.size));
        if (this.is_sized_struct()) {
            typeSize = ['', format_spec.replace('$$', varName(this.fields[0].name))];
        }
        const zipArray = (0, utils_1.zip)(this.fields, typeSize);
        return this.fields.map((field, index) => {
            return {
                name: format_spec.replace('$$', varName(zipArray[index][0].name)),
                type: zipArray[index][0].type,
                size: zipArray[index][1],
            };
        });
    }
    static formJson({ name, comment, fields }) {
        if (!name || !fields) {
            return null;
        }
        const fieldList = [];
        fields.forEach((element) => {
            const variable = Variable.fromJson(element);
            if (!variable)
                return null;
            fieldList.push(variable);
        });
        const customName = name.toUpperCase();
        return new Struct({ name: customName, comment, fields: fieldList });
    }
}
exports.Struct = Struct;
/* Everything there is to know about a variable */
class Variable {
    constructor(data = {}) {
        Object.assign(this, data);
    }
    /* Return False if more than one line is needed for this variable */
    fitsInOneLine(structs) {
        return this.type.fitsInOneLine(structs, this.formatStyle);
    }
    static fromJson({ name, comment, type, format }) {
        if (!name || !type) {
            return null;
        }
        const type$ = Type.fromString(type);
        if (!type$)
            return null;
        let formatStyle = FormatStyle.DEFAULT;
        if (format) {
            if (format === 'no_endlines') {
                if (type$.main != TypeEnum.INTEGER) {
                    return null;
                }
                formatStyle = FormatStyle.NO_ENDLINE;
            }
            else if (format === 'force_newlines') {
                if (type$.main != TypeEnum.ARRAY ||
                    type$.encapsulated === null ||
                    type$.encapsulated.main != TypeEnum.INTEGER) {
                    return null;
                }
                formatStyle = FormatStyle.FORCE_NEWLINES;
            }
            else {
                throw new Error('khong dung format');
            }
        }
        return new Variable({ name, comment, type: type$, formatStyle });
    }
}
exports.Variable = Variable;
/* Represents the user input, parsed */
class Input {
    constructor(data) {
        Object.assign(this, data);
    }
    getStruct(name) {
        /* Get a struct by its name (or throw StopIteration) */
        return this.structs.find((struct) => struct.name === name);
    }
    getAllVars() {
        const ret = [];
        let current = [];
        this.inputs.forEach((element) => {
            current.push(element);
            if (element.formatStyle !== FormatStyle.NO_ENDLINE) {
                ret.push(current);
                current = [];
            }
        });
        return ret;
    }
    static formJson({ name, structs, inputs, subject, output }) {
        const variableLookup = {};
        const variableDicts = [];
        const structs$ = [];
        if (structs) {
            structs.forEach((struct) => {
                const struct$ = Struct.formJson(struct);
                if (!struct$)
                    return null;
                structs$.push(struct$);
                struct$.fields.forEach((field) => {
                    if (variableLookup[field.name]) {
                        throw new Error('Several struct fields are called' + field.name);
                    }
                    variableLookup[field.name] = field;
                });
                variableDicts.concat(struct$.fields);
            });
        }
        const variables = [];
        inputs.forEach((input) => {
            const variable = Variable.fromJson(input);
            if (!variable)
                return null;
            variables.push(variable);
            if (variableLookup[variable.name]) {
                throw new Error('Several variables or struct fields ' + variable.name);
            }
            variableLookup[variable.name] = variable;
            variableDicts.push(input);
        });
        // Todo check vaild variable name
        if (!output.name)
            output.name = constants_1.DEFAULT_OUTPUT_NAME;
        const output$ = Variable.fromJson(output);
        return new Input({
            name,
            structs: structs$,
            inputs: variables,
            subject,
            output: output$,
        });
    }
}
exports.Input = Input;
/* Represents the type of a variable */
class Type {
    constructor(data) {
        Object.assign(this, data);
    }
    // toString() {
    //   switch (this.main) {
    //     case TypeEnum.INTEGER:
    //       return 'int';
    //     case TypeEnum.CHAR:
    //       return 'char';
    //     case TypeEnum.STRING:
    //       return `str(${this.size})`;
    //     case TypeEnum.ARRAY:
    //       return `Array[${this.encapsulated}](${this.size})`;
    //     case TypeEnum.OBJECT:
    //       return `@${this.structName}`;
    //     default:
    //       throw new Error('not exist type');
    //   }
    // }
    canBeInlined() {
        /* Can we parse several of this type on a single line */
        return [TypeEnum.INTEGER, TypeEnum.CHAR].includes(this.main);
    }
    fitsInOneLine(structs, style = FormatStyle.DEFAULT) {
        const fitOneLineType = [TypeEnum.INTEGER, TypeEnum.CHAR, TypeEnum.STRING];
        if (fitOneLineType.includes(this.main))
            return true;
        switch (this.main) {
            case TypeEnum.ARRAY:
                return this.encapsulated.canBeInlined();
            case TypeEnum.OBJECT: {
                const struct = structs.find((struct) => struct.name === this.structName);
                return struct.fields.every((field) => {
                    return field.type.canBeInlined();
                });
            }
            default:
                throw new Error('khong ton tai key');
        }
    }
    static fromString(string) {
        switch (string) {
            case TypeEnum.INTEGER:
                return new Type({ main: TypeEnum.INTEGER });
            case TypeEnum.CHAR:
                return new Type({ main: TypeEnum.CHAR });
            case TypeEnum.STRING:
                return new Type({ main: TypeEnum.STRING });
            default: {
                const parseTypeResult = parseType(string);
                if (parseTypeResult) {
                    if (parseTypeResult.type === TypeEnum.OBJECT) {
                        return new Type({
                            main: TypeEnum.OBJECT,
                            structName: parseTypeResult.encapsulated.toUpperCase(),
                        });
                    }
                    if (parseTypeResult.type === TypeEnum.ARRAY) {
                        const encapsulated = Type.fromString(parseTypeResult.encapsulated);
                        return new Type({
                            main: TypeEnum.ARRAY,
                            size: parseTypeResult.size,
                            encapsulated,
                        });
                    }
                }
                return null;
            }
        }
    }
}
exports.Type = Type;
// (Object|Array)({|[])innerType(]|})(size)
function parseType(string) {
    const regex = /^(OBJECT|ARRAY)((\[|{)([A-Za-z][A-Za-z0-9{}[\]()) ]*)(}|\]))?(\(([A-Za-z0-9 ])\))?$/;
    const result = string.match(regex);
    if (result) {
        return {
            type: result[1],
            encapsulated: result[4],
            size: result[7],
        };
    }
    return null;
}


/***/ }),

/***/ "./libs/code-gen/src/utils/jsTemplate.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jsTemplateBackup = exports.jsTemplateOutput = exports.jsTemplate = exports.template = void 0;
function template(strings, ...keys) {
    return function (...values) {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach(function (key, i) {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    };
}
exports.template = template;
exports.jsTemplate = template `
"use strict";
const ${'functionName'} =  require('/user-solve/solution');

function main(stdin) {
${'ind'}let line = 0;

${'parser'}

${'ind'}const ${'outputName'} = ${'call'}
${'ind'}console.log('@result@');
${'ind'}console.log(JSON.stringify(${'outputName'}));

}

let stdin = "";
process.stdin.on("data", data => stdin += data.toString())
             .on("end", () => main(stdin.split("\\n")));
`;
exports.jsTemplateOutput = template `
function main(stdin) {
${'ind'}let line = 0;
${'parser'}
${'ind'}return JSON.stringify(${'outputName'})
}
module.exports = { main };
`;
exports.jsTemplateBackup = template `
"use strict";

${'placeholder'}

function main(stdin) {
${'ind'}let line = 0;

${'parser'}
${'ind'}${'placeholderCall'}
}

let stdin = "";
process.stdin.on("data", data => stdin += data.toString())
             .on("end", () => main(stdin.split("\\n")));
`;


/***/ }),

/***/ "./libs/code-gen/src/utils/keywords.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cplusplusKeyword = exports.pythonKeyword = exports.javascriptKeyword = void 0;
exports.javascriptKeyword = new Set([
    "process",
    "stdin",
    "line",
    "main",
    "abstract",
    "arguments",
    "await",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "eval",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield"
]);
exports.pythonKeyword = new Set([
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
]);
exports.cplusplusKeyword = new Set([
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "bool",
    "break",
    "case",
    "catch",
    "char",
    "char16_t",
    "char32_t",
    "class",
    "compl",
    "concept",
    "const",
    "constexpr",
    "const_cast",
    "continue",
    "co_await",
    "co_return",
    "co_yield",
    "decltype",
    "default",
    "delete",
    "do",
    "double",
    "dynamic_cast",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "float",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "int",
    "long",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast",
    "requires",
    "return",
    "short",
    "signed",
    "sizeof",
    "static",
    "static_assert",
    "static_cast",
    "struct",
    "string",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "unsigned",
    "using",
    "virtual",
    "void",
    "volatile",
    "wchar_t",
    "while",
    "xor",
    "xor_eq"
]);


/***/ }),

/***/ "./libs/code-gen/src/utils/utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WordsName = exports.IteratorName = exports.zip = exports.intToIterator = exports.sortCompareString = exports.pascalCase = exports.specialCaseToCamelCase = exports.snakeCase = exports.snakeCaseWithoutDot = exports.camelCase = exports.fitOneLine = exports.canBeOneLine = void 0;
function canBeOneLine(type) {
    const canBeOneLineType = ['int', 'char'];
    return canBeOneLineType.includes(type);
}
exports.canBeOneLine = canBeOneLine;
function fitOneLine(input, structs) {
    const fitOneLineType = ['int', 'char', 'string'];
    if (fitOneLineType.includes(input.type))
        return true;
    if (input.type === 'list') {
        return canBeOneLine(input.encapsulated.type);
    }
    if (input.type === 'struct') {
        const struct = structs.find((struct) => struct.name == input.name);
        for (let i = 0; i < struct.fields.length; i++) {
            if (!canBeOneLine(struct.fields[i].type)) {
                return false;
            }
        }
        return true;
    }
    return 'khong phai type';
}
exports.fitOneLine = fitOneLine;
function camelCase(string = '') {
    return string.replace(/^([A-Z])|\W(\w)/g, function (match, p1, p2, offset) {
        if (p2)
            return p2.toUpperCase();
        return p1.toLowerCase();
    });
}
exports.camelCase = camelCase;
/**
 * 1.2 ==> 1_2
 * @param string
 * @returns
 */
function snakeCaseWithoutDot(string = '') {
    return string
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join('_');
}
exports.snakeCaseWithoutDot = snakeCaseWithoutDot;
/**
 * 1.2 ==> 1.2
 * @param string
 * @returns
 */
function snakeCase(string = '') {
    return string
        .replace(/[^a-zA-Z0-9_.]+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join('_');
}
exports.snakeCase = snakeCase;
function specialCaseToCamelCase(string, character) {
    const pattern = `[${character}][a-z]`;
    const regex = new RegExp(pattern, 'g');
    return string.replace(regex, (group) => group.slice(-1).toUpperCase());
}
exports.specialCaseToCamelCase = specialCaseToCamelCase;
function pascalCase(string) {
    return (' ' + string).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase();
    });
}
exports.pascalCase = pascalCase;
function sortCompareString(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
exports.sortCompareString = sortCompareString;
function intToIterator(value = 104) {
    if (value < 105) {
        return String.fromCharCode(105);
    }
    return String.fromCharCode(value);
}
exports.intToIterator = intToIterator;
const zip = (a, b) => a.map((k, i) => [k, b[i]]);
exports.zip = zip;
/**
 * Map a integer to a iterator name (1 -> i, 18 -> z, 19 -> ii, ...)
 * @param value
 * @returns
 */
function intToIteratorName(value = 1) {
    const charCode = String.fromCharCode(((value - 1) % 18) + 105);
    return charCode.repeat((value - 1) / 18 + 1);
}
/**
 * Give valid iterator names, like i, j, k, preventing scope conflicts
 */
class IteratorName {
    constructor(existingName) {
        this.existingNames = existingName.map((element) => element.trim().toLowerCase());
        this.current = 0;
    }
    new_it() {
        /* Return the name of the next iterator */
        this.current += 1;
        while (this.existingNames.includes(intToIteratorName(this.current))) {
            this.current += 1;
        }
        return intToIteratorName(this.current);
    }
    /* Signal that the scope of the last iterator ended */
    pop_it() {
        this.current -= 1;
        while (this.current > 0 &&
            this.existingNames.includes(intToIteratorName(this.current))) {
            this.current -= 1;
        }
    }
}
exports.IteratorName = IteratorName;
class WordsName {
    /* Give valid variable names starting with 'words' */
    constructor(existingNames, cs_mode = false) {
        this.existingNames = existingNames.map((element) => element.trim().split(' ').join(''));
        this.current = -1;
        this.before_scopes = [-1];
        this.cs_mode = cs_mode;
        this.above_scopes = [new Set()];
        this.other_scopes = [new Set()];
    }
    next_name() {
        /* Give the next variable name */
        let current;
        this.current += 1;
        current = this.current;
        if (this.cs_mode) {
            current = 0;
            while (!this._is_possible_value(current)) {
                current += 1;
            }
        }
        const candidate = `words${current !== 0 ? current : ''}`;
        if (this.existingNames.includes(candidate)) {
            return this.next_name();
        }
        this.above_scopes.slice(-1)[0].add(current);
        return candidate;
    }
    _is_possible_value(value) {
        this.above_scopes.forEach((element) => {
            if (element.has(value)) {
                return false;
            }
        });
        const lastOtherScope = this.other_scopes[this.other_scopes.length];
        if (lastOtherScope.has(value) || lastOtherScope.has(this.cs_mode)) {
            return false;
        }
        const candidate = `words${value !== 0 ? value : ''}`;
        return !this.existingNames.includes(candidate);
    }
    push_scope() {
        /* Declare a new scope */
        this.before_scopes.push(this.current);
        this.above_scopes.push(new Set());
        this.other_scopes.push(new Set());
    }
    pop_scope() {
        /* Declare a scope's end */
        this.current = this.before_scopes.pop();
        this.other_scopes.slice(-2)[0] = this.other_scopes.pop();
        this.other_scopes.slice(-1)[0] = this.above_scopes.pop();
    }
}
exports.WordsName = WordsName;


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

/***/ "bull":
/***/ ((module) => {

module.exports = require("bull");

/***/ }),

/***/ "del":
/***/ ((module) => {

module.exports = require("del");

/***/ }),

/***/ "dockerode":
/***/ ((module) => {

module.exports = require("dockerode");

/***/ }),

/***/ "memory-streams":
/***/ ((module) => {

module.exports = require("memory-streams");

/***/ }),

/***/ "nestjs-pino":
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "nestjs-prisma":
/***/ ((module) => {

module.exports = require("nestjs-prisma");

/***/ }),

/***/ "pino":
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ "pino-pretty":
/***/ ((module) => {

module.exports = require("pino-pretty");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "slugify":
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "uuid":
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "async_hooks":
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "worker_threads":
/***/ ((module) => {

module.exports = require("worker_threads");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
const challenge_module_1 = __webpack_require__("./apps/challenge/src/challenge/challenge.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(challenge_module_1.AppModule);
        const globalPrefix = 'challenges';
        app.setGlobalPrefix(globalPrefix);
        app.connectMicroservice({
            transport: microservices_1.Transport.NATS,
            options: {
                servers: ['nats://localhost:4222'],
                queue: 'challenge_queue',
            },
        });
        yield app.startAllMicroservices();
        const port = 4001;
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