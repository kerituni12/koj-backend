/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/worker/src/logger.ts":
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

/***/ "bull":
/***/ ((module) => {

module.exports = require("bull");

/***/ }),

/***/ "dockerode":
/***/ ((module) => {

module.exports = require("dockerode");

/***/ }),

/***/ "memory-streams":
/***/ ((module) => {

module.exports = require("memory-streams");

/***/ }),

/***/ "pino":
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ "pino-pretty":
/***/ ((module) => {

module.exports = require("pino-pretty");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "uuid":
/***/ ((module) => {

module.exports = require("uuid");

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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const code_executor_1 = __webpack_require__("./libs/code-executor/src/index.ts");
const logger_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/worker/src/logger.ts"));
/**
 * name, redis, folderPath, default folderPath is /tmp/code-exec
 * (folderPath will be mounted in container,
 * the code and testcases will be saved here)
 */
const worker = new code_executor_1.Worker("myExecutor", "redis://127.0.0.1:6379", "./transform-worker.js");
function main() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        logger_1.default.info(code_executor_1.languages);
        /* array of languages is optional argument */
        yield worker.build(["Cplusplus", "Javascript"]);
        worker.start();
        worker.pause();
        worker.resume();
        // worker.stop();
    });
}
main();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map