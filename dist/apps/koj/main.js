/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/koj/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/koj/src/app/app.service.ts");
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
let AppController = class AppController {
    constructor(appService, logger) {
        this.appService = appService;
        this.logger = logger;
    }
    getData(req) {
        this.logger.info('hello controllere');
        return this.appService.getData();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/'),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object, typeof (_b = typeof nestjs_pino_1.PinoLogger !== "undefined" && nestjs_pino_1.PinoLogger) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/koj/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const config_1 = __webpack_require__("@nestjs/config");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const nestjs_redis_1 = __webpack_require__("@liaoliaots/nestjs-redis");
const apollo_1 = __webpack_require__("@nestjs/apollo");
const nestjs_otel_1 = __webpack_require__("nestjs-otel");
const config_2 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/configs/config.ts"));
const graphql_config_1 = __webpack_require__("./apps/koj/src/configs/graphql.config.ts");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const trackip_middleware_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/middleware/trackip.middleware.ts"));
const logging_middleware_1 = __webpack_require__("./apps/koj/src/middleware/logging.middleware.ts");
const app_service_1 = __webpack_require__("./apps/koj/src/app/app.service.ts");
const app_controller_1 = __webpack_require__("./apps/koj/src/app/app.controller.ts");
const role_module_1 = __webpack_require__("./apps/koj/src/modules/role/role.module.ts");
const user_module_1 = __webpack_require__("./apps/koj/src/modules/user/user.module.ts");
const post_module_1 = __webpack_require__("./apps/koj/src/modules/post/post.module.ts");
const auth_module_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.module.ts");
const group_module_1 = __webpack_require__("./apps/koj/src/modules/group/group.module.ts");
const role_controller_1 = __webpack_require__("./apps/koj/src/modules/role/role.controller.ts");
const challenge_module_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.module.ts");
const role_module_2 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.module.ts");
const policy_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.module.ts");
const domain_module_1 = __webpack_require__("./apps/koj/src/modules/domain/domain.module.ts");
const comment_module_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.module.ts");
const domain_middleware_1 = __webpack_require__("./apps/koj/src/middleware/domain.middleware.ts");
const kafka_module_1 = __webpack_require__("./apps/koj/src/kafka/kafka.module.ts");
const grapqhl_scalar_1 = __webpack_require__("./apps/koj/src/grapqhl-scalar.ts");
const submission_module_1 = __webpack_require__("./apps/koj/src/modules/submission/submission.module.ts");
const submission_statistic_module_1 = __webpack_require__("./apps/koj/src/modules/submission-statistic/submission-statistic.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(trackip_middleware_1.default, domain_middleware_1.DomainMiddleware).forRoutes("*");
    }
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [config_2.default] }),
            nestjs_prisma_1.PrismaModule.forRootAsync({
                isGlobal: true,
                useFactory: () => ({
                    prismaOptions: { log: ["info", "query"], errorFormat: "minimal" },
                    middlewares: [(0, logging_middleware_1.loggingMiddleware)()]
                })
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                useClass: graphql_config_1.GqlConfig
            }),
            nestjs_otel_1.OpenTelemetryModule.forRoot(),
            nestjs_redis_1.RedisModule.forRoot({
                config: {
                    host: "localhost",
                    port: 6379
                }
            }),
            logger_module_1.LoggerModule,
            kafka_module_1.KafkaModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
            post_module_1.PostModule,
            challenge_module_1.ChallengeModule,
            group_module_1.GroupModule,
            policy_module_1.PolicyModule,
            role_module_2.RoleGroupModule,
            domain_module_1.DomainModule,
            comment_module_1.CommentModule,
            submission_module_1.SubmissionModule,
            submission_statistic_module_1.SubmissionStatisticModule
        ],
        controllers: [app_controller_1.AppController, role_controller_1.RoleController],
        providers: [
            app_service_1.AppService,
            grapqhl_scalar_1.DateScalar
            // {
            //   provide: APP_INTERCEPTOR,
            //   useClass: ErrorsInterceptor,
            // },
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/koj/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const tracer_1 = __webpack_require__("./apps/koj/src/tracing/tracer.ts");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        // throw new NotImplementedException({ message: 'heelo', level: 1 });
        const result = this.testError(1);
        return { message: 'hello', result };
        // return { message: 'Welcome to koj!' };
    }
    testError(a) {
        return tracer_1.tracer.startActiveSpan('hello', (span) => {
            try {
                if (a) {
                    const error = new common_1.NotImplementedException({ message: 'test error' });
                    span.recordException(error);
                    throw error;
                }
                return 'ok';
            }
            finally {
                span.end();
            }
        });
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/koj/src/configs/config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_1 = __webpack_require__("path");
const config = {
    app: {
        port: parseInt(process.env.PORT, 10) || 3000,
        cors: {
            enabled: true,
        },
        globalPrefix: 'api',
    },
    swagger: {
        enabled: true,
        title: 'Nestjs FTW',
        description: 'The nestjs API description',
        version: '1.5',
        path: 'api',
    },
    graphql: {
        path: 'api/graphql',
        playgroundEnabled: false,
        debug: true,
        schemaDestination: (0, path_1.join)(__dirname, 'src/schema.gql'),
        sortSchema: true,
    },
    security: {
        expiresIn: '15d',
        refreshIn: '7d',
        bcryptSaltOrRound: 10,
    },
};
exports["default"] = () => config;


/***/ }),

/***/ "./apps/koj/src/configs/graphql.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlConfig = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const apollo_server_core_1 = __webpack_require__("apollo-server-core");
const tracer_1 = __webpack_require__("./apps/koj/src/tracing/tracer.ts");
const api_1 = __webpack_require__("@opentelemetry/api");
let GqlConfig = class GqlConfig {
    constructor(configService) {
        this.configService = configService;
    }
    createGqlOptions() {
        const graphqlConfig = this.configService.get("graphql");
        return {
            path: graphqlConfig.path,
            // schema options
            autoSchemaFile: graphqlConfig.schemaDestination || "./src/schema.graphql",
            sortSchema: graphqlConfig.sortSchema,
            buildSchemaOptions: {
                numberScalarMode: "integer"
            },
            fieldResolverEnhancers: ["guards", "interceptors", "filters"],
            // subscription
            installSubscriptionHandlers: true,
            debug: graphqlConfig.debug,
            stopOnTerminationSignals: true,
            plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
            playground: graphqlConfig.playgroundEnabled,
            cors: {
                credentials: true,
                origin: true
                // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
                // allowedHeaders: "Content-Type,Accept,Authorization,Access-Control-Allow-Origin"
            },
            // resolvers: { DateTime: GraphQLDateTime },
            context: ({ req, res }) => ({ req, res }),
            formatError(error) {
                var _a, _b, _c;
                console.log("🚀 ~ file: graphql.config.ts ~ line 37 ~ GqlConfig ~ formatError ~ err", error, error.extensions.exception);
                // From handled exception
                if ((_a = error.extensions.response) === null || _a === void 0 ? void 0 : _a.statusCode) {
                    return error;
                }
                const span = tracer_1.tracer.startSpan("exception");
                api_1.trace.setSpan(api_1.context.active(), span);
                span.recordException(error);
                span.setAttributes({
                    exceptionLevel: "validate"
                });
                span.end();
                if ((_c = (_b = error.extensions) === null || _b === void 0 ? void 0 : _b.exception) === null || _c === void 0 ? void 0 : _c.stacktrace) {
                    delete error.extensions.exception.stacktrace;
                }
                return error;
            }
        };
    }
};
GqlConfig = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], GqlConfig);
exports.GqlConfig = GqlConfig;


/***/ }),

/***/ "./apps/koj/src/configs/nats.config.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.natsConfig = void 0;
exports.natsConfig = {
    servers: [process.env.NATS_URL || 'nats://localhost:4222'],
};


/***/ }),

/***/ "./apps/koj/src/decorators/gql-context.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlContext = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
const common_1 = __webpack_require__("@nestjs/common");
exports.GqlContext = (0, common_1.createParamDecorator)((data, ctx) => {
    const gqlCtx = graphql_1.GqlExecutionContext.create(ctx);
    const request = gqlCtx.getContext().req;
    return request.context;
});


/***/ }),

/***/ "./apps/koj/src/decorators/gql-domain-id.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainId = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
const common_1 = __webpack_require__("@nestjs/common");
exports.DomainId = (0, common_1.createParamDecorator)((data, ctx) => {
    const gqlCtx = graphql_1.GqlExecutionContext.create(ctx);
    const request = gqlCtx.getContext().req;
    return request.domainId;
});


/***/ }),

/***/ "./apps/koj/src/exceptions/exceptions.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const tracer_1 = __webpack_require__("./apps/koj/src/tracing/tracer.ts");
const common_1 = __webpack_require__("@nestjs/common");
const api_1 = __webpack_require__("@opentelemetry/api");
const client_1 = __webpack_require__("@prisma/client");
const defaultInternalException = {
    message: 'Co loi tu he thong',
    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    level: 'error',
};
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const span = tracer_1.tracer.startSpan('exception');
        api_1.trace.setSpan(api_1.context.active(), span);
        span.recordException(exception);
        console.log('🚀 ~ file: exceptions.ts ~ line 18 ~ AllExceptionsFilter ~ exception', exception);
        if (exception instanceof client_1.Prisma.PrismaClientValidationError) {
            exception = new common_1.BadRequestException(exception.message);
        }
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (exception.code === 'P2002') {
                exception = new common_1.ConflictException('Resource already exist');
            }
            else {
                exception = new common_1.InternalServerErrorException(Object.assign(Object.assign({}, defaultInternalException), { info: exception.code }));
            }
        }
        // Internal error . Only http exception have getStatus
        if (!exception.getStatus) {
            exception = new common_1.InternalServerErrorException(defaultInternalException);
        }
        const ctx = host.switchToHttp();
        const statusCode = exception.getStatus();
        if (host.getType() === 'graphql') {
            // Graphql must include statusCode in exception to exclude stacktrace
            const _a = exception.getResponse(), { level = 'unset' } = _a, execptionResponse = (0, tslib_1.__rest)(_a, ["level"]);
            execptionResponse.statusCode = statusCode;
            span.setAttributes({
                exceptionLevel: level,
            });
            span.end();
            return new common_1.HttpException(execptionResponse, statusCode);
        }
        const _b = exception.getResponse(), { level = 'unset' } = _b, execptionResponse = (0, tslib_1.__rest)(_b, ["level"]);
        const response = ctx.getResponse();
        span.setAttributes({
            exceptionLevel: level,
        });
        span.end();
        return response.status(statusCode).json(execptionResponse);
    }
};
AllExceptionsFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


/***/ }),

/***/ "./apps/koj/src/grapqhl-scalar.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateScalar = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("graphql");
let DateScalar = class DateScalar {
    constructor() {
        this.description = 'Date custom scalar type';
    }
    parseValue(value) {
        return new Date(value); // value from the client
    }
    serialize(value) {
        return value; // value sent to the client
    }
    parseLiteral(ast) {
        if (ast.kind === graphql_2.Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
};
DateScalar = (0, tslib_1.__decorate)([
    (0, graphql_1.Scalar)('Date', (type) => Date)
], DateScalar);
exports.DateScalar = DateScalar;


/***/ }),

/***/ "./apps/koj/src/kafka/consumer.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsumerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const kafkajs_1 = __webpack_require__("kafkajs");
let ConsumerService = class ConsumerService {
    constructor() {
        this.kafka = new kafkajs_1.Kafka({
            brokers: ['localhost:29092'],
        });
        this.consumers = [];
        this.HEARTBEAT_CHECK_INTERVAL = 30000;
    }
    consume(topic, config) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const lastHeartbeat = { date: new Date() };
            const consumer = this.kafka.consumer({
                groupId: 'nestjs-kafka',
                heartbeatInterval: 15000,
            });
            consumer.on('consumer.heartbeat', () => {
                lastHeartbeat.date = new Date();
            });
            consumer.on('consumer.disconnect', () => {
                this.startHeartbeatCheck(lastHeartbeat, consumer, topic, config);
            });
            yield consumer.connect();
            yield consumer.subscribe(topic);
            yield consumer.run(config);
            this.consumers.push(consumer);
        });
    }
    startHeartbeatCheck(lastHeartbeat, consumer, topic, config) {
        const interval = setInterval(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const now = new Date();
            const heartbBeat = lastHeartbeat.date.getTime() < now.getTime() - this.HEARTBEAT_CHECK_INTERVAL;
            if (heartbBeat) {
                console.log(`Last heartbeat was at ${lastHeartbeat.date}`);
                try {
                    yield consumer.connect();
                    yield consumer.subscribe(topic);
                    clearInterval(interval);
                    yield consumer.run(config);
                    lastHeartbeat.date = new Date();
                }
                catch (error) {
                    console.log(error);
                }
                console.log('affter re-connect');
            }
        }), this.HEARTBEAT_CHECK_INTERVAL);
    }
    onApplicationShutdown() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            for (const consumer of this.consumers) {
                yield consumer.disconnect();
            }
        });
    }
};
ConsumerService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], ConsumerService);
exports.ConsumerService = ConsumerService;


/***/ }),

/***/ "./apps/koj/src/kafka/kafka.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const consumer_service_1 = __webpack_require__("./apps/koj/src/kafka/consumer.service.ts");
const producer_service_1 = __webpack_require__("./apps/koj/src/kafka/producer.service.ts");
let KafkaModule = class KafkaModule {
};
KafkaModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [producer_service_1.ProducerService, consumer_service_1.ConsumerService],
        exports: [producer_service_1.ProducerService, consumer_service_1.ConsumerService],
    })
], KafkaModule);
exports.KafkaModule = KafkaModule;


/***/ }),

/***/ "./apps/koj/src/kafka/producer.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProducerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const kafkajs_1 = __webpack_require__("kafkajs");
let ProducerService = class ProducerService {
    constructor() {
        this.kafka = new kafkajs_1.Kafka({
            brokers: ['localhost:29092'],
        });
        this.producer = this.kafka.producer();
    }
    onModuleInit() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.producer.connect();
        });
    }
    produce(record) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.producer.send(record);
        });
    }
    onApplicationShutdown() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.producer.disconnect();
        });
    }
};
ProducerService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], ProducerService);
exports.ProducerService = ProducerService;


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

/***/ "./apps/koj/src/middleware/domain.middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const domain_service_1 = __webpack_require__("./apps/koj/src/modules/domain/domain.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let DomainMiddleware = class DomainMiddleware {
    constructor(domain) {
        this.domain = domain;
    }
    use(req, res, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const host = req.headers['x-domain'] || req.hostname;
            const domain = yield this.domain.getDomainFromHost(host);
            if (!domain) {
                throw new common_1.NotFoundException('khong co domain id');
            }
            req.domainId = domain.id;
            next();
        });
    }
};
DomainMiddleware = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof domain_service_1.DomainService !== "undefined" && domain_service_1.DomainService) === "function" ? _a : Object])
], DomainMiddleware);
exports.DomainMiddleware = DomainMiddleware;


/***/ }),

/***/ "./apps/koj/src/middleware/logging.middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.minifyString = exports.loggingMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
function loggingMiddleware() {
    return (params, next) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const before = Date.now();
        const result = yield next(params);
        const after = Date.now();
        const identity = params.model
            ? `${params.model}.${params.action}`
            : `${params.action}`;
        console.log(`Prisma Query ${identity} took ${after - before}ms`);
        return result;
    });
}
exports.loggingMiddleware = loggingMiddleware;
function minifyString(string) {
    return string.replace(/\s+/g, ' ').trim();
}
exports.minifyString = minifyString;


/***/ }),

/***/ "./apps/koj/src/middleware/trackip.middleware.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const request_ip_1 = __webpack_require__("@supercharge/request-ip");
function trackIpMiddleware(req, res, next) {
    const ip = (0, request_ip_1.getClientIp)(req);
    req.userIp = ip;
    next();
}
exports["default"] = trackIpMiddleware;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const express_1 = __webpack_require__("express");
const permission_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/permission/permission.service.ts");
const google_service_1 = __webpack_require__("./apps/koj/src/modules/auth/provider/google.service.ts");
const github_service_1 = __webpack_require__("./apps/koj/src/modules/auth/provider/github.service.ts");
let AuthController = class AuthController {
    constructor(authService, userService, githubService, googleService, permissionSerivce) {
        this.authService = authService;
        this.userService = userService;
        this.githubService = githubService;
        this.googleService = googleService;
        this.permissionSerivce = permissionSerivce;
    }
    //   @Post('register')
    //   async register(@Body() registrationData: RegisterDto) {
    //     await this.authService.register(registrationData);
    //     // await this.emailConfirmService.sendVerificationLink(registrationData.email);
    //   }
    logIn(request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { user } = request;
            return this.authService.login(user, request);
        });
    }
    refresh(request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const $user = request.user;
            const user = (yield this.userService.findUnique({
                id: $user.userId
            }));
            const [accessToken, refreshToken] = yield this.authService.generateToken(user);
            const [accessTokenHeader, accessTokenPayload, accessTokenSignature] = accessToken.split(".");
            const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] = refreshToken.split(".");
            const accessTokenCookieOptions = this.authService.getJwtAccessTokenOptions();
            const refreshTokenCookieOptions = this.authService.getJwtRefreshTokenOptions();
            request.res.cookie("a_sign", accessTokenSignature, accessTokenCookieOptions);
            request.res.cookie("r_sign", refreshTokenSignature, refreshTokenCookieOptions);
            request.res.cookie("a_header", accessTokenHeader, accessTokenCookieOptions);
            request.res.cookie("r_header", refreshTokenHeader, refreshTokenCookieOptions);
            return {
                accessTokenPayload,
                refreshTokenPayload
            };
        });
    }
    googleAuth(data, request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.googleService.authWithGoogle(data, request);
        });
    }
    githubAuthRedirect(req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // return req.user;
            return this.githubService.authWithGithub(req);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.HttpCode)(200)
    // @UseGuards(EmailConfirmGuard)
    ,
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, common_1.Post)("login"),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)("refresh"),
    (0, common_1.UseGuards)(guards_1.JwtRefreshGuard),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)("google"),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)("github/callback"),
    (0, common_1.UseGuards)(guards_1.GithubGuard),
    (0, tslib_1.__param)(0, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "githubAuthRedirect", null);
AuthController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)("auth"),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof github_service_1.GithubService !== "undefined" && github_service_1.GithubService) === "function" ? _d : Object, typeof (_e = typeof google_service_1.GoogleService !== "undefined" && google_service_1.GoogleService) === "function" ? _e : Object, typeof (_f = typeof permission_service_1.PermissionService !== "undefined" && permission_service_1.PermissionService) === "function" ? _f : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
const auth_resolver_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.resolver.ts");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const auth_mutation_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.mutation.ts");
const jwt_strategy_1 = __webpack_require__("./apps/koj/src/modules/auth/strategies/jwt.strategy.ts");
const password_service_1 = __webpack_require__("./apps/koj/src/modules/user/password.service.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const auth_controller_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.controller.ts");
const jwt_refresh_strategy_1 = __webpack_require__("./apps/koj/src/modules/auth/strategies/jwt-refresh.strategy.ts");
const local_strategy_1 = __webpack_require__("./apps/koj/src/modules/auth/strategies/local.strategy.ts");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const strategies_1 = __webpack_require__("./libs/common/strategies/src/index.ts");
const google_service_1 = __webpack_require__("./apps/koj/src/modules/auth/provider/google.service.ts");
const github_service_1 = __webpack_require__("./apps/koj/src/modules/auth/provider/github.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    const securityConfig = configService.get('security');
                    return {
                        secret: configService.get('JWT_ACCESS_SECRET'),
                        signOptions: {
                            expiresIn: securityConfig.expiresIn,
                        },
                    };
                }),
                inject: [config_1.ConfigService],
            }),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error('Function not implemented.');
                },
            }),
            logger_module_1.LoggerModule,
        ],
        providers: [
            auth_service_1.AuthService,
            auth_resolver_1.AuthResolver,
            auth_mutation_1.AuthMutationsResolver,
            jwt_strategy_1.JwtStrategy,
            jwt_refresh_strategy_1.JwtRefreshTokenStrategy,
            local_strategy_1.LocalStrategy,
            // GoogleAuthStrategy,
            // GoogleOauthGuard,
            strategies_1.Githubstrategy,
            guards_1.GithubGuard,
            guards_1.GqlAuthGuard,
            guards_1.GqlPolicyGuard,
            password_service_1.PasswordService,
            user_service_1.UserService,
            google_service_1.GoogleService,
            github_service_1.GithubService
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const auth_model_1 = __webpack_require__("./apps/koj/src/modules/auth/models/auth.model.ts");
const auth_type_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.type.ts");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
const login_input_1 = __webpack_require__("./apps/koj/src/modules/auth/dto/login.input.ts");
const signup_input_1 = __webpack_require__("./apps/koj/src/modules/auth/dto/signup.input.ts");
const permission_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/permission/permission.service.ts");
const gql_domain_id_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-domain-id.decorator.ts");
const user_model_1 = __webpack_require__("./generated/user/user.model.ts");
let AuthMutationsResolver = class AuthMutationsResolver {
    constructor(authService, permissionService) {
        this.authService = authService;
        this.permissionService = permissionService;
    }
    register(data, domainId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            data.email = data.email.toLowerCase();
            data.domainId = domainId;
            return yield this.authService.register(data);
        });
    }
    login({ email, password }, request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.authService.getAuthenticatedUser(email.toLowerCase(), password, request.domainId);
            const [accessToken, refreshToken] = yield this.authService.generateToken(user);
            console.log('🚀 ~ file: auth.mutation.ts ~ line 39 ~ AuthMutationsResolver ~ login ~ accessToken', accessToken);
            const permissions = yield this.permissionService.getPermissionForUser(user);
            const [accessTokenHeader, accessTokenPayload, accessTokenSignature] = accessToken.split('.');
            const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] = refreshToken.split('.');
            const accessTokenCookieOptions = this.authService.getJwtAccessTokenOptions();
            const refreshTokenCookieOptions = this.authService.getJwtRefreshTokenOptions();
            request.res.cookie('a_sign', accessTokenSignature, accessTokenCookieOptions);
            request.res.cookie('r_sign', refreshTokenSignature, refreshTokenCookieOptions);
            request.res.cookie('a_header', accessTokenHeader, accessTokenCookieOptions);
            request.res.cookie('r_header', refreshTokenHeader, refreshTokenCookieOptions);
            return {
                userId: user.id,
                username: user.username,
                lastname: user.lastname,
                firstname: user.firstname,
                accessTokenPayload,
                refreshTokenPayload,
                permissions,
            };
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => user_model_1.User),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof signup_input_1.SignupInput !== "undefined" && signup_input_1.SignupInput) === "function" ? _a : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthMutationsResolver.prototype, "register", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => auth_model_1.Auth),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_1.Context)('req')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof login_input_1.LoginInput !== "undefined" && login_input_1.LoginInput) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthMutationsResolver.prototype, "login", null);
AuthMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => auth_type_1.AuthMutations),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object, typeof (_d = typeof permission_service_1.PermissionService !== "undefined" && permission_service_1.PermissionService) === "function" ? _d : Object])
], AuthMutationsResolver);
exports.AuthMutationsResolver = AuthMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const auth_model_1 = __webpack_require__("./apps/koj/src/modules/auth/models/auth.model.ts");
const auth_type_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.type.ts");
let AuthResolver = class AuthResolver {
    authMutations() {
        return {};
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => auth_type_1.AuthMutations, { name: 'auth', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthResolver.prototype, "authMutations", null);
AuthResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => auth_model_1.Auth)
], AuthResolver);
exports.AuthResolver = AuthResolver;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const config_1 = __webpack_require__("@nestjs/config");
const common_1 = __webpack_require__("@nestjs/common");
const tracer_1 = __webpack_require__("./apps/koj/src/tracing/tracer.ts");
const crypto_util_1 = __webpack_require__("./apps/koj/src/utils/crypto.util.ts");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const password_service_1 = __webpack_require__("./apps/koj/src/modules/user/password.service.ts");
const permission_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/permission/permission.service.ts");
let AuthService = class AuthService {
    constructor(jwtService, prisma, passwordService, configService, userService, permissionSerivce) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.passwordService = passwordService;
        this.configService = configService;
        this.userService = userService;
        this.permissionSerivce = permissionSerivce;
    }
    register(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.create(data);
        });
    }
    login(user, request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const [accessToken, refreshToken] = yield this.generateToken(user);
            const permissions = yield this.permissionSerivce.getPermissionForUser(user);
            const [accessTokenHeader, accessTokenPayload, accessTokenSignature] = accessToken.split(".");
            const [refreshTokenHeader, refreshTokenPayload, refreshTokenSignature] = refreshToken.split(".");
            const accessTokenCookieOptions = this.getJwtAccessTokenOptions();
            const refreshTokenCookieOptions = this.getJwtRefreshTokenOptions();
            request.res.cookie("a_sign", accessTokenSignature, accessTokenCookieOptions);
            request.res.cookie("r_sign", refreshTokenSignature, refreshTokenCookieOptions);
            request.res.cookie("a_header", accessTokenHeader, accessTokenCookieOptions);
            request.res.cookie("r_header", refreshTokenHeader, refreshTokenCookieOptions);
            return {
                userId: user.id,
                email: user.email,
                username: user.username,
                lastname: user.lastname,
                firstname: user.firstname,
                avatar: user.avatar,
                accessTokenPayload,
                refreshTokenPayload,
                permissions
            };
        });
    }
    loginWithProvider(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
        });
    }
    getAuthenticatedData(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // try {}
            const [accessToken, refreshToken] = yield this.generateToken(user);
            return {
                accessToken,
                refreshToken
            };
        });
    }
    getAuthenticatedUser(email, password, domainId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return tracer_1.tracer.startActiveSpan(this.getAuthenticatedUser.name, (span) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                const user = (yield this.userService.getUserByEmail({
                    email,
                    domainId
                }));
                if (!user) {
                    const error = new common_1.UnauthorizedException({
                        message: "User authenticated fail",
                        statusCode: common_1.HttpStatus.UNAUTHORIZED
                    });
                    span.recordException(error);
                    span.end();
                    throw error;
                }
                const passwordValid = yield this.passwordService.validatePassword(password, user.password);
                if (!passwordValid) {
                    const error = new common_1.UnauthorizedException("Invalid password");
                    span.recordException(error);
                    span.end();
                    throw error;
                }
                delete user.password;
                span.end();
                return user;
            }));
        });
    }
    jwtStringToObject(jwt) {
        const [header, payload, signature] = jwt.split(".");
        return {
            header,
            payload,
            signature
        };
    }
    validateUser(id) {
        return this.prisma.user.findUnique({ where: { id: id } });
    }
    getUserFromToken(token) {
        const id = this.jwtService.decode(token)["id"];
        return this.prisma.user.findUnique({ where: { id } });
    }
    generateToken(user) {
        const privateData = (0, crypto_util_1.encrypt)(JSON.stringify({
            userId: user.id,
            domainId: user.domainId,
            role: user.role
        }));
        const accessTokenPayload = {
            username: user.username,
            lastname: user.lastname,
            firstname: user.firstname,
            private: privateData
        };
        const refreshTokenPayload = {
            userId: user.id,
            domainId: user.domainId
        };
        return Promise.all([
            this.generateAccessToken(accessTokenPayload),
            this.generateRefreshToken(refreshTokenPayload)
        ]);
    }
    generateAccessToken(payload) {
        const securityConfig = this.configService.get("security");
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get("JWT_ACCESS_SECRET"),
            expiresIn: securityConfig.refreshIn
        });
    }
    generateRefreshToken(payload) {
        const securityConfig = this.configService.get("security");
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get("JWT_REFRESH_SECRET"),
            expiresIn: securityConfig.refreshIn
        });
    }
    refreshToken(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = (yield this.userService.getUserById(userId));
                const [accessToken, refreshToken] = yield this.generateToken(user);
                return { accessToken, refreshToken };
            }
            catch (e) {
                console.log(e);
                // throw new UnauthorizedException();
            }
        });
    }
    getJwtAccessTokenOptions() {
        const globalPrefix = this.configService.get("app.globalPrefix");
        const maxAge = this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME");
        const cookie = {
            domain: "koj.test",
            maxAge: maxAge,
            httpOnly: true,
            secure: true,
            sameSite:  false ? 0 : "none",
            path: `/`
        };
        return cookie;
    }
    getJwtRefreshTokenOptions() {
        const globalPrefix = this.configService.get("app.globalPrefix");
        const maxAge = this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME");
        console.log("🚀 ~ file: auth.service.ts ~ line 173 ~ AuthService ~ getJwtRefreshTokenOptions ~ maxAge", maxAge);
        const cookie = {
            domain: "koj.test",
            maxAge: Number(maxAge),
            httpOnly: true,
            secure: true,
            sameSite:  false ? 0 : "none",
            path: `/`
        };
        return cookie;
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof password_service_1.PasswordService !== "undefined" && password_service_1.PasswordService) === "function" ? _c : Object, typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object, typeof (_e = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _e : Object, typeof (_f = typeof permission_service_1.PermissionService !== "undefined" && permission_service_1.PermissionService) === "function" ? _f : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/koj/src/modules/auth/auth.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let AuthMutations = class AuthMutations {
};
AuthMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], AuthMutations);
exports.AuthMutations = AuthMutations;


/***/ }),

/***/ "./apps/koj/src/modules/auth/dto/login.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let LoginInput = class LoginInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, tslib_1.__metadata)("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;


/***/ }),

/***/ "./apps/koj/src/modules/auth/dto/signup.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignupInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let SignupInput = class SignupInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], SignupInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, tslib_1.__metadata)("design:type", String)
], SignupInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, tslib_1.__metadata)("design:type", String)
], SignupInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], SignupInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], SignupInput.prototype, "lastname", void 0);
SignupInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], SignupInput);
exports.SignupInput = SignupInput;


/***/ }),

/***/ "./apps/koj/src/modules/auth/models/auth.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const token_model_1 = __webpack_require__("./apps/koj/src/modules/auth/models/token.model.ts");
let Auth = class Auth extends token_model_1.Token {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Auth.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Auth.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Auth.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Auth.prototype, "permissions", void 0);
Auth = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Auth);
exports.Auth = Auth;


/***/ }),

/***/ "./apps/koj/src/modules/auth/models/token.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Token = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let Token = class Token {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { description: 'JWT access token payload' }),
    (0, tslib_1.__metadata)("design:type", String)
], Token.prototype, "accessTokenPayload", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { description: 'JWT refresh token payload' }),
    (0, tslib_1.__metadata)("design:type", String)
], Token.prototype, "refreshTokenPayload", void 0);
Token = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Token);
exports.Token = Token;


/***/ }),

/***/ "./apps/koj/src/modules/auth/provider/github.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GithubService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
let GithubService = class GithubService {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    authWithGithub(request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { emails, username, displayName, _json: { avatar_url } } = request.user;
            const email = emails[0].value;
            const [firstname, lastname] = displayName.split(/\s+(.*)/);
            const domainId = request.domainId;
            let user = (yield this.userService.getUserByEmail({
                email,
                domainId
            }));
            if (!user) {
                user = yield this.userService.createByUsername({
                    email,
                    domainId,
                    username,
                    lastname,
                    firstname,
                    provider: "github",
                    avatar: avatar_url
                });
            }
            if (user.provider !== "github") {
                throw new common_1.BadRequestException({
                    message: "This email using another provider for login",
                    statusCode: common_1.HttpStatus.BAD_REQUEST
                });
            }
            return this.authService.login(user, request);
        });
    }
};
GithubService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], GithubService);
exports.GithubService = GithubService;


/***/ }),

/***/ "./apps/koj/src/modules/auth/provider/google.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
let GoogleService = class GoogleService {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    authWithGoogle(data, request) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, given_name, family_name, picture: avatar } = data;
            const domainId = request.domainId;
            let user = (yield this.userService.getUserByEmail({
                email,
                domainId
            }));
            if (!user) {
                user = yield this.userService.createByUsername({
                    email,
                    avatar,
                    domainId,
                    provider: "google",
                    firstname: given_name,
                    lastname: family_name,
                    username: email.split("@")[0]
                });
            }
            if (user.provider !== "google") {
                throw new common_1.BadRequestException({
                    message: "This email using another provider for login",
                    statusCode: common_1.HttpStatus.BAD_REQUEST
                });
            }
            return this.authService.login(user, request);
        });
    }
};
GoogleService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], GoogleService);
exports.GoogleService = GoogleService;


/***/ }),

/***/ "./apps/koj/src/modules/auth/strategies/jwt-refresh.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let JwtRefreshTokenStrategy = class JwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh-token') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a, _b, _c;
                    const signature = (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a['r_sign'];
                    const header = (_b = request === null || request === void 0 ? void 0 : request.cookies) === null || _b === void 0 ? void 0 : _b['r_header'];
                    const payload = (_c = request === null || request === void 0 ? void 0 : request.headers) === null || _c === void 0 ? void 0 : _c['x-refresh-payload'];
                    if (!signature || !header || !payload) {
                        throw new common_1.UnauthorizedException({
                            message: 'Missing Refresh Token',
                            level: 'warn',
                        });
                    }
                    console.log('refresh Token', `${header}.${payload}.${signature}`);
                    return `${header}.${payload}.${signature}`;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_REFRESH_SECRET'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            console.log('🚀 ~ file: jwt-refresh.strategy.ts ~ line 38 ~ validate ~ payload', payload);
            return payload;
        });
    }
};
JwtRefreshTokenStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtRefreshTokenStrategy);
exports.JwtRefreshTokenStrategy = JwtRefreshTokenStrategy;


/***/ }),

/***/ "./apps/koj/src/modules/auth/strategies/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const crypto_util_1 = __webpack_require__("./apps/koj/src/utils/crypto.util.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a, _b, _c;
                    const signature = (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a['a_sign'];
                    const header = (_b = request === null || request === void 0 ? void 0 : request.cookies) === null || _b === void 0 ? void 0 : _b['a_header'];
                    const payload = (_c = request === null || request === void 0 ? void 0 : request.headers) === null || _c === void 0 ? void 0 : _c['x-access-payload'];
                    if (!signature || !header || !payload) {
                        // throw new UnauthorizedException({
                        //   message: 'Missing Auth Token',
                        //   level: 'warn',
                        // });
                    }
                    console.log(`${header}.${payload}.${signature}`);
                    return `${header}.${payload}.${signature}`;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_ACCESS_SECRET'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const privateData = JSON.parse((0, crypto_util_1.decrypt)(payload.private));
            return Object.assign(Object.assign({}, payload), privateData);
        });
    }
};
JwtStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/koj/src/modules/auth/strategies/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_service_1 = __webpack_require__("./apps/koj/src/modules/auth/auth.service.ts");
const passport_local_1 = __webpack_require__("passport-local");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passReqToCallback: true,
        });
        this.authService = authService;
    }
    validate(request, email, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.authService.getAuthenticatedUser(email, password, request.domainId);
        });
    }
};
LocalStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/casbin.constant.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PERMISSIONS_METADATA = exports.ADAPTER_ENFORCER = exports.ADAPTER_MODULE_OPTIONS = void 0;
exports.ADAPTER_MODULE_OPTIONS = 'ADAPTER_MODULE_OPTIONS';
exports.ADAPTER_ENFORCER = 'ADAPTER_ENFORCER';
exports.PERMISSIONS_METADATA = '__PERMISSIONS__';


/***/ }),

/***/ "./apps/koj/src/modules/casbin/casbin.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CasbinModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const common_1 = __webpack_require__("@nestjs/common");
const adapter_1 = __webpack_require__("./libs/adapter/src/index.ts");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
const permission_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/permission/permission.service.ts");
let CasbinModule = class CasbinModule {
    static register(options) {
        const moduleOptionsProvider = {
            provide: casbin_constant_1.ADAPTER_MODULE_OPTIONS,
            useValue: options || {},
        };
        let enforcerProvider = options.enforcerProvider;
        const importsModule = options.imports || [];
        if (!enforcerProvider) {
            if (!options.model || !options.policy) {
                throw new Error('must provide either enforcerProvider or both model and policy');
            }
            enforcerProvider = {
                provide: casbin_constant_1.ADAPTER_ENFORCER,
                useFactory: () => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                    const isFile = typeof options.policy === 'string';
                    let policyOption;
                    if (isFile) {
                        policyOption = options.policy;
                    }
                    else {
                        policyOption = yield options.policy;
                    }
                    return casbin.newEnforcer(options.model, policyOption);
                }),
            };
        }
        return {
            module: adapter_1.AdapterModule,
            providers: [moduleOptionsProvider, enforcerProvider, permission_service_1.PermissionService],
            imports: [...importsModule],
            exports: [moduleOptionsProvider, enforcerProvider, permission_service_1.PermissionService],
        };
    }
};
CasbinModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({})
], CasbinModule);
exports.CasbinModule = CasbinModule;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/enforcer.provider.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enforcerProvider = void 0;
const tslib_1 = __webpack_require__("tslib");
const path = __webpack_require__("path");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const api_1 = __webpack_require__("@opentelemetry/api");
const tracer_1 = __webpack_require__("./apps/koj/src/tracing/tracer.ts");
const adapter_1 = __webpack_require__("./libs/adapter/src/index.ts");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
exports.enforcerProvider = {
    provide: casbin_constant_1.ADAPTER_ENFORCER,
    useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
        const span = tracer_1.tracer.startSpan('bootstrap.policy', {});
        return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            const policyAdapter = yield adapter_1.AdapterService.newAdapter();
            const e = yield casbin.newEnforcer();
            e.initWithAdapter(path.resolve('apps/koj/model.conf'), policyAdapter);
            span.end();
            return e;
        }));
    }),
};


/***/ }),

/***/ "./apps/koj/src/modules/casbin/permisions.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Permissions = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
/**
 * You can define multiple permissions, but only
 * when all of them satisfied, could you access the route.
 */
const Permissions = (...permissions) => {
    const perms = permissions.map((item) => {
        return item;
    });
    return (0, common_1.SetMetadata)(casbin_constant_1.PERMISSIONS_METADATA, perms);
};
exports.Permissions = Permissions;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/permission/permission.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.permissionQuery = void 0;
const client_1 = __webpack_require__("@prisma/client");
const permissionQuery = (user) => client_1.Prisma.sql `
  with permissions as (
    select 
      concat_ws('.', object, "action", effect) as permission, 
      cp.effect , cp."object" , cp."action" 
    from 
      casbin_policy cp 
    where 
      cp.subject in (select rule from casbin_role cr where cr."role" = ${user.role}) 
      and cp.domain_id = ${user.domainId}
  )
 
  select 
    concat_ws('.', per.object, per."action") as permission 
  from 
    permissions per 
  where 
    per.permission not in (
      select 
        permission 
      from 
        permissions per2 
      where 
        per2.effect = 'deny'
    )  
`;
exports.permissionQuery = permissionQuery;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/permission/permission.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionService = void 0;
const tslib_1 = __webpack_require__("tslib");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const expression_eval_1 = __webpack_require__("expression-eval");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const common_1 = __webpack_require__("@nestjs/common");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
const permission_query_1 = __webpack_require__("./apps/koj/src/modules/casbin/permission/permission.query.ts");
let PermissionService = class PermissionService {
    constructor(prisma, enforcer) {
        this.prisma = prisma;
        this.enforcer = enforcer;
    }
    findMany(args, select) {
        return this.prisma.policy.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    getPermissionForUser(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const permissions = yield this.prisma.$queryRaw((0, permission_query_1.permissionQuery)(user));
            return permissions.map((permission) => permission.permission);
        });
    }
    transformPolicyInput(p) {
        var _a;
        return [
            p.subject,
            p.object,
            p.action,
            p.effect,
            p.effectWith,
            p.condition,
            (_a = p.domainId) === null || _a === void 0 ? void 0 : _a.toString(),
        ];
    }
    transformPolicyToObject(policy) {
        const obj = {};
        policy.forEach((value, i) => (obj[i] = value));
        return obj;
    }
    checkValidPolicyCondition(condition) {
        if (condition == '')
            return true;
        try {
            const mockData = {
                subject: { username: 'username', role: 'role', type: 'type', level: 'level' },
            };
            const resultCompile = (0, expression_eval_1.compile)(condition)(mockData);
            return typeof resultCompile !== 'undefined';
        }
        catch (err) {
            return false;
        }
    }
    getOldNewPolicyData(policy, data) {
        const { subject, object, action, effect, effectWith, domainId } = policy;
        const condition = (policy.condition || (policy.condition = ''));
        const oldData = [
            subject,
            object,
            action,
            effect,
            effectWith,
            condition,
            domainId.toString(),
        ];
        const newData = [
            data.subject || subject,
            data.object || object,
            data.action || action,
            data.effect || effect,
            data.effectWith || effectWith,
            data.condition || condition,
            data.domainId.toString() || domainId.toString(),
        ];
        return { oldData, newData };
    }
};
PermissionService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(1, (0, common_1.Inject)(casbin_constant_1.ADAPTER_ENFORCER)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof casbin !== "undefined" && casbin.Enforcer) === "function" ? _b : Object])
], PermissionService);
exports.PermissionService = PermissionService;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/dto/find-by-role.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyFindByRoleResourceInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let PolicyFindByRoleResourceInput = class PolicyFindByRoleResourceInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyFindByRoleResourceInput.prototype, "roleId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyFindByRoleResourceInput.prototype, "resource", void 0);
PolicyFindByRoleResourceInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], PolicyFindByRoleResourceInput);
exports.PolicyFindByRoleResourceInput = PolicyFindByRoleResourceInput;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/policy.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const policy_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.service.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const policy_resolver_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.resolver.ts");
const policy_mutation_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.mutation.ts");
let PolicyModule = class PolicyModule {
};
PolicyModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [policy_resolver_1.PolicyResolver, policy_mutation_1.PolicyMutationResolver, policy_service_1.PolicyService],
        imports: [
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error('Function not implemented.');
                },
            }),
        ],
        exports: [policy_resolver_1.PolicyResolver, policy_mutation_1.PolicyMutationResolver, policy_service_1.PolicyService],
    })
], PolicyModule);
exports.PolicyModule = PolicyModule;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/policy.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyMutationResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const policy_model_1 = __webpack_require__("./generated/policy/policy.model.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const policy_create_input_1 = __webpack_require__("./generated/policy/policy-create.input.ts");
const policy_update_input_1 = __webpack_require__("./generated/policy/policy-update.input.ts");
const policy_where_unique_input_1 = __webpack_require__("./generated/policy/policy-where-unique.input.ts");
const policy_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.type.ts");
const policy_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.service.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
let PolicyMutationResolver = class PolicyMutationResolver {
    constructor(policyService) {
        this.policyService = policyService;
    }
    createPolicy(data) {
        return this.policyService.createPolicy(data);
    }
    createCasbinPolicies(data) {
        return this.policyService.createPolicies(data);
    }
    updatePolicy(data, where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.policyService.update(data, where, select);
    }
    removePolicy(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.policyService.remove(where, select);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => policy_model_1.Policy),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'create',
        resource: 'policy',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof policy_create_input_1.PolicyCreateInput !== "undefined" && policy_create_input_1.PolicyCreateInput) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyMutationResolver.prototype, "createPolicy", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => [policy_model_1.Policy]),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'create',
        resource: 'policy',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)({ name: 'data', type: () => [policy_create_input_1.PolicyCreateInput] })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Array]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyMutationResolver.prototype, "createCasbinPolicies", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => policy_model_1.Policy),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'edit',
        resource: 'policy',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(2, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof policy_update_input_1.PolicyUpdateInput !== "undefined" && policy_update_input_1.PolicyUpdateInput) === "function" ? _b : Object, typeof (_c = typeof policy_where_unique_input_1.PolicyWhereUniqueInput !== "undefined" && policy_where_unique_input_1.PolicyWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyMutationResolver.prototype, "updatePolicy", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => policy_model_1.Policy),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'delete',
        resource: 'policy',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof policy_where_unique_input_1.PolicyWhereUniqueInput !== "undefined" && policy_where_unique_input_1.PolicyWhereUniqueInput) === "function" ? _e : Object, typeof (_f = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyMutationResolver.prototype, "removePolicy", null);
PolicyMutationResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => policy_type_1.PolicyMutations),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof policy_service_1.PolicyService !== "undefined" && policy_service_1.PolicyService) === "function" ? _g : Object])
], PolicyMutationResolver);
exports.PolicyMutationResolver = PolicyMutationResolver;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/policy.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const policy_model_1 = __webpack_require__("./generated/policy/policy.model.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const find_many_policy_args_1 = __webpack_require__("./generated/policy/find-many-policy.args.ts");
const policy_where_unique_input_1 = __webpack_require__("./generated/policy/policy-where-unique.input.ts");
const policy_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.type.ts");
const policy_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.service.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const find_by_role_dto_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/dto/find-by-role.dto.ts");
let PolicyResolver = class PolicyResolver {
    constructor(policyService) {
        this.policyService = policyService;
    }
    casbinPolicyMutations() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return {};
        });
    }
    findMany(args, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.policyService.findMany(args, select);
    }
    findUnique(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.policyService.findUnique(where, select);
    }
    z_checkValidPolicyCondition(data) {
        return this.policyService.checkValidPolicyCondition(data);
    }
    z_policyByRoleResource(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.policyService.findByRoleResource(where, select);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => policy_type_1.PolicyMutations, { name: 'policy', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PolicyResolver.prototype, "casbinPolicyMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [policy_model_1.Policy], { name: 'policies' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'policy',
        noUniqueInput: true,
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_policy_args_1.FindManyPolicyArgs !== "undefined" && find_many_policy_args_1.FindManyPolicyArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyResolver.prototype, "findMany", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => policy_model_1.Policy, { name: 'policy' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'policy',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof policy_where_unique_input_1.PolicyWhereUniqueInput !== "undefined" && policy_where_unique_input_1.PolicyWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyResolver.prototype, "findUnique", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => Boolean),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyResolver.prototype, "z_checkValidPolicyCondition", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [policy_model_1.Policy]),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof find_by_role_dto_1.PolicyFindByRoleResourceInput !== "undefined" && find_by_role_dto_1.PolicyFindByRoleResourceInput) === "function" ? _e : Object, typeof (_f = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PolicyResolver.prototype, "z_policyByRoleResource", null);
PolicyResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => policy_model_1.Policy),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof policy_service_1.PolicyService !== "undefined" && policy_service_1.PolicyService) === "function" ? _g : Object])
], PolicyResolver);
exports.PolicyResolver = PolicyResolver;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/policy.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyService = void 0;
const tslib_1 = __webpack_require__("tslib");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const client_1 = __webpack_require__("@prisma/client");
const expression_eval_1 = __webpack_require__("expression-eval");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const common_1 = __webpack_require__("@nestjs/common");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
const policy_query_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/query/policy.query.ts");
const common_2 = __webpack_require__("@nestjs/common");
let PolicyService = class PolicyService {
    constructor(prisma, enforcer) {
        this.prisma = prisma;
        this.enforcer = enforcer;
    }
    createPolicy(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const casbinResult = yield this.enforcer.addPolicy(...this.transformPolicyInput(data));
            if (!casbinResult) {
                throw new common_1.BadRequestException({
                    message: `Can't create policy`,
                    statusCode: common_2.HttpStatus.BAD_REQUEST,
                });
            }
            return this.prisma.policy.create({ data });
        });
    }
    createPolicies(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const policies = [];
            data.forEach((policy) => {
                policies.push(this.transformPolicyInput(policy));
            });
            const casbinResult = yield this.enforcer.addPolicies(policies);
            if (!casbinResult) {
                throw new common_1.BadRequestException({
                    message: `Can't create policy`,
                    statusCode: common_2.HttpStatus.BAD_REQUEST,
                });
            }
            return this.prisma.policy.createMany({ data });
        });
    }
    findMany(args, select) {
        return this.prisma.policy.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    findUnique(where, select) {
        return this.prisma.policy.findUnique({ where, select });
    }
    findByRoleResource(where, select) {
        const query = (0, policy_query_1.policyByRoleResourceQuery)(where, select);
        return this.prisma.$queryRawUnsafe(query);
    }
    update(data, where, select) {
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const policy = yield this.prisma.policy.findUnique({ where });
            if (!policy) {
                throw new common_1.NotFoundException();
            }
            const { oldData, newData } = this.getOldNewPolicyData(policy, data);
            const updatePolicyResult = yield this.enforcer.updatePolicy(oldData, newData);
            if (!updatePolicyResult) {
                throw new common_1.BadRequestException({
                    message: `Can't update policy`,
                    statusCode: common_2.HttpStatus.BAD_REQUEST,
                });
            }
            try {
                return yield this.prisma.policy.update({ data, where, select });
            }
            catch (error) {
                yield this.enforcer.updatePolicy(newData, oldData);
                if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    throw new common_1.NotImplementedException((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause);
                }
                throw error;
            }
        });
    }
    remove(where, select) {
        return this.prisma.policy.delete({ where, select }).catch((e) => {
            var _a;
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2025') {
                    throw new common_1.NotFoundException();
                }
            }
            throw new common_1.NotImplementedException((_a = e.meta) === null || _a === void 0 ? void 0 : _a.cause);
        });
    }
    transformPolicyInput(p) {
        var _a;
        return [
            p.subject,
            p.object,
            p.action,
            p.effect,
            p.effectWith,
            p.condition,
            (_a = p.domainId) === null || _a === void 0 ? void 0 : _a.toString(),
        ];
    }
    transformPolicyToObject(policy) {
        const obj = {};
        policy.forEach((value, i) => (obj[i] = value));
        return obj;
    }
    checkValidPolicyCondition(condition) {
        if (condition == '')
            return true;
        try {
            const mockData = {
                subject: { username: 'username', role: 'role', type: 'type', level: 'level' },
            };
            const resultCompile = (0, expression_eval_1.compile)(condition)(mockData);
            return typeof resultCompile !== 'undefined';
        }
        catch (err) {
            return false;
        }
    }
    getOldNewPolicyData(policy, data) {
        var _a;
        const { subject, object, action, effect, effectWith, domainId } = policy;
        const condition = (policy.condition || (policy.condition = ''));
        const oldData = [
            subject,
            object,
            action,
            effect,
            effectWith,
            condition,
            domainId.toString(),
        ];
        const newData = [
            data.subject || subject,
            data.object || object,
            data.action || action,
            data.effect || effect,
            data.effectWith || effectWith,
            data.condition || condition,
            ((_a = data.domainId) === null || _a === void 0 ? void 0 : _a.toString()) || domainId.toString(),
        ];
        return { oldData, newData };
    }
};
PolicyService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(1, (0, common_1.Inject)(casbin_constant_1.ADAPTER_ENFORCER)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof casbin !== "undefined" && casbin.Enforcer) === "function" ? _b : Object])
], PolicyService);
exports.PolicyService = PolicyService;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/policy.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let PolicyMutations = class PolicyMutations {
};
PolicyMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], PolicyMutations);
exports.PolicyMutations = PolicyMutations;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/policy/query/policy.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.policyByRoleResourceQuery = void 0;
const database_query_1 = __webpack_require__("./apps/koj/src/utils/database-query.ts");
const policyByRoleResourceQuery = ({ roleId, resource }, select) => {
    const transformSelect = (0, database_query_1.transformObjectToQuery)(select, 'cp');
    return `
    select
      ${transformSelect}
    from
      casbin_policy cp
    where
      cp.subject in (
        select
          cr."rule"
        from
          role r
        join casbin_role cr on
          r.key = cr.role
        where
          r."id" = '${roleId}'
      )
      and cp."object" = '${resource}'
    order by cp.id desc 
`;
};
exports.policyByRoleResourceQuery = policyByRoleResourceQuery;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/role/ role.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupMutationResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const role_group_model_1 = __webpack_require__("./generated/role-group/role-group.model.ts");
const role_group_create_input_1 = __webpack_require__("./generated/role-group/role-group-create.input.ts");
const role_group_update_input_1 = __webpack_require__("./generated/role-group/role-group-update.input.ts");
const role_group_where_unique_input_1 = __webpack_require__("./generated/role-group/role-group-where-unique.input.ts");
const role_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.type.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.service.ts");
let RoleGroupMutationResolver = class RoleGroupMutationResolver {
    constructor(roleService) {
        this.roleService = roleService;
    }
    createRoleGroup(data, context) {
        data.domainId = context.req.user.domainId;
        return this.roleService.createRole(data);
    }
    updateRoleGroup(data, where) {
        return this.roleService.update(data, where);
    }
    removeRoleGroup(id) {
        return this.roleService.remove(id);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => Boolean),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_1.Context)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof role_group_create_input_1.RoleGroupCreateInput !== "undefined" && role_group_create_input_1.RoleGroupCreateInput) === "function" ? _a : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleGroupMutationResolver.prototype, "createRoleGroup", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => role_group_model_1.RoleGroup),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_1.Args)('where')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof role_group_update_input_1.RoleGroupUpdateInput !== "undefined" && role_group_update_input_1.RoleGroupUpdateInput) === "function" ? _b : Object, typeof (_c = typeof role_group_where_unique_input_1.RoleGroupWhereUniqueInput !== "undefined" && role_group_where_unique_input_1.RoleGroupWhereUniqueInput) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleGroupMutationResolver.prototype, "updateRoleGroup", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => role_group_model_1.RoleGroup),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleGroupMutationResolver.prototype, "removeRoleGroup", null);
RoleGroupMutationResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => role_type_1.RoleMutations),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof role_service_1.RoleGroupService !== "undefined" && role_service_1.RoleGroupService) === "function" ? _d : Object])
], RoleGroupMutationResolver);
exports.RoleGroupMutationResolver = RoleGroupMutationResolver;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/role/role.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const path = __webpack_require__("path");
const common_1 = __webpack_require__("@nestjs/common");
const adapter_1 = __webpack_require__("./libs/adapter/src/index.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.service.ts");
const role_resolver_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.resolver.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const _role_mutation_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/ role.mutation.ts");
let RoleGroupModule = class RoleGroupModule {
};
RoleGroupModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            casbin_module_1.CasbinModule.register({
                model: path.resolve('apps/koj/model.conf'),
                policy: adapter_1.AdapterService.newAdapter(),
                userFromContext: (ctx) => {
                    const request = ctx.switchToHttp().getRequest();
                    return request.user && request.createdById;
                },
                enforcerProvider: enforcer_provider_1.enforcerProvider,
            }),
        ],
        providers: [role_resolver_1.RoleGroupResolver, _role_mutation_1.RoleGroupMutationResolver, role_service_1.RoleGroupService],
        exports: [role_resolver_1.RoleGroupResolver, _role_mutation_1.RoleGroupMutationResolver, role_service_1.RoleGroupService],
    })
], RoleGroupModule);
exports.RoleGroupModule = RoleGroupModule;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/role/role.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const role_group_model_1 = __webpack_require__("./generated/role-group/role-group.model.ts");
const role_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.type.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.service.ts");
let RoleGroupResolver = class RoleGroupResolver {
    constructor(roleService) {
        this.roleService = roleService;
    }
    casbinPolicyMutations() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return {};
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => role_type_1.RoleMutations, { name: 'role', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleGroupResolver.prototype, "casbinPolicyMutations", null);
RoleGroupResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => role_group_model_1.RoleGroup),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof role_service_1.RoleGroupService !== "undefined" && role_service_1.RoleGroupService) === "function" ? _a : Object])
], RoleGroupResolver);
exports.RoleGroupResolver = RoleGroupResolver;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/role/role.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupService = void 0;
const tslib_1 = __webpack_require__("tslib");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const common_1 = __webpack_require__("@nestjs/common");
const casbin_constant_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.constant.ts");
let RoleGroupService = class RoleGroupService {
    constructor(prisma, enforcer) {
        this.prisma = prisma;
        this.enforcer = enforcer;
    }
    createRole(data, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.enforcer.addPolicy(...this.transformRoleInput(data));
            if (result) {
                yield this.prisma.roleGroup.create({ data, select });
                return true;
            }
            return false;
        });
    }
    createRoles(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const policies = [];
            data.forEach((policy) => {
                policies.push(this.transformRoleInput(policy));
            });
            const result = yield this.enforcer.addPolicies(policies);
            if (result)
                this.prisma.roleGroup.createMany({ data }).catch((e) => {
                    throw e;
                });
            return true;
        });
    }
    findMany() {
        return this.prisma.roleGroup.findMany();
    }
    findUnique(where) {
        return this.prisma.roleGroup.findUnique({ where });
    }
    update(data, where) {
        return this.prisma.roleGroup.update({ data, where });
    }
    remove(id) {
        return `This action removes a #${id} roleGroup`;
    }
    transformRoleInput(p) {
        var _a;
        return [p.role, p.rule, (_a = p.domainId) === null || _a === void 0 ? void 0 : _a.toString()];
    }
    transformRoleArrayToObject(p) {
        return { role: p[0], rule: p[1], domainId: p[2] };
    }
};
RoleGroupService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(1, (0, common_1.Inject)(casbin_constant_1.ADAPTER_ENFORCER)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof casbin !== "undefined" && casbin.Enforcer) === "function" ? _b : Object])
], RoleGroupService);
exports.RoleGroupService = RoleGroupService;


/***/ }),

/***/ "./apps/koj/src/modules/casbin/role/role.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let RoleMutations = class RoleMutations {
};
RoleMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], RoleMutations);
exports.RoleMutations = RoleMutations;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/challenge.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const challenge_service_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.service.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const challenge_resolver_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.resolver.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const challenge_mutation_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.mutation.ts");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
let ChallengeModule = class ChallengeModule {
};
ChallengeModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "CHALLENGE_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "challenge_queue"
                    }
                },
                {
                    name: "SUBMISSION_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "submission_queue"
                    }
                }
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error("Function not implemented.");
                }
            }),
            logger_module_1.LoggerModule
        ],
        providers: [
            challenge_resolver_1.ChallengeResolver,
            challenge_mutation_1.ChallengeMutationsResolver,
            challenge_service_1.ChallengeService,
            instrumentation_1.RPCTraceClientProxy
        ]
    })
], ChallengeModule);
exports.ChallengeModule = ChallengeModule;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/challenge.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const challenge_model_1 = __webpack_require__("./generated/challenge/challenge.model.ts");
const challenge_create_input_1 = __webpack_require__("./generated/challenge/challenge-create.input.ts");
const challenge_update_input_1 = __webpack_require__("./generated/challenge/challenge-update.input.ts");
const gql_context_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-context.decorator.ts");
const challenge_type_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const dto_1 = __webpack_require__("./libs/common/dto/src/index.ts");
let ChallengeMutationsResolver = class ChallengeMutationsResolver {
    constructor(traceClient, commentClient, submissionClient) {
        this.traceClient = traceClient;
        this.commentClient = commentClient;
        this.submissionClient = submissionClient;
    }
    createChallenge(data, info, context) {
        const select = new plugins_1.PrismaSelect(info).value;
        Object.assign(data, context.data);
        return this.traceClient.send(this.commentClient, constants_1.CHALLENGE_CREATE, {
            data,
            select
        });
    }
    updateChallenge(data, where, info, context) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        const payload = { data, where, select };
        Object.assign(data, context.data);
        return this.traceClient.send(this.commentClient, constants_1.CHALLENGE_UPDATE, payload);
    }
    removeChallenge(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.commentClient, constants_1.CHALLENGE_DELETE, {
            where,
            select
        });
    }
    submitChallenge(data, context) {
        Object.assign(data, context.data);
        return this.traceClient.send(this.submissionClient, constants_1.SUBMISSION_SUBMIT, {
            data,
            context: { data: context.data }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => challenge_model_1.Challenge),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "create", resource: "challenge" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("data")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof challenge_create_input_1.ChallengeCreateInput !== "undefined" && challenge_create_input_1.ChallengeCreateInput) === "function" ? _a : Object, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeMutationsResolver.prototype, "createChallenge", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => challenge_model_1.Challenge),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "edit", resource: "challenge" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("data")),
    (0, tslib_1.__param)(1, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(2, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(3, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof challenge_update_input_1.ChallengeUpdateInput !== "undefined" && challenge_update_input_1.ChallengeUpdateInput) === "function" ? _b : Object, typeof (_c = typeof dto_1.KChallengeWhereUniqueInput !== "undefined" && dto_1.KChallengeWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeMutationsResolver.prototype, "updateChallenge", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => challenge_model_1.Challenge),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "delete", resource: "challenge" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof dto_1.KChallengeWhereUniqueInput !== "undefined" && dto_1.KChallengeWhereUniqueInput) === "function" ? _e : Object, typeof (_f = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _f : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeMutationsResolver.prototype, "removeChallenge", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => dto_1.ChallengeSubmitResult),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "read", resource: "challenge" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("data")),
    (0, tslib_1.__param)(1, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof dto_1.ChallengeSubmitInput !== "undefined" && dto_1.ChallengeSubmitInput) === "function" ? _g : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeMutationsResolver.prototype, "submitChallenge", null);
ChallengeMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => challenge_type_1.ChallengeMutations),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("CHALLENGE_SERVICE")),
    (0, tslib_1.__param)(2, (0, common_1.Inject)("SUBMISSION_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _h : Object, typeof (_j = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _j : Object, typeof (_k = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _k : Object])
], ChallengeMutationsResolver);
exports.ChallengeMutationsResolver = ChallengeMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/challenge.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const dto_1 = __webpack_require__("./libs/common/dto/src/index.ts");
const challenge_model_1 = __webpack_require__("./generated/challenge/challenge.model.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const find_many_challenge_args_1 = __webpack_require__("./generated/challenge/find-many-challenge.args.ts");
const gql_domain_id_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-domain-id.decorator.ts");
const challenge_type_1 = __webpack_require__("./apps/koj/src/modules/challenge/challenge.type.ts");
let ChallengeResolver = class ChallengeResolver {
    constructor(traceClient, challengeClient) {
        this.traceClient = traceClient;
        this.challengeClient = challengeClient;
    }
    challengeMutations() {
        return {};
    }
    findMany(args, info, domainId) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        args.where = args.where || {};
        args.where.domainId = domainId;
        return this.traceClient.send(this.challengeClient, constants_1.CHALLENGE_FIND_MANY, {
            args,
            select
        });
    }
    findUnique(where, info, domainId) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        where.domainId = domainId;
        return this.traceClient.send(this.challengeClient, constants_1.CHALLENGE_FIND_UNIQUE, {
            where,
            select
        });
    }
    findUniquePublic(where, info, domainId) {
        console.log("🚀 ~ file: challenge.resolver.ts ~ line 70 ~ ChallengeResolver ~ domainId", domainId);
        const { select } = new plugins_1.PrismaSelect(info).value;
        where.domainId = domainId;
        return this.traceClient.send(this.challengeClient, constants_1.CHALLENGE_FIND_UNIQUE_PUBLIC, {
            where,
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => challenge_type_1.ChallengeMutations, { name: "challenge", nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeResolver.prototype, "challengeMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [challenge_model_1.Challenge], { name: "challenges" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_challenge_args_1.FindManyChallengeArgs !== "undefined" && find_many_challenge_args_1.FindManyChallengeArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeResolver.prototype, "findMany", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => challenge_model_1.Challenge, { name: "challenge" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof dto_1.KChallengeWhereUniqueInput !== "undefined" && dto_1.KChallengeWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeResolver.prototype, "findUnique", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => challenge_model_1.Challenge, { name: "challenge_public" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof dto_1.KChallengeWhereUniqueInput !== "undefined" && dto_1.KChallengeWhereUniqueInput) === "function" ? _e : Object, typeof (_f = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _f : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ChallengeResolver.prototype, "findUniquePublic", null);
ChallengeResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => challenge_model_1.Challenge),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("CHALLENGE_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_g = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _g : Object, typeof (_h = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _h : Object])
], ChallengeResolver);
exports.ChallengeResolver = ChallengeResolver;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/challenge.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const slugify_1 = (0, tslib_1.__importDefault)(__webpack_require__("slugify"));
const client_1 = __webpack_require__("@prisma/client");
const perf_hooks_1 = __webpack_require__("perf_hooks");
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
const common_2 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const code_gen_1 = __webpack_require__("./libs/code-gen/src/index.ts");
const code_executor_1 = __webpack_require__("./libs/code-executor/src/index.ts");
const save_folder_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/modules/challenge/save-folder.util.ts"));
const save_testcase_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/modules/challenge/save-testcase.util.ts"));
const language_config_1 = __webpack_require__("./apps/koj/src/modules/challenge/language.config.ts");
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
            data.slug = slug;
            yield this.saveCode(data, domainId, slug);
            return this.prisma.challenge.create(Object.assign({ data }, select));
        });
    }
    findMany(args, select) {
        return this.prisma.challenge.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    findUnique(where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const whereCondition = this.getChallengeWhereUnique(where);
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
            const whereCondition = this.getChallengeWhereUnique(where);
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
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const inputSchema = {
                name: data.functionName,
                inputs: data.inputs.set,
                structs: data.structs.set,
                output: { type: data.output }
            };
            const inputData = code_gen_1.Input.formJson(inputSchema);
            try {
                const basePath = "/mnt/Data/code1/code-executor1";
                const path = `${basePath}/challenges/${domainId}/${slug}`;
                yield (0, save_folder_util_1.default)(path);
                const promiseWriteCode = data.languages.set
                    .filter((language) => ["cplusplus", "javascript"].includes(language.id))
                    .map((language) => language_config_1.languageConfigs[language.id].gen({ inputData, domainId, slug, path }));
                promiseWriteCode.push(language_config_1.languageConfigs["output"].gen({ inputData, domainId, slug, path }));
                const promiseWriteTestCase = (((_a = data.testcases) === null || _a === void 0 ? void 0 : _a.set) || []).map((testcase, index) => {
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
                throw new common_1.InternalServerErrorException(error.message);
            }
        });
    }
    submit(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { content, functionName, languageId, slug, domainId } = data;
            try {
                const basePath = process.env.BASE_PATH;
                const userId = "hieunguyen-123";
                const challengePath = `${basePath}/challenges/${domainId}/${slug}`;
                const userSolvePath = `${basePath}/user-solve/${slug}/${userId}`;
                const time = perf_hooks_1.performance.now();
                const result = yield codeExecutor.runCode({
                    code: language_config_1.languageConfigs[languageId].genSolution(content, functionName),
                    language: languageId,
                    userSolvePath,
                    challengePath
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
    getChallengeWhereUnique({ id, slug, domainId }) {
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

/***/ "./apps/koj/src/modules/challenge/challenge.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let ChallengeMutations = class ChallengeMutations {
};
ChallengeMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], ChallengeMutations);
exports.ChallengeMutations = ChallengeMutations;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/decode-base64.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function decodeBase64(code) {
    return Buffer.from(code, 'base64').toString('ascii');
}
exports["default"] = decodeBase64;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/language.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.languageConfigs = void 0;
const tslib_1 = __webpack_require__("tslib");
const code_gen_1 = __webpack_require__("./libs/code-gen/src/index.ts");
const save_code_util_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/modules/challenge/save-code.util.ts"));
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

/***/ "./apps/koj/src/modules/challenge/save-code.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const promises_1 = __webpack_require__("fs/promises");
const decode_base64_1 = (0, tslib_1.__importDefault)(__webpack_require__("./apps/koj/src/modules/challenge/decode-base64.ts"));
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

/***/ "./apps/koj/src/modules/challenge/save-folder.util.ts":
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

/***/ "./apps/koj/src/modules/challenge/save-testcase.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const promises_1 = __webpack_require__("fs/promises");
const transform_input_util_1 = __webpack_require__("./apps/koj/src/modules/challenge/transform-input.util.ts");
function saveTestcases({ inputSchema, path, testcase, index }) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        console.log('save testcase');
        const transformInputResult = (0, transform_input_util_1.transformInput)(inputSchema, testcase);
        const inputPath = `${path}/input/${testcase.type || 'show'}/${index}.in`;
        const outputPath = `${path}/output/${testcase.type || 'show'}/${index}.out`;
        return Promise.all([
            (0, promises_1.writeFile)(inputPath, transformInputResult),
            (0, promises_1.writeFile)(outputPath, testcase.expectedOutput),
        ]);
    });
}
exports["default"] = saveTestcases;


/***/ }),

/***/ "./apps/koj/src/modules/challenge/transform-input.util.ts":
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
    const inputMapping = testcase.inputs.map((input) => input.value);
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

/***/ "./apps/koj/src/modules/comment/comment-create.transaction.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateTransaction = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const saga_builder_1 = __webpack_require__("./apps/koj/src/saga/saga-builder.ts");
const consumer_service_1 = __webpack_require__("./apps/koj/src/kafka/consumer.service.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
let CommentCreateTransaction = class CommentCreateTransaction {
    constructor(commentClient, consumerService, traceClient) {
        this.commentClient = commentClient;
        this.consumerService = consumerService;
        this.traceClient = traceClient;
    }
    createCommentTransaction() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const sagaDefinitionBuilder = new saga_builder_1.SagaDefinitionBuilder()
                .step("CreateComment")
                .onReply((payload) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                const result = yield this.traceClient.send(this.commentClient, constants_1.COMMENT_CREATE, payload);
                console.log("🚀 ~ file: comment-create.transaction.ts ~ line 29 ~ CommentCreateTransaction ~ result", result);
                return { _id: result._id };
            }), { passResult: true })
                .withCompensation((payload) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                // invoke Flight Booking Service API to roll back previosly reserved ticket
                const _id = payload.result["CreateComment"]._id;
                yield this.traceClient.send(this.commentClient, constants_1.COMMENT_DELETE, {
                    _id
                });
                console.log("delete ok");
            }))
                .step("IncreaseCommentCount")
                .onReply((payload) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                // throw new BadRequestException('khong the increase');
            }))
                .withCompensation(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                console.log("STEP1.2 COMPENSATION");
            }));
            const sagaProcessor = yield sagaDefinitionBuilder.build();
            return sagaProcessor;
        });
    }
    run(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.sagaBuilder.start(payload);
        });
    }
    onModuleInit() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.sagaBuilder = yield this.createCommentTransaction();
        });
    }
};
CommentCreateTransaction = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, common_1.Inject)("COMMENT_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _a : Object, typeof (_b = typeof consumer_service_1.ConsumerService !== "undefined" && consumer_service_1.ConsumerService) === "function" ? _b : Object, typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object])
], CommentCreateTransaction);
exports.CommentCreateTransaction = CommentCreateTransaction;


/***/ }),

/***/ "./apps/koj/src/modules/comment/comment.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comment = exports.Vote = exports.Author = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let Author = class Author {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Author.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Author.prototype, "avatar", void 0);
Author = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Author);
exports.Author = Author;
let Vote = class Vote {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vote.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vote.prototype, "vote", void 0);
Vote = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Vote);
exports.Vote = Vote;
let Comment = class Comment {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Comment.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Comment.prototype, "parentId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "depth", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Comment.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Vote], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Comment.prototype, "votes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Author, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Author)
], Comment.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "replyCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "votePoint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Comment.prototype, "currentVote", void 0);
Comment = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Comment);
exports.Comment = Comment;


/***/ }),

/***/ "./apps/koj/src/modules/comment/comment.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const password_service_1 = __webpack_require__("./apps/koj/src/modules/user/password.service.ts");
const comment_mutation_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.mutation.ts");
const comment_resolver_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.resolver.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const comment_create_transaction_1 = __webpack_require__("./apps/koj/src/modules/comment/comment-create.transaction.ts");
const kafka_module_1 = __webpack_require__("./apps/koj/src/kafka/kafka.module.ts");
let CommentModule = class CommentModule {
};
CommentModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "COMMENT_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "comment_queue"
                    }
                },
                {
                    name: "USER_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "user_queue"
                    }
                }
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error("Function not implemented.");
                }
            }),
            kafka_module_1.KafkaModule
        ],
        providers: [
            comment_resolver_1.CommentResolver,
            comment_mutation_1.CommentMutationResolver,
            password_service_1.PasswordService,
            instrumentation_1.RPCTraceClientProxy,
            comment_create_transaction_1.CommentCreateTransaction
        ]
    })
], CommentModule);
exports.CommentModule = CommentModule;


/***/ }),

/***/ "./apps/koj/src/modules/comment/comment.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentMutationResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const nestjs_otel_1 = __webpack_require__("nestjs-otel");
// import { Span } from '@koj/instrumentation';
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const common_1 = __webpack_require__("@nestjs/common");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const comment_model_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.model.ts");
const comment_types_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.types.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const comment_create_input_1 = __webpack_require__("./apps/koj/src/modules/comment/dto/comment-create.input.ts");
const comment_vote_input_1 = __webpack_require__("./apps/koj/src/modules/comment/dto/comment-vote.input.ts");
const comment_create_model_1 = __webpack_require__("./apps/koj/src/modules/comment/dto/comment-create.model.ts");
const comment_create_transaction_1 = __webpack_require__("./apps/koj/src/modules/comment/comment-create.transaction.ts");
const gql_context_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-context.decorator.ts");
let CommentMutationResolver = class CommentMutationResolver {
    constructor(commentClient, userClient, traceClient, commentCreateTransaction, traceService) {
        this.commentClient = commentClient;
        this.userClient = userClient;
        this.traceClient = traceClient;
        this.commentCreateTransaction = commentCreateTransaction;
        this.traceService = traceService;
    }
    create(data, context) {
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { createdById, createdByUsername, createdByName, domainId } = context.data;
            const user = yield this.traceClient.send(this.userClient, constants_1.USER_FIND_UNIQUE, {
                where: { id: createdById },
                select: {
                    avatar: true
                }
            });
            const author = {
                id: createdById,
                username: createdByUsername,
                name: createdByName,
                avatar: user.avatar
            };
            data.author = author;
            data.domainId = domainId;
            // case root comment and increase comment count of post service
            if (typeof data.challengeId !== "undefined") {
                const result = yield this.commentCreateTransaction.run(data);
                return (_a = result.result) === null || _a === void 0 ? void 0 : _a["CreateComment"];
            }
            // case internal comment servivices
            return this.traceClient.send(this.commentClient, constants_1.COMMENT_CREATE, data);
        });
    }
    vote(data, context) {
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            Object.assign(data, context.data);
            data.userId = (_a = context.data) === null || _a === void 0 ? void 0 : _a.createdById;
            return this.traceClient.send(this.commentClient, constants_1.COMMENT_VOTE, data);
        });
    }
    unVote(data, context) {
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            Object.assign(data, context.data);
            data.userId = (_a = context.data) === null || _a === void 0 ? void 0 : _a.createdById;
            return this.traceClient.send(this.commentClient, constants_1.COMMENT_UNVOTE, data);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => comment_create_model_1.CommentCreateResult, { nullable: true }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: "create",
        resource: "challenge"
    }),
    (0, nestjs_otel_1.Span)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)("data")),
    (0, tslib_1.__param)(1, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof comment_create_input_1.CommentCreateInput !== "undefined" && comment_create_input_1.CommentCreateInput) === "function" ? _a : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentMutationResolver.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => comment_model_1.Comment),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: "create",
        resource: "challenge"
    }),
    (0, nestjs_otel_1.Span)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)("data")),
    (0, tslib_1.__param)(1, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof comment_vote_input_1.CommentVoteInput !== "undefined" && comment_vote_input_1.CommentVoteInput) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentMutationResolver.prototype, "vote", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => Boolean),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: "create",
        resource: "challenge"
    }),
    (0, nestjs_otel_1.Span)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)("data")),
    (0, tslib_1.__param)(1, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof comment_vote_input_1.CommentVoteInput !== "undefined" && comment_vote_input_1.CommentVoteInput) === "function" ? _c : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommentMutationResolver.prototype, "unVote", null);
CommentMutationResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => comment_types_1.CommentMutations),
    (0, tslib_1.__param)(0, (0, common_1.Inject)("COMMENT_SERVICE")),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("USER_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _d : Object, typeof (_e = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _e : Object, typeof (_f = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _f : Object, typeof (_g = typeof comment_create_transaction_1.CommentCreateTransaction !== "undefined" && comment_create_transaction_1.CommentCreateTransaction) === "function" ? _g : Object, typeof (_h = typeof nestjs_otel_1.TraceService !== "undefined" && nestjs_otel_1.TraceService) === "function" ? _h : Object])
], CommentMutationResolver);
exports.CommentMutationResolver = CommentMutationResolver;


/***/ }),

/***/ "./apps/koj/src/modules/comment/comment.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const comment_model_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.model.ts");
const comment_types_1 = __webpack_require__("./apps/koj/src/modules/comment/comment.types.ts");
const comment_where_input_1 = __webpack_require__("./apps/koj/src/modules/comment/dto/comment-where.input.ts");
const gql_domain_id_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-domain-id.decorator.ts");
let CommentResolver = class CommentResolver {
    constructor(commentClient, traceClient) {
        this.commentClient = commentClient;
        this.traceClient = traceClient;
    }
    userMutation() {
        return {};
    }
    // @UseGuards(GqlAuthGuard, GqlPolicyGuard)
    // @Permissions({
    //   action: "read",
    //   resource: "challenge"
    // })
    getComment(where, domainId) {
        return this.traceClient.send(this.commentClient, constants_1.COMMENT_FIND_MANY_BY_ID, Object.assign(Object.assign({}, where), { domainId }));
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => comment_types_1.CommentMutations, { name: "comment", nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentResolver.prototype, "userMutation", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(() => [comment_model_1.Comment], { name: "comments" }),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)("where")),
    (0, tslib_1.__param)(1, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof comment_where_input_1.CommentWhereInput !== "undefined" && comment_where_input_1.CommentWhereInput) === "function" ? _a : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CommentResolver.prototype, "getComment", null);
CommentResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => comment_model_1.Comment),
    (0, tslib_1.__param)(0, (0, common_1.Inject)("COMMENT_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _b : Object, typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object])
], CommentResolver);
exports.CommentResolver = CommentResolver;


/***/ }),

/***/ "./apps/koj/src/modules/comment/comment.types.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let CommentMutations = class CommentMutations {
};
CommentMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], CommentMutations);
exports.CommentMutations = CommentMutations;


/***/ }),

/***/ "./apps/koj/src/modules/comment/dto/comment-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
let CommentCreateInput = class CommentCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], CommentCreateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentCreateInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentCreateInput.prototype, "parentId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentCreateInput.prototype, "depth", void 0);
CommentCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CommentCreateInput);
exports.CommentCreateInput = CommentCreateInput;


/***/ }),

/***/ "./apps/koj/src/modules/comment/dto/comment-create.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateResult = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let CommentCreateResult = class CommentCreateResult {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], CommentCreateResult.prototype, "_id", void 0);
CommentCreateResult = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], CommentCreateResult);
exports.CommentCreateResult = CommentCreateResult;


/***/ }),

/***/ "./apps/koj/src/modules/comment/dto/comment-vote.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentVoteInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
let CommentVoteInput = class CommentVoteInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentVoteInput.prototype, "vote", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], CommentVoteInput.prototype, "commentId", void 0);
CommentVoteInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CommentVoteInput);
exports.CommentVoteInput = CommentVoteInput;


/***/ }),

/***/ "./apps/koj/src/modules/comment/dto/comment-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let CommentWhereInput = class CommentWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentWhereInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CommentWhereInput.prototype, "parentId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CommentWhereInput.prototype, "userId", void 0);
CommentWhereInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], CommentWhereInput);
exports.CommentWhereInput = CommentWhereInput;


/***/ }),

/***/ "./apps/koj/src/modules/domain/domain.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const domain_service_1 = __webpack_require__("./apps/koj/src/modules/domain/domain.service.ts");
let DomainModule = class DomainModule {
};
DomainModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [domain_service_1.DomainService],
        exports: [domain_service_1.DomainService],
    })
], DomainModule);
exports.DomainModule = DomainModule;


/***/ }),

/***/ "./apps/koj/src/modules/domain/domain.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_redis_1 = __webpack_require__("@liaoliaots/nestjs-redis");
const ioredis_1 = (0, tslib_1.__importDefault)(__webpack_require__("ioredis"));
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
let DomainService = class DomainService {
    constructor(redis, prisma) {
        this.redis = redis;
        this.prisma = prisma;
    }
    getDomainFromHost(host) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!host)
                return null;
            const domainCahe = yield this.redis.get('domain:' + host);
            if (domainCahe)
                return JSON.parse(domainCahe);
            const domain = yield this.prisma.domain.findFirst({ where: { domain: host } });
            yield this.redis.setex('domain:' + host, 3600, JSON.stringify(domain));
            return domain;
        });
    }
};
DomainService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, nestjs_redis_1.InjectRedis)()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof ioredis_1.default !== "undefined" && ioredis_1.default) === "function" ? _a : Object, typeof (_b = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _b : Object])
], DomainService);
exports.DomainService = DomainService;


/***/ }),

/***/ "./apps/koj/src/modules/group/group.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const group_service_1 = __webpack_require__("./apps/koj/src/modules/group/group.service.ts");
const group_resolver_1 = __webpack_require__("./apps/koj/src/modules/group/group.resolver.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const group_mutation_1 = __webpack_require__("./apps/koj/src/modules/group/group.mutation.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
let GroupModule = class GroupModule {
};
GroupModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error('Function not implemented.');
                },
            }),
        ],
        providers: [group_resolver_1.GroupResolver, group_mutation_1.GroupMutationResolver, group_service_1.GroupService],
    })
], GroupModule);
exports.GroupModule = GroupModule;


/***/ }),

/***/ "./apps/koj/src/modules/group/group.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMutationResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const group_model_1 = __webpack_require__("./generated/group/group.model.ts");
const group_create_input_1 = __webpack_require__("./generated/group/group-create.input.ts");
const group_update_input_1 = __webpack_require__("./generated/group/group-update.input.ts");
const group_where_unique_input_1 = __webpack_require__("./generated/group/group-where-unique.input.ts");
const group_type_1 = __webpack_require__("./apps/koj/src/modules/group/group.type.ts");
const group_service_1 = __webpack_require__("./apps/koj/src/modules/group/group.service.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
let GroupMutationResolver = class GroupMutationResolver {
    constructor(groupService) {
        this.groupService = groupService;
    }
    createGroup(data) {
        return this.groupService.create(data);
    }
    updateGroup(data, where, info) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { select } = new plugins_1.PrismaSelect(info).value;
            return this.groupService.update(data, where, select);
        });
    }
    removeGroup(where) {
        return this.groupService.remove(where);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => group_model_1.Group),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'create',
        resource: 'group',
        noUniqueInput: true,
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof group_create_input_1.GroupCreateInput !== "undefined" && group_create_input_1.GroupCreateInput) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GroupMutationResolver.prototype, "createGroup", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => group_model_1.Group),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'edit',
        resource: 'group',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(2, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof group_update_input_1.GroupUpdateInput !== "undefined" && group_update_input_1.GroupUpdateInput) === "function" ? _b : Object, typeof (_c = typeof group_where_unique_input_1.GroupWhereUniqueInput !== "undefined" && group_where_unique_input_1.GroupWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupMutationResolver.prototype, "updateGroup", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => group_model_1.Group),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'delete',
        resource: 'group',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof group_where_unique_input_1.GroupWhereUniqueInput !== "undefined" && group_where_unique_input_1.GroupWhereUniqueInput) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GroupMutationResolver.prototype, "removeGroup", null);
GroupMutationResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => group_type_1.GroupMutations),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _f : Object])
], GroupMutationResolver);
exports.GroupMutationResolver = GroupMutationResolver;


/***/ }),

/***/ "./apps/koj/src/modules/group/group.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const group_model_1 = __webpack_require__("./generated/group/group.model.ts");
const find_many_group_args_1 = __webpack_require__("./generated/group/find-many-group.args.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const group_where_unique_input_1 = __webpack_require__("./generated/group/group-where-unique.input.ts");
const group_type_1 = __webpack_require__("./apps/koj/src/modules/group/group.type.ts");
const group_service_1 = __webpack_require__("./apps/koj/src/modules/group/group.service.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
let GroupResolver = class GroupResolver {
    constructor(groupService) {
        this.groupService = groupService;
    }
    groupMutations() {
        return {};
    }
    groups(args, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.groupService.findMany(args, select);
    }
    findUnique(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.groupService.findUnique(where, select);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => group_type_1.GroupMutations, { name: 'group', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GroupResolver.prototype, "groupMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [group_model_1.Group], { name: 'groups' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'group',
        noUniqueInput: true,
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_group_args_1.FindManyGroupArgs !== "undefined" && find_many_group_args_1.FindManyGroupArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GroupResolver.prototype, "groups", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => group_model_1.Group, { name: 'group' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'group',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof group_where_unique_input_1.GroupWhereUniqueInput !== "undefined" && group_where_unique_input_1.GroupWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GroupResolver.prototype, "findUnique", null);
GroupResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => group_model_1.Group),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _e : Object])
], GroupResolver);
exports.GroupResolver = GroupResolver;


/***/ }),

/***/ "./apps/koj/src/modules/group/group.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
let GroupService = class GroupService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.group.create({ data });
    }
    findMany(args, select) {
        return this.prisma.group.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    findUnique(where, select) {
        return this.prisma.group.findUnique({ where, select });
    }
    findFist(where, select) {
        return this.prisma.group.findFirst({ where, select });
    }
    update(data, where, select) {
        return this.prisma.group.update({ data, where, select });
    }
    remove(where) {
        return this.prisma.group.update({ data: { status: 'deleted' }, where });
    }
};
GroupService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object])
], GroupService);
exports.GroupService = GroupService;


/***/ }),

/***/ "./apps/koj/src/modules/group/group.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let GroupMutations = class GroupMutations {
};
GroupMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], GroupMutations);
exports.GroupMutations = GroupMutations;


/***/ }),

/***/ "./apps/koj/src/modules/post/dto/create-post.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePostInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let CreatePostInput = class CreatePostInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], CreatePostInput.prototype, "exampleField", void 0);
CreatePostInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;


/***/ }),

/***/ "./apps/koj/src/modules/post/dto/update-post.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePostInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const create_post_input_1 = __webpack_require__("./apps/koj/src/modules/post/dto/create-post.input.ts");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let UpdatePostInput = class UpdatePostInput extends (0, graphql_1.PartialType)(create_post_input_1.CreatePostInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdatePostInput.prototype, "id", void 0);
UpdatePostInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdatePostInput);
exports.UpdatePostInput = UpdatePostInput;


/***/ }),

/***/ "./apps/koj/src/modules/post/post.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const post_service_1 = __webpack_require__("./apps/koj/src/modules/post/post.service.ts");
const post_resolver_1 = __webpack_require__("./apps/koj/src/modules/post/post.resolver.ts");
const post_mutation_1 = __webpack_require__("./apps/koj/src/modules/post/post.mutation.ts");
let PostModule = class PostModule {
};
PostModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [post_resolver_1.PostResolver, post_mutation_1.PostMutationsResolver, post_service_1.PostService, nestjs_prisma_1.PrismaService],
    })
], PostModule);
exports.PostModule = PostModule;


/***/ }),

/***/ "./apps/koj/src/modules/post/post.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const post_model_1 = __webpack_require__("./generated/post/post.model.ts");
const post_type_1 = __webpack_require__("./apps/koj/src/modules/post/post.type.ts");
const post_service_1 = __webpack_require__("./apps/koj/src/modules/post/post.service.ts");
const create_post_input_1 = __webpack_require__("./apps/koj/src/modules/post/dto/create-post.input.ts");
const update_post_input_1 = __webpack_require__("./apps/koj/src/modules/post/dto/update-post.input.ts");
let PostMutationsResolver = class PostMutationsResolver {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(createPostInput) {
        return this.postService.create(createPostInput);
    }
    updatePost(updatePostInput) {
        return this.postService.update(updatePostInput.id, updatePostInput);
    }
    removePost(id) {
        return this.postService.remove(id);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('createPostInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof create_post_input_1.CreatePostInput !== "undefined" && create_post_input_1.CreatePostInput) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostMutationsResolver.prototype, "createPost", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('updatePostInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_post_input_1.UpdatePostInput !== "undefined" && update_post_input_1.UpdatePostInput) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostMutationsResolver.prototype, "updatePost", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostMutationsResolver.prototype, "removePost", null);
PostMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => post_type_1.PostMutations),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _c : Object])
], PostMutationsResolver);
exports.PostMutationsResolver = PostMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/post/post.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const post_model_1 = __webpack_require__("./generated/post/post.model.ts");
const find_many_post_args_1 = __webpack_require__("./generated/post/find-many-post.args.ts");
const find_unique_post_args_1 = __webpack_require__("./generated/post/find-unique-post.args.ts");
const post_type_1 = __webpack_require__("./apps/koj/src/modules/post/post.type.ts");
const post_service_1 = __webpack_require__("./apps/koj/src/modules/post/post.service.ts");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    postMutations() {
        return {};
    }
    findMany(args, info) {
        const select = new plugins_1.PrismaSelect(info).value;
        return this.postService.findMany(args, select);
    }
    findUnique(args, info) {
        const select = new plugins_1.PrismaSelect(info).value;
        return this.postService.findUnique(args, select);
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => post_type_1.PostMutations, { name: 'post', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostResolver.prototype, "postMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [post_model_1.Post], { name: 'posts' }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_post_args_1.FindManyPostArgs !== "undefined" && find_many_post_args_1.FindManyPostArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostResolver.prototype, "findMany", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => post_model_1.Post, { name: 'post' }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof find_unique_post_args_1.FindUniquePostArgs !== "undefined" && find_unique_post_args_1.FindUniquePostArgs) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostResolver.prototype, "findUnique", null);
PostResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => post_model_1.Post),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _e : Object])
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ "./apps/koj/src/modules/post/post.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPostInput) {
        return 'This action adds a new post';
    }
    findMany(args, select) {
        return this.prisma.post.findMany(Object.assign(Object.assign({}, args), select));
    }
    findUnique(args, select) {
        return this.prisma.post.findUnique(Object.assign(Object.assign({}, args), select));
    }
    update(id, updatePostInput) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
PostService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object])
], PostService);
exports.PostService = PostService;


/***/ }),

/***/ "./apps/koj/src/modules/post/post.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let PostMutations = class PostMutations {
};
PostMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], PostMutations);
exports.PostMutations = PostMutations;


/***/ }),

/***/ "./apps/koj/src/modules/role/dto/role-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolePolicies = exports.RoleCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const role_create_input_1 = __webpack_require__("./generated/role/role-create.input.ts");
let RoleCreateInput = class RoleCreateInput extends (0, graphql_1.PartialType)(role_create_input_1.RoleCreateInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [RolePolicies], { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Array)
], RoleCreateInput.prototype, "policies", void 0);
RoleCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], RoleCreateInput);
exports.RoleCreateInput = RoleCreateInput;
let RolePolicies = class RolePolicies {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RolePolicies.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RolePolicies.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RolePolicies.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RolePolicies.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RolePolicies.prototype, "condition", void 0);
RolePolicies = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], RolePolicies);
exports.RolePolicies = RolePolicies;


/***/ }),

/***/ "./apps/koj/src/modules/role/role.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_pino_1 = __webpack_require__("nestjs-pino");
let RoleController = class RoleController {
    constructor(logger) {
        this.logger = logger;
    }
    getData() {
        this.logger.info('hihi');
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleController.prototype, "getData", null);
RoleController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('/role'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_pino_1.PinoLogger !== "undefined" && nestjs_pino_1.PinoLogger) === "function" ? _a : Object])
], RoleController);
exports.RoleController = RoleController;


/***/ }),

/***/ "./apps/koj/src/modules/role/role.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const role_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.module.ts");
const policy_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.module.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/role/role.service.ts");
const role_resolver_1 = __webpack_require__("./apps/koj/src/modules/role/role.resolver.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const role_mutation_1 = __webpack_require__("./apps/koj/src/modules/role/role.mutation.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
let RoleModule = class RoleModule {
};
RoleModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ROLE_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: 'role_queue',
                    },
                },
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error('Function not implemented.');
                },
            }),
            policy_module_1.PolicyModule,
            role_module_1.RoleGroupModule,
            logger_module_1.LoggerModule,
        ],
        providers: [role_resolver_1.RoleResolver, role_mutation_1.RoleMutationsResolver, role_service_1.RoleService, instrumentation_1.RPCTraceClientProxy],
        exports: [role_resolver_1.RoleResolver, role_mutation_1.RoleMutationsResolver, role_service_1.RoleService],
    })
], RoleModule);
exports.RoleModule = RoleModule;


/***/ }),

/***/ "./apps/koj/src/modules/role/role.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const nestjs_otel_1 = __webpack_require__("nestjs-otel");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const role_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const role_model_1 = __webpack_require__("./generated/role/role.model.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const role_update_input_1 = __webpack_require__("./generated/role/role-update.input.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const role_where_unique_input_1 = __webpack_require__("./generated/role/role-where-unique.input.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/role/role.service.ts");
const role_create_input_1 = __webpack_require__("./apps/koj/src/modules/role/dto/role-create.input.ts");
let RoleMutationsResolver = class RoleMutationsResolver {
    constructor(traceClient, roleService, traceService, commentClient) {
        this.traceClient = traceClient;
        this.roleService = roleService;
        this.traceService = traceService;
        this.commentClient = commentClient;
    }
    createRole(data, info) {
        const select = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.commentClient, constants_1.ROLE_CREATE, { data, select });
    }
    updateRole(data, where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        const payload = { data, where, select };
        return this.traceClient.send(this.commentClient, constants_1.ROLE_UPDATE, payload);
    }
    removeRole(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.commentClient, constants_1.ROLE_DELETE, { where, select });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => role_model_1.Role),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'create', resource: 'role' }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof role_create_input_1.RoleCreateInput !== "undefined" && role_create_input_1.RoleCreateInput) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleMutationsResolver.prototype, "createRole", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => role_model_1.Role),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'edit', resource: 'role' }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(2, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof role_update_input_1.RoleUpdateInput !== "undefined" && role_update_input_1.RoleUpdateInput) === "function" ? _c : Object, typeof (_d = typeof role_where_unique_input_1.RoleWhereUniqueInput !== "undefined" && role_where_unique_input_1.RoleWhereUniqueInput) === "function" ? _d : Object, typeof (_e = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleMutationsResolver.prototype, "updateRole", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => role_model_1.Role),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'delete', resource: 'role' }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof role_where_unique_input_1.RoleWhereUniqueInput !== "undefined" && role_where_unique_input_1.RoleWhereUniqueInput) === "function" ? _f : Object, typeof (_g = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _g : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleMutationsResolver.prototype, "removeRole", null);
RoleMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => role_type_1.RoleMutations),
    (0, tslib_1.__param)(3, (0, common_1.Inject)('ROLE_SERVICE')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _h : Object, typeof (_j = typeof role_service_1.RoleService !== "undefined" && role_service_1.RoleService) === "function" ? _j : Object, typeof (_k = typeof nestjs_otel_1.TraceService !== "undefined" && nestjs_otel_1.TraceService) === "function" ? _k : Object, typeof (_l = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _l : Object])
], RoleMutationsResolver);
exports.RoleMutationsResolver = RoleMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/role/role.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
// import { Logger } from '@nestjs/common';
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const role_model_1 = __webpack_require__("./generated/role/role.model.ts");
const role_type_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const find_many_role_args_1 = __webpack_require__("./generated/role/find-many-role.args.ts");
const role_where_unique_input_1 = __webpack_require__("./generated/role/role-where-unique.input.ts");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/role/role.service.ts");
const logger_service_1 = __webpack_require__("./apps/koj/src/logger/logger.service.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
let RoleResolver = class RoleResolver {
    constructor(roleService, logger, roleClient, traceClient) {
        this.roleService = roleService;
        this.logger = logger;
        this.roleClient = roleClient;
        this.traceClient = traceClient;
        // this.logger.setContext(RoleResolver.name);
    }
    roleMutations() {
        return {};
    }
    findMany(args, info) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { select } = new plugins_1.PrismaSelect(info).value;
            return this.traceClient.send(this.roleClient, constants_1.ROLE_FIND_MANY, { args, select });
        });
    }
    findUnique(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.roleClient, constants_1.ROLE_FIND_UNIQUE, { where, select });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => role_type_1.RoleMutations, { name: 'role', nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleResolver.prototype, "roleMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [role_model_1.Role], { name: 'roles' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'role',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_role_args_1.FindManyRoleArgs !== "undefined" && find_many_role_args_1.FindManyRoleArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleResolver.prototype, "findMany", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => role_model_1.Role, { name: 'role' }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: 'read',
        resource: 'role',
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)('where')),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof role_where_unique_input_1.RoleWhereUniqueInput !== "undefined" && role_where_unique_input_1.RoleWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RoleResolver.prototype, "findUnique", null);
RoleResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => role_model_1.Role),
    (0, tslib_1.__param)(2, (0, common_1.Inject)('ROLE_SERVICE')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof role_service_1.RoleService !== "undefined" && role_service_1.RoleService) === "function" ? _e : Object, typeof (_f = typeof logger_service_1.Logger !== "undefined" && logger_service_1.Logger) === "function" ? _f : Object, typeof (_g = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _g : Object, typeof (_h = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _h : Object])
], RoleResolver);
exports.RoleResolver = RoleResolver;


/***/ }),

/***/ "./apps/koj/src/modules/role/role.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const slugify_1 = (0, tslib_1.__importDefault)(__webpack_require__("slugify"));
const client_1 = __webpack_require__("@prisma/client");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const common_1 = __webpack_require__("@nestjs/common");
const role_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/role/role.service.ts");
const policy_service_1 = __webpack_require__("./apps/koj/src/modules/casbin/policy/policy.service.ts");
const common_2 = __webpack_require__("@nestjs/common");
let RoleService = class RoleService {
    constructor(casbinPolicyService, roleGroupService, prisma) {
        this.casbinPolicyService = casbinPolicyService;
        this.roleGroupService = roleGroupService;
        this.prisma = prisma;
    }
    createRole(data, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { createdById, createdByName, domainId } = data;
            const key = (0, slugify_1.default)(data.name);
            const checkExist = yield this.prisma.role.findFirst({
                where: { key, domainId },
                select: { id: true },
            });
            if (checkExist) {
                throw new common_1.ConflictException({
                    message: 'Role already exists',
                    statusCode: common_2.HttpStatus.CONFLICT,
                });
            }
            data.policies.forEach((element) => {
                Object.assign(element, {
                    domainId,
                    createdById,
                    createdByName,
                    subject: key,
                });
            });
            yield this.casbinPolicyService.createPolicies(data.policies);
            // TODO handle when inherit- multiple role
            yield this.roleGroupService.createRole({
                domainId,
                rule: key,
                role: key,
            }, { id: true });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { policies } = data, dataCreate = (0, tslib_1.__rest)(data, ["policies"]);
            dataCreate.key = key;
            return this.prisma.role.create(Object.assign({ data: dataCreate }, select));
        });
    }
    findMany(args, select) {
        return this.prisma.role.findMany(Object.assign(Object.assign({}, args), { select }));
    }
    findUnique(where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.prisma.role.findUnique({ where, select }).then((data) => {
                if (!data) {
                    throw new common_1.NotFoundException({
                        message: 'Role not exists',
                        statusCode: common_2.HttpStatus.NOT_FOUND,
                    });
                }
                return data;
            });
        });
    }
    update(data, where, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { domainId } = data;
            const key = (0, slugify_1.default)(data.name);
            const checkExistResult = yield this.prisma.role.findFirst({
                where: { key, domainId },
                select: { id: true, name: true },
            });
            if (checkExistResult && data.name === checkExistResult.name) {
                throw new common_1.ConflictException({
                    message: 'Role is exists',
                    statusCode: common_2.HttpStatus.CONFLICT,
                });
            }
            data.updatedAt = new Date().toISOString();
            return this.prisma.role.update({ data, where, select });
            // return this.prisma.role.update({ data, where, select }).catch((error) => {
            //   if (error instanceof Prisma.PrismaClientKnownRequestError) {
            //     if (error.code === 'P2025') {
            //       throw new NotFoundException({
            //         message: 'Role not exists',
            //         statusCode: HttpStatus.NOT_FOUND,
            //       });
            //     }
            //   }
            //   throw error;
            // });
        });
    }
    remove(where, select) {
        return this.prisma.role.delete({ where, select }).catch((error) => {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException();
                }
            }
            throw error;
        });
    }
};
RoleService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof policy_service_1.PolicyService !== "undefined" && policy_service_1.PolicyService) === "function" ? _a : Object, typeof (_b = typeof role_service_1.RoleGroupService !== "undefined" && role_service_1.RoleGroupService) === "function" ? _b : Object, typeof (_c = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _c : Object])
], RoleService);
exports.RoleService = RoleService;


/***/ }),

/***/ "./apps/koj/src/modules/submission-statistic/submission-statistic.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const submission_statistic_resolver_1 = __webpack_require__("./apps/koj/src/modules/submission-statistic/submission-statistic.resolver.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const submission_statistic_mutation_1 = __webpack_require__("./apps/koj/src/modules/submission-statistic/submission-statistic.mutation.ts");
let SubmissionStatisticModule = class SubmissionStatisticModule {
};
SubmissionStatisticModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "SUBMISSION_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "submissionStatistic_queue"
                    }
                }
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error("Function not implemented.");
                }
            }),
            logger_module_1.LoggerModule
        ],
        providers: [
            submission_statistic_resolver_1.SubmissionStatisticResolver,
            submission_statistic_mutation_1.SubmissionStatisticMutationsResolver,
            instrumentation_1.RPCTraceClientProxy
        ]
    })
], SubmissionStatisticModule);
exports.SubmissionStatisticModule = SubmissionStatisticModule;


/***/ }),

/***/ "./apps/koj/src/modules/submission-statistic/submission-statistic.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const submission_statistic_model_1 = __webpack_require__("./generated/submission-statistic/submission-statistic.model.ts");
const submission_statistic_type_1 = __webpack_require__("./apps/koj/src/modules/submission-statistic/submission-statistic.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const submission_statistic_where_unique_input_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-where-unique.input.ts");
let SubmissionStatisticMutationsResolver = class SubmissionStatisticMutationsResolver {
    constructor(traceClient, submissionStatisticClient) {
        this.traceClient = traceClient;
        this.submissionStatisticClient = submissionStatisticClient;
    }
    removeSubmissionStatistic(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.submissionStatisticClient, constants_1.SUBMISSION_DELETE, {
            where,
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => submission_statistic_model_1.SubmissionStatistic),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "delete", resource: "submissionStatistic" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof submission_statistic_where_unique_input_1.SubmissionStatisticWhereUniqueInput !== "undefined" && submission_statistic_where_unique_input_1.SubmissionStatisticWhereUniqueInput) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionStatisticMutationsResolver.prototype, "removeSubmissionStatistic", null);
SubmissionStatisticMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => submission_statistic_type_1.SubmissionStatisticMutations),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("SUBMISSION_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _d : Object])
], SubmissionStatisticMutationsResolver);
exports.SubmissionStatisticMutationsResolver = SubmissionStatisticMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/submission-statistic/submission-statistic.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const submission_statistic_model_1 = __webpack_require__("./generated/submission-statistic/submission-statistic.model.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const find_many_submission_statistic_args_1 = __webpack_require__("./generated/submission-statistic/find-many-submission-statistic.args.ts");
const gql_domain_id_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-domain-id.decorator.ts");
const submission_statistic_type_1 = __webpack_require__("./apps/koj/src/modules/submission-statistic/submission-statistic.type.ts");
let SubmissionStatisticResolver = class SubmissionStatisticResolver {
    constructor(traceClient, submissionStatisticClient) {
        this.traceClient = traceClient;
        this.submissionStatisticClient = submissionStatisticClient;
    }
    submissionStatisticMutations() {
        return {};
    }
    findMany(args, info, domainId) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        args.where = args.where || {};
        args.where.domainId = domainId;
        return this.traceClient.send(this.submissionStatisticClient, constants_1.SUBMISSION_STATISTIC_FIND_MANY, {
            args,
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => submission_statistic_type_1.SubmissionStatisticMutations, {
        name: "submissionStatistic",
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionStatisticResolver.prototype, "submissionStatisticMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [submission_statistic_model_1.SubmissionStatistic], { name: "submissions_rank" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_submission_statistic_args_1.FindManySubmissionStatisticArgs !== "undefined" && find_many_submission_statistic_args_1.FindManySubmissionStatisticArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionStatisticResolver.prototype, "findMany", null);
SubmissionStatisticResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => submission_statistic_model_1.SubmissionStatistic),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("SUBMISSION_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _d : Object])
], SubmissionStatisticResolver);
exports.SubmissionStatisticResolver = SubmissionStatisticResolver;


/***/ }),

/***/ "./apps/koj/src/modules/submission-statistic/submission-statistic.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let SubmissionStatisticMutations = class SubmissionStatisticMutations {
};
SubmissionStatisticMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], SubmissionStatisticMutations);
exports.SubmissionStatisticMutations = SubmissionStatisticMutations;


/***/ }),

/***/ "./apps/koj/src/modules/submission/submission.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const logger_module_1 = __webpack_require__("./apps/koj/src/logger/logger.module.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const submission_resolver_1 = __webpack_require__("./apps/koj/src/modules/submission/submission.resolver.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const submission_mutation_1 = __webpack_require__("./apps/koj/src/modules/submission/submission.mutation.ts");
let SubmissionModule = class SubmissionModule {
};
SubmissionModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "SUBMISSION_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "submission_queue"
                    }
                }
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error("Function not implemented.");
                }
            }),
            logger_module_1.LoggerModule
        ],
        providers: [
            submission_resolver_1.SubmissionResolver,
            submission_mutation_1.SubmissionMutationsResolver,
            instrumentation_1.RPCTraceClientProxy
        ]
    })
], SubmissionModule);
exports.SubmissionModule = SubmissionModule;


/***/ }),

/***/ "./apps/koj/src/modules/submission/submission.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionMutationsResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const common_1 = __webpack_require__("@nestjs/common");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const submission_model_1 = __webpack_require__("./generated/submission/submission.model.ts");
const submission_type_1 = __webpack_require__("./apps/koj/src/modules/submission/submission.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const submission_where_unique_input_1 = __webpack_require__("./generated/submission/submission-where-unique.input.ts");
let SubmissionMutationsResolver = class SubmissionMutationsResolver {
    constructor(traceClient, submissionClient) {
        this.traceClient = traceClient;
        this.submissionClient = submissionClient;
    }
    removeSubmission(where, info) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.submissionClient, constants_1.SUBMISSION_DELETE, {
            where,
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.ResolveField)(() => submission_model_1.Submission),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "delete", resource: "submission" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof submission_where_unique_input_1.SubmissionWhereUniqueInput !== "undefined" && submission_where_unique_input_1.SubmissionWhereUniqueInput) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionMutationsResolver.prototype, "removeSubmission", null);
SubmissionMutationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => submission_type_1.SubmissionMutations),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("SUBMISSION_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _d : Object])
], SubmissionMutationsResolver);
exports.SubmissionMutationsResolver = SubmissionMutationsResolver;


/***/ }),

/***/ "./apps/koj/src/modules/submission/submission.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const submission_model_1 = __webpack_require__("./generated/submission/submission.model.ts");
const find_many_submission_args_1 = __webpack_require__("./generated/submission/find-many-submission.args.ts");
const submission_type_1 = __webpack_require__("./apps/koj/src/modules/submission/submission.type.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const gql_context_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-context.decorator.ts");
let SubmissionResolver = class SubmissionResolver {
    constructor(traceClient, submissionClient) {
        this.traceClient = traceClient;
        this.submissionClient = submissionClient;
    }
    submissionMutations() {
        return {};
    }
    findMany(args, info, context) {
        const { where } = context;
        const { select } = new plugins_1.PrismaSelect(info).value;
        args.where = args.where || {};
        args.where.domainId = where.domainId;
        args.where.createdById = where.createdById;
        return this.traceClient.send(this.submissionClient, constants_1.SUBMISSION_FIND_MANY_BY_USER, {
            args,
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => submission_type_1.SubmissionMutations, { name: "submission", nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionResolver.prototype, "submissionMutations", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [submission_model_1.Submission], { name: "submissions_by_user" }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({
        action: "read",
        resource: "challenge"
    }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_submission_args_1.FindManySubmissionArgs !== "undefined" && find_many_submission_args_1.FindManySubmissionArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SubmissionResolver.prototype, "findMany", null);
SubmissionResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => submission_model_1.Submission),
    (0, tslib_1.__param)(1, (0, common_1.Inject)("SUBMISSION_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _d : Object])
], SubmissionResolver);
exports.SubmissionResolver = SubmissionResolver;


/***/ }),

/***/ "./apps/koj/src/modules/submission/submission.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let SubmissionMutations = class SubmissionMutations {
};
SubmissionMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], SubmissionMutations);
exports.SubmissionMutations = SubmissionMutations;


/***/ }),

/***/ "./apps/koj/src/modules/user/dto/user-public.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPublic = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
let UserPublic = class UserPublic {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserPublic.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], UserPublic.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], UserPublic.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], UserPublic.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserPublic.prototype, "createdAt", void 0);
UserPublic = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], UserPublic);
exports.UserPublic = UserPublic;


/***/ }),

/***/ "./apps/koj/src/modules/user/dto/user-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KUserWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
let KUserWhereUniqueInput = class KUserWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], KUserWhereUniqueInput.prototype, "username", void 0);
KUserWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], KUserWhereUniqueInput);
exports.KUserWhereUniqueInput = KUserWhereUniqueInput;


/***/ }),

/***/ "./apps/koj/src/modules/user/password.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const bcrypt_1 = __webpack_require__("bcrypt");
let PasswordService = class PasswordService {
    constructor(configService) {
        this.configService = configService;
    }
    get bcryptSaltRounds() {
        const securityConfig = this.configService.get('security');
        const saltOrRounds = securityConfig.bcryptSaltOrRound;
        return Number.isInteger(Number(saltOrRounds))
            ? Number(saltOrRounds)
            : saltOrRounds;
    }
    validatePassword(password, hashedPassword) {
        return (0, bcrypt_1.compare)(password, hashedPassword);
    }
    hashPassword(password) {
        return (0, bcrypt_1.hash)(password, this.bcryptSaltRounds);
    }
};
PasswordService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PasswordService);
exports.PasswordService = PasswordService;


/***/ }),

/***/ "./apps/koj/src/modules/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const user_resolver_1 = __webpack_require__("./apps/koj/src/modules/user/user.resolver.ts");
const password_service_1 = __webpack_require__("./apps/koj/src/modules/user/password.service.ts");
const user_mutation_1 = __webpack_require__("./apps/koj/src/modules/user/user.mutation.ts");
const casbin_module_1 = __webpack_require__("./apps/koj/src/modules/casbin/casbin.module.ts");
const enforcer_provider_1 = __webpack_require__("./apps/koj/src/modules/casbin/enforcer.provider.ts");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const nats_config_1 = __webpack_require__("./apps/koj/src/configs/nats.config.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "USER_SERVICE",
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: nats_config_1.natsConfig.servers,
                        queue: "user_queue"
                    }
                }
            ]),
            casbin_module_1.CasbinModule.register({
                enforcerProvider: enforcer_provider_1.enforcerProvider,
                userFromContext: function (context) {
                    throw new Error("Function not implemented.");
                }
            })
        ],
        providers: [
            user_resolver_1.UserResolver,
            user_mutation_1.UserMutationResolver,
            user_service_1.UserService,
            password_service_1.PasswordService,
            instrumentation_1.RPCTraceClientProxy
        ]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/koj/src/modules/user/user.mutation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMutationResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const user_model_1 = __webpack_require__("./generated/user/user.model.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const user_create_input_1 = __webpack_require__("./generated/user/user-create.input.ts");
const user_update_input_1 = __webpack_require__("./generated/user/user-update.input.ts");
const user_where_unique_input_1 = __webpack_require__("./generated/user/user-where-unique.input.ts");
const gql_context_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-context.decorator.ts");
const user_type_1 = __webpack_require__("./apps/koj/src/modules/user/user.type.ts");
const graphql_2 = __webpack_require__("graphql");
let UserMutationResolver = class UserMutationResolver {
    constructor(traceClient, userClient) {
        this.traceClient = traceClient;
        this.userClient = userClient;
    }
    createUser(data, info, context) {
        const defaultFields = { User: { id: true } };
        const { select } = new plugins_1.PrismaSelect(info, { defaultFields }).value;
        Object.assign(data, context.data);
        return this.traceClient.send(this.userClient, constants_1.USER_CREATE, { data, select });
    }
    updateUser(data, where, context) {
        Object.assign(data, context.data);
        return this.traceClient.send(this.userClient, constants_1.USER_CREATE, { data, where });
    }
    removeUser(id) {
        return this.traceClient.send(this.userClient, constants_1.USER_CREATE, { id });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => user_model_1.User),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'create', resource: 'user' }),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_1.Info)()),
    (0, tslib_1.__param)(2, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_create_input_1.UserCreateInput !== "undefined" && user_create_input_1.UserCreateInput) === "function" ? _a : Object, typeof (_b = typeof graphql_2.GraphQLResolveInfo !== "undefined" && graphql_2.GraphQLResolveInfo) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserMutationResolver.prototype, "createUser", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => user_model_1.User),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'edit', resource: 'user' }),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('data')),
    (0, tslib_1.__param)(1, (0, graphql_1.Args)('where')),
    (0, tslib_1.__param)(2, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof user_update_input_1.UserUpdateInput !== "undefined" && user_update_input_1.UserUpdateInput) === "function" ? _c : Object, typeof (_d = typeof user_where_unique_input_1.UserWhereUniqueInput !== "undefined" && user_where_unique_input_1.UserWhereUniqueInput) === "function" ? _d : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserMutationResolver.prototype, "updateUser", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => user_model_1.User),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: 'delete', resource: 'user' }),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserMutationResolver.prototype, "removeUser", null);
UserMutationResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(() => user_type_1.UserMutations),
    (0, tslib_1.__param)(1, (0, common_1.Inject)('USER_SERVICE')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _e : Object, typeof (_f = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _f : Object])
], UserMutationResolver);
exports.UserMutationResolver = UserMutationResolver;


/***/ }),

/***/ "./apps/koj/src/modules/user/user.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("graphql");
const plugins_1 = __webpack_require__("@paljs/plugins");
const microservices_1 = __webpack_require__("@nestjs/microservices");
const common_1 = __webpack_require__("@nestjs/common");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const user_model_1 = __webpack_require__("./generated/user/user.model.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
const guards_1 = __webpack_require__("./libs/common/guards/src/index.ts");
const permisions_decorator_1 = __webpack_require__("./apps/koj/src/modules/casbin/permisions.decorator.ts");
const find_many_user_args_1 = __webpack_require__("./generated/user/find-many-user.args.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const gql_context_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-context.decorator.ts");
const gql_domain_id_decorator_1 = __webpack_require__("./apps/koj/src/decorators/gql-domain-id.decorator.ts");
const user_type_1 = __webpack_require__("./apps/koj/src/modules/user/user.type.ts");
const user_service_1 = __webpack_require__("./apps/koj/src/modules/user/user.service.ts");
const user_public_model_1 = __webpack_require__("./apps/koj/src/modules/user/dto/user-public.model.ts");
const user_where_unique_input_1 = __webpack_require__("./apps/koj/src/modules/user/dto/user-where-unique.input.ts");
let UserResolver = class UserResolver {
    constructor(userClient, traceClient, userService) {
        this.userClient = userClient;
        this.traceClient = traceClient;
        this.userService = userService;
    }
    userMutation() {
        return {};
    }
    users(args, info, context) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        args.where = args.where || {};
        args.where.domainId = context.where.domainId;
        return this.traceClient.send(this.userClient, constants_1.USER_FIND_MANY, {
            args,
            select
        });
    }
    getUserByUsername(where, info, domainId) {
        const { select } = new plugins_1.PrismaSelect(info).value;
        return this.traceClient.send(this.userClient, constants_1.USER_FIND_UNIQUE_BY_USERNAME, {
            where: { username_domainId: { username: where.username, domainId } },
            select
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_2.Mutation)(() => user_type_1.UserMutations, { name: "user", nullable: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserResolver.prototype, "userMutation", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => [user_model_1.User], { name: "users" }),
    (0, common_1.UseGuards)(guards_1.GqlAuthGuard, guards_1.GqlPolicyGuard),
    (0, permisions_decorator_1.Permissions)({ action: "read", resource: "user" }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)()),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_context_decorator_1.GqlContext)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_many_user_args_1.FindManyUserArgs !== "undefined" && find_many_user_args_1.FindManyUserArgs) === "function" ? _a : Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserResolver.prototype, "users", null);
(0, tslib_1.__decorate)([
    (0, graphql_2.Query)(() => user_public_model_1.UserPublic, { name: "user_public", nullable: true }),
    (0, tslib_1.__param)(0, (0, graphql_2.Args)("where")),
    (0, tslib_1.__param)(1, (0, graphql_2.Info)()),
    (0, tslib_1.__param)(2, (0, gql_domain_id_decorator_1.DomainId)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof user_where_unique_input_1.KUserWhereUniqueInput !== "undefined" && user_where_unique_input_1.KUserWhereUniqueInput) === "function" ? _c : Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UserResolver.prototype, "getUserByUsername", null);
UserResolver = (0, tslib_1.__decorate)([
    (0, graphql_2.Resolver)(() => user_model_1.User),
    (0, tslib_1.__param)(0, (0, common_1.Inject)("USER_SERVICE")),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof microservices_1.ClientNats !== "undefined" && microservices_1.ClientNats) === "function" ? _e : Object, typeof (_f = typeof instrumentation_1.RPCTraceClientProxy !== "undefined" && instrumentation_1.RPCTraceClientProxy) === "function" ? _f : Object, typeof (_g = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _g : Object])
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ "./apps/koj/src/modules/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const nanoid_1 = __webpack_require__("nanoid");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const password_service_1 = __webpack_require__("./apps/koj/src/modules/user/password.service.ts");
let UserService = class UserService {
    constructor(prisma, passwordService) {
        this.prisma = prisma;
        this.passwordService = passwordService;
    }
    create(data, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const isExisted = yield this.getUserByEmail({ email: data.email, domainId: data.domainId }, { id: true });
            if (isExisted) {
                throw new common_1.BadRequestException("User with that email already exists");
            }
            try {
                const hashedPassword = yield this.passwordService.hashPassword(data.password || (0, nanoid_1.nanoid)(8));
                const user = (yield this.prisma.user.create({
                    data: Object.assign(Object.assign({}, data), { password: hashedPassword }),
                    select
                }));
                return user;
            }
            catch (error) {
                throw new common_1.BadRequestException("Fail when create user");
            }
        });
    }
    createByUsername(data, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let username = data.username;
            const users = yield this.prisma.user.findMany({
                where: {
                    username: { startsWith: data.username },
                    domainId: data.domainId
                },
                select: { username: true },
                orderBy: { username: "desc" }
            });
            if (users.findIndex((user) => user.username === data.username) > -1) {
                const [string, digit] = users[0].username.split(/(\d+)(?!.*\d)/);
                username = `${string}${Number(digit) + 1}`;
            }
            console.log(username);
            try {
                const hashedPassword = yield this.passwordService.hashPassword(data.password || (0, nanoid_1.nanoid)(8));
                const user = (yield this.prisma.user.create({
                    data: Object.assign(Object.assign({}, data), { password: hashedPassword, username }),
                    select
                }));
                return user;
            }
            catch (error) {
                throw new common_1.BadRequestException("Fail when create user");
            }
        });
    }
    findMany(args, select, context) {
        const { where = {} } = args, args$ = (0, tslib_1.__rest)(args, ["where"]);
        where.domainId = context.where.domainId;
        return this.prisma.user.findMany(Object.assign(Object.assign({ where }, args$), select));
    }
    findUnique(where, select) {
        return this.prisma.user.findUnique({ where, select });
    }
    getUserById(id, select) {
        return this.prisma.user.findUnique({ where: { id }, select });
    }
    getUserByUsername(username_domainId, select) {
        const whereCondition = { username_domainId };
        return this.prisma.user.findUnique({ where: whereCondition, select });
    }
    getUserByEmail(email_domainId, select) {
        const whereCondition = { email_domainId };
        return this.prisma.user.findUnique({ where: whereCondition, select });
    }
    update(data, where) {
        return this.prisma.user.update({ data, where });
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof password_service_1.PasswordService !== "undefined" && password_service_1.PasswordService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./apps/koj/src/modules/user/user.type.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMutations = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let UserMutations = class UserMutations {
};
UserMutations = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], UserMutations);
exports.UserMutations = UserMutations;


/***/ }),

/***/ "./apps/koj/src/saga/saga-builder.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SagaDefinitionBuilder = exports.STEP_PHASE = void 0;
const tslib_1 = __webpack_require__("tslib");
const saga_processor_1 = __webpack_require__("./apps/koj/src/saga/saga-processor.ts");
var STEP_PHASE;
(function (STEP_PHASE) {
    STEP_PHASE["STEP_FORWARD"] = "STEP_FORWARD";
    STEP_PHASE["STEP_BACKWARD"] = "STEP_BACKWARD";
})(STEP_PHASE = exports.STEP_PHASE || (exports.STEP_PHASE = {}));
class SagaDefinitionBuilder {
    constructor() {
        this.index = null;
        this.sagaDefinitions = [];
    }
    step(channelName) {
        this.index = this.index === null ? 0 : this.index + 1;
        this.sagaDefinitions = [...this.sagaDefinitions, { channelName, phases: {} }];
        return this;
    }
    onReply(command, options) {
        this.checkIndex();
        this.sagaDefinitions[this.index].phases[STEP_PHASE.STEP_FORWARD] = {
            command,
            options,
        };
        return this;
    }
    withCompensation(command) {
        this.checkIndex();
        this.sagaDefinitions[this.index].phases[STEP_PHASE.STEP_BACKWARD] = {
            command,
        };
        return this;
    }
    checkIndex() {
        if (this.index === null) {
            throw new Error('before build saga definition, you need to invoke step function before');
        }
    }
    build() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const sagaProcessor = new saga_processor_1.SagaProcessor(this.sagaDefinitions);
            yield sagaProcessor.init();
            return sagaProcessor;
        });
    }
}
exports.SagaDefinitionBuilder = SagaDefinitionBuilder;


/***/ }),

/***/ "./apps/koj/src/saga/saga-processor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SagaProcessor = void 0;
const tslib_1 = __webpack_require__("tslib");
const kafkajs_1 = __webpack_require__("kafkajs");
const rxjs_1 = __webpack_require__("rxjs");
const saga_builder_1 = __webpack_require__("./apps/koj/src/saga/saga-builder.ts");
const kafka = new kafkajs_1.Kafka({ brokers: ['localhost:29092'] });
const admin = kafka.admin();
class SagaProcessor {
    constructor(sagaDefinitions) {
        this.sagaDefinitions = sagaDefinitions;
        this.producer = kafka.producer();
        this.consumer = kafka.consumer({ groupId: 'saga' });
        this.myObservable$ = new rxjs_1.Subject();
    }
    init() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield admin.connect();
            yield this.producer.connect();
            yield this.consumer.connect();
            const stepTopics = this.sagaDefinitions.map((definition) => definition.channelName);
            // create all channles (topics) for all saga steps
            // const kafkaTopics = stepTopics.map((topic): ITopicConfig => ({ topic }));
            // await admin.createTopics({ topics: kafkaTopics });
            console.log('Saga topics created successfully');
            // subscribe to all created channels of all saga steps
            for (const topic of stepTopics) {
                yield this.consumer.subscribe({ topic });
            }
            yield this.consumer.run({
                eachMessage: ({ topic, message, partition }) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                    var _a;
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString(),
                    });
                    const sagaMessage = JSON.parse((_a = message.value) === null || _a === void 0 ? void 0 : _a.toString());
                    const { saga, payload } = sagaMessage;
                    const { index, phase } = saga;
                    console.log('=== message recived', saga, payload);
                    switch (phase) {
                        case saga_builder_1.STEP_PHASE.STEP_FORWARD: {
                            const { command, options = {} } = this.sagaDefinitions[index].phases[saga_builder_1.STEP_PHASE.STEP_FORWARD];
                            try {
                                const result = yield command(payload);
                                if (options.passResult)
                                    payload.result[`${this.sagaDefinitions[index].channelName}`] = result;
                                yield this.makeStepForward(index + 1, payload);
                            }
                            catch (e) {
                                console.log('🚀 ~ file: saga-processor.ts ~ line 54 ~ SagaProcessor ~ eachMessage: ~ e', e);
                                yield this.makeStepBackward(index - 1, payload);
                            }
                            return;
                        }
                        case saga_builder_1.STEP_PHASE.STEP_BACKWARD: {
                            const stepBackward = this.sagaDefinitions[index].phases[saga_builder_1.STEP_PHASE.STEP_BACKWARD].command;
                            yield stepBackward(payload);
                            yield this.makeStepBackward(index - 1, payload);
                            return;
                        }
                        default: {
                            console.log('UNAVAILBLE SAGA PHASE');
                        }
                    }
                }),
            });
        });
    }
    makeStepForward(index, payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (index >= this.sagaDefinitions.length) {
                console.log('====> Saga finished and transaction successful');
                return this.myObservable$.next(payload);
                // return payload;
            }
            const message = {
                payload,
                saga: { index, phase: saga_builder_1.STEP_PHASE.STEP_FORWARD },
            };
            yield this.producer.send({
                topic: this.sagaDefinitions[index].channelName,
                messages: [{ value: JSON.stringify(message) }],
            });
        });
    }
    makeStepBackward(index, payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (index < 0) {
                console.log('===> Saga finished and transaction rolled back');
                return;
            }
            yield this.producer.send({
                topic: this.sagaDefinitions[index].channelName,
                messages: [
                    {
                        value: JSON.stringify({
                            payload,
                            saga: { index, phase: saga_builder_1.STEP_PHASE.STEP_BACKWARD },
                        }),
                    },
                ],
            });
        });
    }
    start(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            console.log('Saga started');
            payload.result = {};
            this.makeStepForward(0, payload);
            return (0, rxjs_1.lastValueFrom)(this.myObservable$.pipe((0, rxjs_1.take)(1)));
        });
    }
}
exports.SagaProcessor = SagaProcessor;


/***/ }),

/***/ "./apps/koj/src/tracing/tracer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tracer = void 0;
const api_1 = __webpack_require__("@opentelemetry/api");
exports.tracer = api_1.trace.getTracer('graphql-api-gateway', '2.2.2');
console.log('🚀 ~ file: tracer.ts ~ line 4 ~ tracer', exports.tracer);


/***/ }),

/***/ "./apps/koj/src/utils/crypto.util.ts":
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

/***/ "./apps/koj/src/utils/database-query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformObjectToQuery = void 0;
const string_util_1 = __webpack_require__("./apps/koj/src/utils/string.util.ts");
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

/***/ "./apps/koj/src/utils/string.util.ts":
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

/***/ "./generated/challenge/challenge-count.output.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeCount = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeCount = class ChallengeCount {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCount.prototype, "topicTags", void 0);
ChallengeCount = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ChallengeCount);
exports.ChallengeCount = ChallengeCount;


/***/ }),

/***/ "./generated/challenge/challenge-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const challenge_createaccepted_languages_input_1 = __webpack_require__("./generated/prisma/challenge-createaccepted-languages.input.ts");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_5 = __webpack_require__("@nestjs/graphql");
const challenge_createcompany_tags_input_1 = __webpack_require__("./generated/prisma/challenge-createcompany-tags.input.ts");
const topic_tag_create_nested_many_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-nested-many-without-challenges.input.ts");
let ChallengeCreateInput = class ChallengeCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_createaccepted_languages_input_1.ChallengeCreateacceptedLanguagesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_createaccepted_languages_input_1.ChallengeCreateacceptedLanguagesInput !== "undefined" && challenge_createaccepted_languages_input_1.ChallengeCreateacceptedLanguagesInput) === "function" ? _a : Object)
], ChallengeCreateInput.prototype, "acceptedLanguages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "languages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "audience", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "commentCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "contestId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "categoryId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_createcompany_tags_input_1.ChallengeCreatecompanyTagsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof challenge_createcompany_tags_input_1.ChallengeCreatecompanyTagsInput !== "undefined" && challenge_createcompany_tags_input_1.ChallengeCreatecompanyTagsInput) === "function" ? _b : Object)
], ChallengeCreateInput.prototype, "companyTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_create_nested_many_without_challenges_input_1.TopicTagCreateNestedManyWithoutChallengesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof topic_tag_create_nested_many_without_challenges_input_1.TopicTagCreateNestedManyWithoutChallengesInput !== "undefined" && topic_tag_create_nested_many_without_challenges_input_1.TopicTagCreateNestedManyWithoutChallengesInput) === "function" ? _c : Object)
], ChallengeCreateInput.prototype, "topicTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "contributors", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "examples", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "inputs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "structs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "types", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "highlightSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "hint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ChallengeCreateInput.prototype, "isFavorited", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "officalSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "testcases", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "difficulty", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "dislikes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "solutions", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeCreateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeCreateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeCreateInput.prototype, "updatedAt", void 0);
ChallengeCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeCreateInput);
exports.ChallengeCreateInput = ChallengeCreateInput;


/***/ }),

/***/ "./generated/challenge/challenge-list-relation-filter.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeListRelationFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const challenge_where_input_1 = __webpack_require__("./generated/challenge/challenge-where.input.ts");
let ChallengeListRelationFilter = class ChallengeListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_input_1.ChallengeWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_where_input_1.ChallengeWhereInput !== "undefined" && challenge_where_input_1.ChallengeWhereInput) === "function" ? _a : Object)
], ChallengeListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_input_1.ChallengeWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof challenge_where_input_1.ChallengeWhereInput !== "undefined" && challenge_where_input_1.ChallengeWhereInput) === "function" ? _b : Object)
], ChallengeListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_input_1.ChallengeWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof challenge_where_input_1.ChallengeWhereInput !== "undefined" && challenge_where_input_1.ChallengeWhereInput) === "function" ? _c : Object)
], ChallengeListRelationFilter.prototype, "none", void 0);
ChallengeListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeListRelationFilter);
exports.ChallengeListRelationFilter = ChallengeListRelationFilter;


/***/ }),

/***/ "./generated/challenge/challenge-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const topic_tag_order_by_relation_aggregate_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-order-by-relation-aggregate.input.ts");
let ChallengeOrderByWithRelationInput = class ChallengeOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "acceptedLanguages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "languages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "audience", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "commentCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "contestId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "categoryId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "companyTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_order_by_relation_aggregate_input_1.TopicTagOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_order_by_relation_aggregate_input_1.TopicTagOrderByRelationAggregateInput !== "undefined" && topic_tag_order_by_relation_aggregate_input_1.TopicTagOrderByRelationAggregateInput) === "function" ? _a : Object)
], ChallengeOrderByWithRelationInput.prototype, "topicTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "contributors", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "examples", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "inputs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "structs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "types", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "highlightSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "hint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "isFavorited", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "officalSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "testcases", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "difficulty", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "dislikes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "solutions", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeOrderByWithRelationInput.prototype, "updatedAt", void 0);
ChallengeOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeOrderByWithRelationInput);
exports.ChallengeOrderByWithRelationInput = ChallengeOrderByWithRelationInput;


/***/ }),

/***/ "./generated/challenge/challenge-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var ChallengeScalarFieldEnum;
(function (ChallengeScalarFieldEnum) {
    ChallengeScalarFieldEnum["id"] = "id";
    ChallengeScalarFieldEnum["title"] = "title";
    ChallengeScalarFieldEnum["slug"] = "slug";
    ChallengeScalarFieldEnum["acceptedLanguages"] = "acceptedLanguages";
    ChallengeScalarFieldEnum["languages"] = "languages";
    ChallengeScalarFieldEnum["rate"] = "rate";
    ChallengeScalarFieldEnum["audience"] = "audience";
    ChallengeScalarFieldEnum["functionName"] = "functionName";
    ChallengeScalarFieldEnum["commentCount"] = "commentCount";
    ChallengeScalarFieldEnum["contestId"] = "contestId";
    ChallengeScalarFieldEnum["status"] = "status";
    ChallengeScalarFieldEnum["categoryId"] = "categoryId";
    ChallengeScalarFieldEnum["description"] = "description";
    ChallengeScalarFieldEnum["companyTags"] = "companyTags";
    ChallengeScalarFieldEnum["contributors"] = "contributors";
    ChallengeScalarFieldEnum["examples"] = "examples";
    ChallengeScalarFieldEnum["inputs"] = "inputs";
    ChallengeScalarFieldEnum["structs"] = "structs";
    ChallengeScalarFieldEnum["types"] = "types";
    ChallengeScalarFieldEnum["output"] = "output";
    ChallengeScalarFieldEnum["highlightSolutionCount"] = "highlightSolutionCount";
    ChallengeScalarFieldEnum["hint"] = "hint";
    ChallengeScalarFieldEnum["isFavorited"] = "isFavorited";
    ChallengeScalarFieldEnum["officalSolutionCount"] = "officalSolutionCount";
    ChallengeScalarFieldEnum["testcases"] = "testcases";
    ChallengeScalarFieldEnum["difficulty"] = "difficulty";
    ChallengeScalarFieldEnum["likes"] = "likes";
    ChallengeScalarFieldEnum["dislikes"] = "dislikes";
    ChallengeScalarFieldEnum["solutions"] = "solutions";
    ChallengeScalarFieldEnum["domainId"] = "domainId";
    ChallengeScalarFieldEnum["createdById"] = "createdById";
    ChallengeScalarFieldEnum["createdByUsername"] = "createdByUsername";
    ChallengeScalarFieldEnum["createdByName"] = "createdByName";
    ChallengeScalarFieldEnum["createdAt"] = "createdAt";
    ChallengeScalarFieldEnum["updatedAt"] = "updatedAt";
})(ChallengeScalarFieldEnum = exports.ChallengeScalarFieldEnum || (exports.ChallengeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ChallengeScalarFieldEnum, { name: 'ChallengeScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/challenge/challenge-slug-domain-id-compound-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeSlugDomainIdCompoundUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeSlugDomainIdCompoundUniqueInput = class ChallengeSlugDomainIdCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSlugDomainIdCompoundUniqueInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeSlugDomainIdCompoundUniqueInput.prototype, "domainId", void 0);
ChallengeSlugDomainIdCompoundUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeSlugDomainIdCompoundUniqueInput);
exports.ChallengeSlugDomainIdCompoundUniqueInput = ChallengeSlugDomainIdCompoundUniqueInput;


/***/ }),

/***/ "./generated/challenge/challenge-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const challenge_updateaccepted_languages_input_1 = __webpack_require__("./generated/prisma/challenge-updateaccepted-languages.input.ts");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_5 = __webpack_require__("@nestjs/graphql");
const challenge_updatecompany_tags_input_1 = __webpack_require__("./generated/prisma/challenge-updatecompany-tags.input.ts");
const topic_tag_update_many_without_challenges_nested_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-many-without-challenges-nested.input.ts");
let ChallengeUpdateInput = class ChallengeUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_updateaccepted_languages_input_1.ChallengeUpdateacceptedLanguagesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_updateaccepted_languages_input_1.ChallengeUpdateacceptedLanguagesInput !== "undefined" && challenge_updateaccepted_languages_input_1.ChallengeUpdateacceptedLanguagesInput) === "function" ? _a : Object)
], ChallengeUpdateInput.prototype, "acceptedLanguages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "languages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "audience", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "commentCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "contestId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "categoryId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_updatecompany_tags_input_1.ChallengeUpdatecompanyTagsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof challenge_updatecompany_tags_input_1.ChallengeUpdatecompanyTagsInput !== "undefined" && challenge_updatecompany_tags_input_1.ChallengeUpdatecompanyTagsInput) === "function" ? _b : Object)
], ChallengeUpdateInput.prototype, "companyTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_update_many_without_challenges_nested_input_1.TopicTagUpdateManyWithoutChallengesNestedInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof topic_tag_update_many_without_challenges_nested_input_1.TopicTagUpdateManyWithoutChallengesNestedInput !== "undefined" && topic_tag_update_many_without_challenges_nested_input_1.TopicTagUpdateManyWithoutChallengesNestedInput) === "function" ? _c : Object)
], ChallengeUpdateInput.prototype, "topicTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "contributors", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "examples", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "inputs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "structs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "types", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "highlightSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "hint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ChallengeUpdateInput.prototype, "isFavorited", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "officalSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "testcases", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "difficulty", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "dislikes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "solutions", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeUpdateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeUpdateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeUpdateInput.prototype, "updatedAt", void 0);
ChallengeUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeUpdateInput);
exports.ChallengeUpdateInput = ChallengeUpdateInput;


/***/ }),

/***/ "./generated/challenge/challenge-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const challenge_slug_domain_id_compound_unique_input_1 = __webpack_require__("./generated/challenge/challenge-slug-domain-id-compound-unique.input.ts");
let ChallengeWhereUniqueInput = class ChallengeWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_slug_domain_id_compound_unique_input_1.ChallengeSlugDomainIdCompoundUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_slug_domain_id_compound_unique_input_1.ChallengeSlugDomainIdCompoundUniqueInput !== "undefined" && challenge_slug_domain_id_compound_unique_input_1.ChallengeSlugDomainIdCompoundUniqueInput) === "function" ? _a : Object)
], ChallengeWhereUniqueInput.prototype, "slug_domainId", void 0);
ChallengeWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeWhereUniqueInput);
exports.ChallengeWhereUniqueInput = ChallengeWhereUniqueInput;


/***/ }),

/***/ "./generated/challenge/challenge-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ChallengeWhereInput_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const int_nullable_list_filter_input_1 = __webpack_require__("./generated/prisma/int-nullable-list-filter.input.ts");
const json_nullable_filter_input_1 = __webpack_require__("./generated/prisma/json-nullable-filter.input.ts");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_5 = __webpack_require__("@nestjs/graphql");
const topic_tag_list_relation_filter_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-list-relation-filter.input.ts");
let ChallengeWhereInput = ChallengeWhereInput_1 = class ChallengeWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ChallengeWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ChallengeWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ChallengeWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], ChallengeWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ChallengeWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], ChallengeWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_list_filter_input_1.IntNullableListFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof int_nullable_list_filter_input_1.IntNullableListFilter !== "undefined" && int_nullable_list_filter_input_1.IntNullableListFilter) === "function" ? _d : Object)
], ChallengeWhereInput.prototype, "acceptedLanguages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _e : Object)
], ChallengeWhereInput.prototype, "languages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "audience", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "commentCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "contestId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "categoryId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_list_filter_input_1.IntNullableListFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof int_nullable_list_filter_input_1.IntNullableListFilter !== "undefined" && int_nullable_list_filter_input_1.IntNullableListFilter) === "function" ? _f : Object)
], ChallengeWhereInput.prototype, "companyTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_list_relation_filter_input_1.TopicTagListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_g = typeof topic_tag_list_relation_filter_input_1.TopicTagListRelationFilter !== "undefined" && topic_tag_list_relation_filter_input_1.TopicTagListRelationFilter) === "function" ? _g : Object)
], ChallengeWhereInput.prototype, "topicTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_h = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _h : Object)
], ChallengeWhereInput.prototype, "contributors", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_j = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _j : Object)
], ChallengeWhereInput.prototype, "examples", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_k = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _k : Object)
], ChallengeWhereInput.prototype, "inputs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_l = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _l : Object)
], ChallengeWhereInput.prototype, "structs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_m = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _m : Object)
], ChallengeWhereInput.prototype, "types", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "highlightSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_o = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _o : Object)
], ChallengeWhereInput.prototype, "hint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ChallengeWhereInput.prototype, "isFavorited", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "officalSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_p = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _p : Object)
], ChallengeWhereInput.prototype, "testcases", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "difficulty", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "dislikes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_q = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _q : Object)
], ChallengeWhereInput.prototype, "solutions", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeWhereInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], ChallengeWhereInput.prototype, "updatedAt", void 0);
ChallengeWhereInput = ChallengeWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeWhereInput);
exports.ChallengeWhereInput = ChallengeWhereInput;


/***/ }),

/***/ "./generated/challenge/challenge.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Challenge = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
const graphql_5 = __webpack_require__("@nestjs/graphql");
const topic_tag_model_1 = __webpack_require__("./generated/topic-tag/topic-tag.model.ts");
const graphql_6 = __webpack_require__("@nestjs/graphql");
const challenge_count_output_1 = __webpack_require__("./generated/challenge/challenge-count.output.ts");
let Challenge = class Challenge {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], Challenge.prototype, "acceptedLanguages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "languages", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "rate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'onlyme' }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "audience", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "commentCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "contestId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'disabled' }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "categoryId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], Challenge.prototype, "companyTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_model_1.TopicTag], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], Challenge.prototype, "topicTags", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "contributors", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "examples", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "inputs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "structs", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "types", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "highlightSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "hint", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Challenge.prototype, "isFavorited", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "officalSolutionCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "testcases", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'easy' }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "difficulty", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "dislikes", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Challenge.prototype, "solutions", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_6.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_6.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Challenge.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Challenge.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Challenge.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Challenge.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_count_output_1.ChallengeCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof challenge_count_output_1.ChallengeCount !== "undefined" && challenge_count_output_1.ChallengeCount) === "function" ? _f : Object)
], Challenge.prototype, "_count", void 0);
Challenge = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Challenge);
exports.Challenge = Challenge;


/***/ }),

/***/ "./generated/challenge/find-many-challenge.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyChallengeArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const challenge_where_input_1 = __webpack_require__("./generated/challenge/challenge-where.input.ts");
const challenge_order_by_with_relation_input_1 = __webpack_require__("./generated/challenge/challenge-order-by-with-relation.input.ts");
const challenge_where_unique_input_1 = __webpack_require__("./generated/challenge/challenge-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const challenge_scalar_field_enum_1 = __webpack_require__("./generated/challenge/challenge-scalar-field.enum.ts");
let FindManyChallengeArgs = class FindManyChallengeArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_input_1.ChallengeWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_where_input_1.ChallengeWhereInput !== "undefined" && challenge_where_input_1.ChallengeWhereInput) === "function" ? _a : Object)
], FindManyChallengeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [challenge_order_by_with_relation_input_1.ChallengeOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyChallengeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_unique_input_1.ChallengeWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof challenge_where_unique_input_1.ChallengeWhereUniqueInput !== "undefined" && challenge_where_unique_input_1.ChallengeWhereUniqueInput) === "function" ? _c : Object)
], FindManyChallengeArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyChallengeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyChallengeArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [challenge_scalar_field_enum_1.ChallengeScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyChallengeArgs.prototype, "distinct", void 0);
FindManyChallengeArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyChallengeArgs);
exports.FindManyChallengeArgs = FindManyChallengeArgs;


/***/ }),

/***/ "./generated/group/find-many-group.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyGroupArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const group_where_input_1 = __webpack_require__("./generated/group/group-where.input.ts");
const group_order_by_with_relation_input_1 = __webpack_require__("./generated/group/group-order-by-with-relation.input.ts");
const group_where_unique_input_1 = __webpack_require__("./generated/group/group-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const group_scalar_field_enum_1 = __webpack_require__("./generated/group/group-scalar-field.enum.ts");
let FindManyGroupArgs = class FindManyGroupArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => group_where_input_1.GroupWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof group_where_input_1.GroupWhereInput !== "undefined" && group_where_input_1.GroupWhereInput) === "function" ? _a : Object)
], FindManyGroupArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [group_order_by_with_relation_input_1.GroupOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyGroupArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => group_where_unique_input_1.GroupWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof group_where_unique_input_1.GroupWhereUniqueInput !== "undefined" && group_where_unique_input_1.GroupWhereUniqueInput) === "function" ? _c : Object)
], FindManyGroupArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyGroupArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyGroupArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [group_scalar_field_enum_1.GroupScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyGroupArgs.prototype, "distinct", void 0);
FindManyGroupArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyGroupArgs);
exports.FindManyGroupArgs = FindManyGroupArgs;


/***/ }),

/***/ "./generated/group/group-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let GroupCreateInput = class GroupCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupCreateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupCreateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupCreateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupCreateInput.prototype, "updatedAt", void 0);
GroupCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], GroupCreateInput);
exports.GroupCreateInput = GroupCreateInput;


/***/ }),

/***/ "./generated/group/group-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let GroupOrderByWithRelationInput = class GroupOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupOrderByWithRelationInput.prototype, "updatedAt", void 0);
GroupOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], GroupOrderByWithRelationInput);
exports.GroupOrderByWithRelationInput = GroupOrderByWithRelationInput;


/***/ }),

/***/ "./generated/group/group-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var GroupScalarFieldEnum;
(function (GroupScalarFieldEnum) {
    GroupScalarFieldEnum["id"] = "id";
    GroupScalarFieldEnum["name"] = "name";
    GroupScalarFieldEnum["key"] = "key";
    GroupScalarFieldEnum["status"] = "status";
    GroupScalarFieldEnum["description"] = "description";
    GroupScalarFieldEnum["domainId"] = "domainId";
    GroupScalarFieldEnum["createdById"] = "createdById";
    GroupScalarFieldEnum["createdByUsername"] = "createdByUsername";
    GroupScalarFieldEnum["createdByName"] = "createdByName";
    GroupScalarFieldEnum["createdAt"] = "createdAt";
    GroupScalarFieldEnum["updatedAt"] = "updatedAt";
})(GroupScalarFieldEnum = exports.GroupScalarFieldEnum || (exports.GroupScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/group/group-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let GroupUpdateInput = class GroupUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupUpdateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupUpdateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupUpdateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupUpdateInput.prototype, "updatedAt", void 0);
GroupUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], GroupUpdateInput);
exports.GroupUpdateInput = GroupUpdateInput;


/***/ }),

/***/ "./generated/group/group-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let GroupWhereUniqueInput = class GroupWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupWhereUniqueInput.prototype, "id", void 0);
GroupWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], GroupWhereUniqueInput);
exports.GroupWhereUniqueInput = GroupWhereUniqueInput;


/***/ }),

/***/ "./generated/group/group-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var GroupWhereInput_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let GroupWhereInput = GroupWhereInput_1 = class GroupWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [GroupWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], GroupWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [GroupWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], GroupWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [GroupWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], GroupWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], GroupWhereInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], GroupWhereInput.prototype, "updatedAt", void 0);
GroupWhereInput = GroupWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], GroupWhereInput);
exports.GroupWhereInput = GroupWhereInput;


/***/ }),

/***/ "./generated/group/group.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Group = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let Group = class Group {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Group.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'disabled' }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Group.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Group.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Group.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Group.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Group.prototype, "updatedAt", void 0);
Group = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Group);
exports.Group = Group;


/***/ }),

/***/ "./generated/policy/find-many-policy.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyPolicyArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const policy_where_input_1 = __webpack_require__("./generated/policy/policy-where.input.ts");
const policy_order_by_with_relation_input_1 = __webpack_require__("./generated/policy/policy-order-by-with-relation.input.ts");
const policy_where_unique_input_1 = __webpack_require__("./generated/policy/policy-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const policy_scalar_field_enum_1 = __webpack_require__("./generated/policy/policy-scalar-field.enum.ts");
let FindManyPolicyArgs = class FindManyPolicyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => policy_where_input_1.PolicyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof policy_where_input_1.PolicyWhereInput !== "undefined" && policy_where_input_1.PolicyWhereInput) === "function" ? _a : Object)
], FindManyPolicyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [policy_order_by_with_relation_input_1.PolicyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyPolicyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => policy_where_unique_input_1.PolicyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof policy_where_unique_input_1.PolicyWhereUniqueInput !== "undefined" && policy_where_unique_input_1.PolicyWhereUniqueInput) === "function" ? _c : Object)
], FindManyPolicyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyPolicyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyPolicyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [policy_scalar_field_enum_1.PolicyScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyPolicyArgs.prototype, "distinct", void 0);
FindManyPolicyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyPolicyArgs);
exports.FindManyPolicyArgs = FindManyPolicyArgs;


/***/ }),

/***/ "./generated/policy/policy-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PolicyCreateInput = class PolicyCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyCreateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyCreateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyCreateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyCreateInput.prototype, "updatedAt", void 0);
PolicyCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PolicyCreateInput);
exports.PolicyCreateInput = PolicyCreateInput;


/***/ }),

/***/ "./generated/policy/policy-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PolicyOrderByWithRelationInput = class PolicyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyOrderByWithRelationInput.prototype, "updatedAt", void 0);
PolicyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PolicyOrderByWithRelationInput);
exports.PolicyOrderByWithRelationInput = PolicyOrderByWithRelationInput;


/***/ }),

/***/ "./generated/policy/policy-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var PolicyScalarFieldEnum;
(function (PolicyScalarFieldEnum) {
    PolicyScalarFieldEnum["id"] = "id";
    PolicyScalarFieldEnum["ptype"] = "ptype";
    PolicyScalarFieldEnum["subject"] = "subject";
    PolicyScalarFieldEnum["object"] = "object";
    PolicyScalarFieldEnum["action"] = "action";
    PolicyScalarFieldEnum["effect"] = "effect";
    PolicyScalarFieldEnum["effectWith"] = "effectWith";
    PolicyScalarFieldEnum["condition"] = "condition";
    PolicyScalarFieldEnum["domainId"] = "domainId";
    PolicyScalarFieldEnum["createdById"] = "createdById";
    PolicyScalarFieldEnum["createdByUsername"] = "createdByUsername";
    PolicyScalarFieldEnum["createdByName"] = "createdByName";
    PolicyScalarFieldEnum["createdAt"] = "createdAt";
    PolicyScalarFieldEnum["updatedAt"] = "updatedAt";
})(PolicyScalarFieldEnum = exports.PolicyScalarFieldEnum || (exports.PolicyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PolicyScalarFieldEnum, { name: 'PolicyScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/policy/policy-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PolicyUpdateInput = class PolicyUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyUpdateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyUpdateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyUpdateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyUpdateInput.prototype, "updatedAt", void 0);
PolicyUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PolicyUpdateInput);
exports.PolicyUpdateInput = PolicyUpdateInput;


/***/ }),

/***/ "./generated/policy/policy-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PolicyWhereUniqueInput = class PolicyWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyWhereUniqueInput.prototype, "id", void 0);
PolicyWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PolicyWhereUniqueInput);
exports.PolicyWhereUniqueInput = PolicyWhereUniqueInput;


/***/ }),

/***/ "./generated/policy/policy-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PolicyWhereInput_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let PolicyWhereInput = PolicyWhereInput_1 = class PolicyWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PolicyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], PolicyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PolicyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], PolicyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PolicyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], PolicyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], PolicyWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PolicyWhereInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], PolicyWhereInput.prototype, "updatedAt", void 0);
PolicyWhereInput = PolicyWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PolicyWhereInput);
exports.PolicyWhereInput = PolicyWhereInput;


/***/ }),

/***/ "./generated/policy/policy.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Policy = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let Policy = class Policy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Policy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "subject", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "object", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "action", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'allow' }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "effect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'organize' }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "effectWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Policy.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Policy.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Policy.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Policy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Policy.prototype, "updatedAt", void 0);
Policy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Policy);
exports.Policy = Policy;


/***/ }),

/***/ "./generated/post/find-many-post.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyPostArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const post_where_input_1 = __webpack_require__("./generated/post/post-where.input.ts");
const post_order_by_with_relation_input_1 = __webpack_require__("./generated/post/post-order-by-with-relation.input.ts");
const post_where_unique_input_1 = __webpack_require__("./generated/post/post-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const post_scalar_field_enum_1 = __webpack_require__("./generated/post/post-scalar-field.enum.ts");
let FindManyPostArgs = class FindManyPostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof post_where_input_1.PostWhereInput !== "undefined" && post_where_input_1.PostWhereInput) === "function" ? _a : Object)
], FindManyPostArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_order_by_with_relation_input_1.PostOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyPostArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof post_where_unique_input_1.PostWhereUniqueInput !== "undefined" && post_where_unique_input_1.PostWhereUniqueInput) === "function" ? _c : Object)
], FindManyPostArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyPostArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyPostArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_scalar_field_enum_1.PostScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyPostArgs.prototype, "distinct", void 0);
FindManyPostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyPostArgs);
exports.FindManyPostArgs = FindManyPostArgs;


/***/ }),

/***/ "./generated/post/find-unique-post.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindUniquePostArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const post_where_unique_input_1 = __webpack_require__("./generated/post/post-where-unique.input.ts");
let FindUniquePostArgs = class FindUniquePostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof post_where_unique_input_1.PostWhereUniqueInput !== "undefined" && post_where_unique_input_1.PostWhereUniqueInput) === "function" ? _a : Object)
], FindUniquePostArgs.prototype, "where", void 0);
FindUniquePostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniquePostArgs);
exports.FindUniquePostArgs = FindUniquePostArgs;


/***/ }),

/***/ "./generated/post/post-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
let PostOrderByWithRelationInput = class PostOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithRelationInput.prototype, "domainId", void 0);
PostOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostOrderByWithRelationInput);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;


/***/ }),

/***/ "./generated/post/post-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["authorId"] = "authorId";
    PostScalarFieldEnum["domainId"] = "domainId";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/post/post-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostWhereUniqueInput.prototype, "id", void 0);
PostWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostWhereUniqueInput);
exports.PostWhereUniqueInput = PostWhereUniqueInput;


/***/ }),

/***/ "./generated/post/post-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PostWhereInput_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], PostWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], PostWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], PostWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PostWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PostWhereInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostWhereInput.prototype, "domainId", void 0);
PostWhereInput = PostWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;


/***/ }),

/***/ "./generated/post/post.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let Post = class Post {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Post.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "domainId", void 0);
Post = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Post);
exports.Post = Post;


/***/ }),

/***/ "./generated/prisma/challenge-createaccepted-languages.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeCreateacceptedLanguagesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeCreateacceptedLanguagesInput = class ChallengeCreateacceptedLanguagesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ChallengeCreateacceptedLanguagesInput.prototype, "set", void 0);
ChallengeCreateacceptedLanguagesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeCreateacceptedLanguagesInput);
exports.ChallengeCreateacceptedLanguagesInput = ChallengeCreateacceptedLanguagesInput;


/***/ }),

/***/ "./generated/prisma/challenge-createcompany-tags.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeCreatecompanyTagsInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeCreatecompanyTagsInput = class ChallengeCreatecompanyTagsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ChallengeCreatecompanyTagsInput.prototype, "set", void 0);
ChallengeCreatecompanyTagsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeCreatecompanyTagsInput);
exports.ChallengeCreatecompanyTagsInput = ChallengeCreatecompanyTagsInput;


/***/ }),

/***/ "./generated/prisma/challenge-updateaccepted-languages.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeUpdateacceptedLanguagesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeUpdateacceptedLanguagesInput = class ChallengeUpdateacceptedLanguagesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ChallengeUpdateacceptedLanguagesInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], ChallengeUpdateacceptedLanguagesInput.prototype, "push", void 0);
ChallengeUpdateacceptedLanguagesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeUpdateacceptedLanguagesInput);
exports.ChallengeUpdateacceptedLanguagesInput = ChallengeUpdateacceptedLanguagesInput;


/***/ }),

/***/ "./generated/prisma/challenge-updatecompany-tags.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeUpdatecompanyTagsInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let ChallengeUpdatecompanyTagsInput = class ChallengeUpdatecompanyTagsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ChallengeUpdatecompanyTagsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], ChallengeUpdatecompanyTagsInput.prototype, "push", void 0);
ChallengeUpdatecompanyTagsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeUpdatecompanyTagsInput);
exports.ChallengeUpdatecompanyTagsInput = ChallengeUpdatecompanyTagsInput;


/***/ }),

/***/ "./generated/prisma/int-nullable-list-filter.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntNullableListFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let IntNullableListFilter = class IntNullableListFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], IntNullableListFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableListFilter.prototype, "has", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], IntNullableListFilter.prototype, "hasEvery", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], IntNullableListFilter.prototype, "hasSome", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], IntNullableListFilter.prototype, "isEmpty", void 0);
IntNullableListFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], IntNullableListFilter);
exports.IntNullableListFilter = IntNullableListFilter;


/***/ }),

/***/ "./generated/prisma/json-nullable-filter.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonNullableFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
let JsonNullableFilter = class JsonNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], JsonNullableFilter.prototype, "path", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], JsonNullableFilter.prototype, "string_contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], JsonNullableFilter.prototype, "string_starts_with", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], JsonNullableFilter.prototype, "string_ends_with", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "array_contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "array_starts_with", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "array_ends_with", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], JsonNullableFilter.prototype, "not", void 0);
JsonNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], JsonNullableFilter);
exports.JsonNullableFilter = JsonNullableFilter;


/***/ }),

/***/ "./generated/prisma/sort-order.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortOrder = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
(0, graphql_1.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });


/***/ }),

/***/ "./generated/role-group/role-group-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleGroupCreateInput = class RoleGroupCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupCreateInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupCreateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupCreateInput.prototype, "rule", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleGroupCreateInput.prototype, "domainId", void 0);
RoleGroupCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleGroupCreateInput);
exports.RoleGroupCreateInput = RoleGroupCreateInput;


/***/ }),

/***/ "./generated/role-group/role-group-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleGroupUpdateInput = class RoleGroupUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupUpdateInput.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupUpdateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroupUpdateInput.prototype, "rule", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleGroupUpdateInput.prototype, "domainId", void 0);
RoleGroupUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleGroupUpdateInput);
exports.RoleGroupUpdateInput = RoleGroupUpdateInput;


/***/ }),

/***/ "./generated/role-group/role-group-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroupWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleGroupWhereUniqueInput = class RoleGroupWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleGroupWhereUniqueInput.prototype, "id", void 0);
RoleGroupWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleGroupWhereUniqueInput);
exports.RoleGroupWhereUniqueInput = RoleGroupWhereUniqueInput;


/***/ }),

/***/ "./generated/role-group/role-group.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleGroup = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let RoleGroup = class RoleGroup {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleGroup.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'g' }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroup.prototype, "ptype", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroup.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleGroup.prototype, "rule", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleGroup.prototype, "domainId", void 0);
RoleGroup = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], RoleGroup);
exports.RoleGroup = RoleGroup;


/***/ }),

/***/ "./generated/role/find-many-role.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyRoleArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const role_where_input_1 = __webpack_require__("./generated/role/role-where.input.ts");
const role_order_by_with_relation_input_1 = __webpack_require__("./generated/role/role-order-by-with-relation.input.ts");
const role_where_unique_input_1 = __webpack_require__("./generated/role/role-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const role_scalar_field_enum_1 = __webpack_require__("./generated/role/role-scalar-field.enum.ts");
let FindManyRoleArgs = class FindManyRoleArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_where_input_1.RoleWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof role_where_input_1.RoleWhereInput !== "undefined" && role_where_input_1.RoleWhereInput) === "function" ? _a : Object)
], FindManyRoleArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_order_by_with_relation_input_1.RoleOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyRoleArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_where_unique_input_1.RoleWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof role_where_unique_input_1.RoleWhereUniqueInput !== "undefined" && role_where_unique_input_1.RoleWhereUniqueInput) === "function" ? _c : Object)
], FindManyRoleArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyRoleArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyRoleArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_scalar_field_enum_1.RoleScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyRoleArgs.prototype, "distinct", void 0);
FindManyRoleArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyRoleArgs);
exports.FindManyRoleArgs = FindManyRoleArgs;


/***/ }),

/***/ "./generated/role/role-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleCreateInput = class RoleCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleCreateInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleCreateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleCreateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], RoleCreateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleCreateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleCreateInput.prototype, "updatedAt", void 0);
RoleCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleCreateInput);
exports.RoleCreateInput = RoleCreateInput;


/***/ }),

/***/ "./generated/role/role-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleOrderByWithRelationInput = class RoleOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleOrderByWithRelationInput.prototype, "updatedAt", void 0);
RoleOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleOrderByWithRelationInput);
exports.RoleOrderByWithRelationInput = RoleOrderByWithRelationInput;


/***/ }),

/***/ "./generated/role/role-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var RoleScalarFieldEnum;
(function (RoleScalarFieldEnum) {
    RoleScalarFieldEnum["id"] = "id";
    RoleScalarFieldEnum["key"] = "key";
    RoleScalarFieldEnum["name"] = "name";
    RoleScalarFieldEnum["description"] = "description";
    RoleScalarFieldEnum["domainId"] = "domainId";
    RoleScalarFieldEnum["createdById"] = "createdById";
    RoleScalarFieldEnum["createdByUsername"] = "createdByUsername";
    RoleScalarFieldEnum["createdByName"] = "createdByName";
    RoleScalarFieldEnum["createdAt"] = "createdAt";
    RoleScalarFieldEnum["updatedAt"] = "updatedAt";
})(RoleScalarFieldEnum = exports.RoleScalarFieldEnum || (exports.RoleScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/role/role-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleUpdateInput = class RoleUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleUpdateInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleUpdateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleUpdateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], RoleUpdateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleUpdateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleUpdateInput.prototype, "updatedAt", void 0);
RoleUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleUpdateInput);
exports.RoleUpdateInput = RoleUpdateInput;


/***/ }),

/***/ "./generated/role/role-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let RoleWhereUniqueInput = class RoleWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleWhereUniqueInput.prototype, "id", void 0);
RoleWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleWhereUniqueInput);
exports.RoleWhereUniqueInput = RoleWhereUniqueInput;


/***/ }),

/***/ "./generated/role/role-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var RoleWhereInput_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let RoleWhereInput = RoleWhereInput_1 = class RoleWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [RoleWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], RoleWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [RoleWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], RoleWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [RoleWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], RoleWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleWhereInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], RoleWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], RoleWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], RoleWhereInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], RoleWhereInput.prototype, "updatedAt", void 0);
RoleWhereInput = RoleWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], RoleWhereInput);
exports.RoleWhereInput = RoleWhereInput;


/***/ }),

/***/ "./generated/role/role.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let Role = class Role {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Role.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Role.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'none' }),
    (0, tslib_1.__metadata)("design:type", String)
], Role.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Role.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Role.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Role.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Role.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Role.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Role.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Role.prototype, "updatedAt", void 0);
Role = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Role);
exports.Role = Role;


/***/ }),

/***/ "./generated/submission-statistic/find-many-submission-statistic.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManySubmissionStatisticArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const submission_statistic_where_input_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-where.input.ts");
const submission_statistic_order_by_with_relation_input_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-order-by-with-relation.input.ts");
const submission_statistic_where_unique_input_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const submission_statistic_scalar_field_enum_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-scalar-field.enum.ts");
let FindManySubmissionStatisticArgs = class FindManySubmissionStatisticArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => submission_statistic_where_input_1.SubmissionStatisticWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof submission_statistic_where_input_1.SubmissionStatisticWhereInput !== "undefined" && submission_statistic_where_input_1.SubmissionStatisticWhereInput) === "function" ? _a : Object)
], FindManySubmissionStatisticArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [submission_statistic_order_by_with_relation_input_1.SubmissionStatisticOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManySubmissionStatisticArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => submission_statistic_where_unique_input_1.SubmissionStatisticWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof submission_statistic_where_unique_input_1.SubmissionStatisticWhereUniqueInput !== "undefined" && submission_statistic_where_unique_input_1.SubmissionStatisticWhereUniqueInput) === "function" ? _c : Object)
], FindManySubmissionStatisticArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySubmissionStatisticArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySubmissionStatisticArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [submission_statistic_scalar_field_enum_1.SubmissionStatisticScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManySubmissionStatisticArgs.prototype, "distinct", void 0);
FindManySubmissionStatisticArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManySubmissionStatisticArgs);
exports.FindManySubmissionStatisticArgs = FindManySubmissionStatisticArgs;


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic-created-by-id-challenge-id-compound-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput = class SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput.prototype, "challengeId", void 0);
SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput);
exports.SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput = SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput;


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let SubmissionStatisticOrderByWithRelationInput = class SubmissionStatisticOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "score", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "submitCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticOrderByWithRelationInput.prototype, "lastSubmitTime", void 0);
SubmissionStatisticOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionStatisticOrderByWithRelationInput);
exports.SubmissionStatisticOrderByWithRelationInput = SubmissionStatisticOrderByWithRelationInput;


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var SubmissionStatisticScalarFieldEnum;
(function (SubmissionStatisticScalarFieldEnum) {
    SubmissionStatisticScalarFieldEnum["id"] = "id";
    SubmissionStatisticScalarFieldEnum["challengeId"] = "challengeId";
    SubmissionStatisticScalarFieldEnum["languageId"] = "languageId";
    SubmissionStatisticScalarFieldEnum["score"] = "score";
    SubmissionStatisticScalarFieldEnum["submitCount"] = "submitCount";
    SubmissionStatisticScalarFieldEnum["info"] = "info";
    SubmissionStatisticScalarFieldEnum["domainId"] = "domainId";
    SubmissionStatisticScalarFieldEnum["createdById"] = "createdById";
    SubmissionStatisticScalarFieldEnum["createdByUsername"] = "createdByUsername";
    SubmissionStatisticScalarFieldEnum["lastSubmitTime"] = "lastSubmitTime";
})(SubmissionStatisticScalarFieldEnum = exports.SubmissionStatisticScalarFieldEnum || (exports.SubmissionStatisticScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(SubmissionStatisticScalarFieldEnum, { name: 'SubmissionStatisticScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const submission_statistic_created_by_id_challenge_id_compound_unique_input_1 = __webpack_require__("./generated/submission-statistic/submission-statistic-created-by-id-challenge-id-compound-unique.input.ts");
let SubmissionStatisticWhereUniqueInput = class SubmissionStatisticWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => submission_statistic_created_by_id_challenge_id_compound_unique_input_1.SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof submission_statistic_created_by_id_challenge_id_compound_unique_input_1.SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput !== "undefined" && submission_statistic_created_by_id_challenge_id_compound_unique_input_1.SubmissionStatisticCreatedByIdChallengeIdCompoundUniqueInput) === "function" ? _a : Object)
], SubmissionStatisticWhereUniqueInput.prototype, "createdById_challengeId", void 0);
SubmissionStatisticWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionStatisticWhereUniqueInput);
exports.SubmissionStatisticWhereUniqueInput = SubmissionStatisticWhereUniqueInput;


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SubmissionStatisticWhereInput_1, _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatisticWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const json_nullable_filter_input_1 = __webpack_require__("./generated/prisma/json-nullable-filter.input.ts");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let SubmissionStatisticWhereInput = SubmissionStatisticWhereInput_1 = class SubmissionStatisticWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionStatisticWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], SubmissionStatisticWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionStatisticWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], SubmissionStatisticWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionStatisticWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], SubmissionStatisticWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionStatisticWhereInput.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "score", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "submitCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _d : Object)
], SubmissionStatisticWhereInput.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatisticWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionStatisticWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatisticWhereInput.prototype, "lastSubmitTime", void 0);
SubmissionStatisticWhereInput = SubmissionStatisticWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionStatisticWhereInput);
exports.SubmissionStatisticWhereInput = SubmissionStatisticWhereInput;


/***/ }),

/***/ "./generated/submission-statistic/submission-statistic.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionStatistic = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
const graphql_5 = __webpack_require__("@nestjs/graphql");
let SubmissionStatistic = class SubmissionStatistic {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionStatistic.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "score", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "submitCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionStatistic.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionStatistic.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionStatistic.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SubmissionStatistic.prototype, "lastSubmitTime", void 0);
SubmissionStatistic = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], SubmissionStatistic);
exports.SubmissionStatistic = SubmissionStatistic;


/***/ }),

/***/ "./generated/submission/find-many-submission.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManySubmissionArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const submission_where_input_1 = __webpack_require__("./generated/submission/submission-where.input.ts");
const submission_order_by_with_relation_input_1 = __webpack_require__("./generated/submission/submission-order-by-with-relation.input.ts");
const submission_where_unique_input_1 = __webpack_require__("./generated/submission/submission-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const submission_scalar_field_enum_1 = __webpack_require__("./generated/submission/submission-scalar-field.enum.ts");
let FindManySubmissionArgs = class FindManySubmissionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => submission_where_input_1.SubmissionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof submission_where_input_1.SubmissionWhereInput !== "undefined" && submission_where_input_1.SubmissionWhereInput) === "function" ? _a : Object)
], FindManySubmissionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [submission_order_by_with_relation_input_1.SubmissionOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManySubmissionArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => submission_where_unique_input_1.SubmissionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof submission_where_unique_input_1.SubmissionWhereUniqueInput !== "undefined" && submission_where_unique_input_1.SubmissionWhereUniqueInput) === "function" ? _c : Object)
], FindManySubmissionArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySubmissionArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySubmissionArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [submission_scalar_field_enum_1.SubmissionScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManySubmissionArgs.prototype, "distinct", void 0);
FindManySubmissionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManySubmissionArgs);
exports.FindManySubmissionArgs = FindManySubmissionArgs;


/***/ }),

/***/ "./generated/submission/submission-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let SubmissionOrderByWithRelationInput = class SubmissionOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "result", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "shared", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionOrderByWithRelationInput.prototype, "createdAt", void 0);
SubmissionOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionOrderByWithRelationInput);
exports.SubmissionOrderByWithRelationInput = SubmissionOrderByWithRelationInput;


/***/ }),

/***/ "./generated/submission/submission-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var SubmissionScalarFieldEnum;
(function (SubmissionScalarFieldEnum) {
    SubmissionScalarFieldEnum["id"] = "id";
    SubmissionScalarFieldEnum["languageId"] = "languageId";
    SubmissionScalarFieldEnum["challengeId"] = "challengeId";
    SubmissionScalarFieldEnum["content"] = "content";
    SubmissionScalarFieldEnum["result"] = "result";
    SubmissionScalarFieldEnum["info"] = "info";
    SubmissionScalarFieldEnum["ip"] = "ip";
    SubmissionScalarFieldEnum["shared"] = "shared";
    SubmissionScalarFieldEnum["domainId"] = "domainId";
    SubmissionScalarFieldEnum["createdById"] = "createdById";
    SubmissionScalarFieldEnum["createdByUsername"] = "createdByUsername";
    SubmissionScalarFieldEnum["createdAt"] = "createdAt";
})(SubmissionScalarFieldEnum = exports.SubmissionScalarFieldEnum || (exports.SubmissionScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(SubmissionScalarFieldEnum, { name: 'SubmissionScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/submission/submission-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let SubmissionWhereUniqueInput = class SubmissionWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionWhereUniqueInput.prototype, "id", void 0);
SubmissionWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionWhereUniqueInput);
exports.SubmissionWhereUniqueInput = SubmissionWhereUniqueInput;


/***/ }),

/***/ "./generated/submission/submission-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SubmissionWhereInput_1, _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmissionWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const json_nullable_filter_input_1 = __webpack_require__("./generated/prisma/json-nullable-filter.input.ts");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let SubmissionWhereInput = SubmissionWhereInput_1 = class SubmissionWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], SubmissionWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], SubmissionWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SubmissionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], SubmissionWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionWhereInput.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionWhereInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionWhereInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _d : Object)
], SubmissionWhereInput.prototype, "result", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _e : Object)
], SubmissionWhereInput.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionWhereInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SubmissionWhereInput.prototype, "shared", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], SubmissionWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], SubmissionWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SubmissionWhereInput.prototype, "createdAt", void 0);
SubmissionWhereInput = SubmissionWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SubmissionWhereInput);
exports.SubmissionWhereInput = SubmissionWhereInput;


/***/ }),

/***/ "./generated/submission/submission.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Submission = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
const graphql_5 = __webpack_require__("@nestjs/graphql");
let Submission = class Submission {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Submission.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Submission.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Submission.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Submission.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Submission.prototype, "result", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Submission.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Submission.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Submission.prototype, "shared", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Submission.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_5.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Submission.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Submission.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Submission.prototype, "createdAt", void 0);
Submission = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Submission);
exports.Submission = Submission;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-count.output.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagCount = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let TopicTagCount = class TopicTagCount {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagCount.prototype, "challenges", void 0);
TopicTagCount = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], TopicTagCount);
exports.TopicTagCount = TopicTagCount;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-create-nested-many-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagCreateNestedManyWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_create_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-without-challenges.input.ts");
const topic_tag_create_or_connect_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-or-connect-without-challenges.input.ts");
const topic_tag_where_unique_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where-unique.input.ts");
let TopicTagCreateNestedManyWithoutChallengesInput = class TopicTagCreateNestedManyWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], TopicTagCreateNestedManyWithoutChallengesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_create_or_connect_without_challenges_input_1.TopicTagCreateOrConnectWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], TopicTagCreateNestedManyWithoutChallengesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_where_unique_input_1.TopicTagWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], TopicTagCreateNestedManyWithoutChallengesInput.prototype, "connect", void 0);
TopicTagCreateNestedManyWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagCreateNestedManyWithoutChallengesInput);
exports.TopicTagCreateNestedManyWithoutChallengesInput = TopicTagCreateNestedManyWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-create-or-connect-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagCreateOrConnectWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_where_unique_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where-unique.input.ts");
const topic_tag_create_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-without-challenges.input.ts");
let TopicTagCreateOrConnectWithoutChallengesInput = class TopicTagCreateOrConnectWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_unique_input_1.TopicTagWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_where_unique_input_1.TopicTagWhereUniqueInput !== "undefined" && topic_tag_where_unique_input_1.TopicTagWhereUniqueInput) === "function" ? _a : Object)
], TopicTagCreateOrConnectWithoutChallengesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput !== "undefined" && topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput) === "function" ? _b : Object)
], TopicTagCreateOrConnectWithoutChallengesInput.prototype, "create", void 0);
TopicTagCreateOrConnectWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagCreateOrConnectWithoutChallengesInput);
exports.TopicTagCreateOrConnectWithoutChallengesInput = TopicTagCreateOrConnectWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-create-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagCreateWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let TopicTagCreateWithoutChallengesInput = class TopicTagCreateWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagCreateWithoutChallengesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagCreateWithoutChallengesInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagCreateWithoutChallengesInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagCreateWithoutChallengesInput.prototype, "domainId", void 0);
TopicTagCreateWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagCreateWithoutChallengesInput);
exports.TopicTagCreateWithoutChallengesInput = TopicTagCreateWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-list-relation-filter.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagListRelationFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_where_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where.input.ts");
let TopicTagListRelationFilter = class TopicTagListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_input_1.TopicTagWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_where_input_1.TopicTagWhereInput !== "undefined" && topic_tag_where_input_1.TopicTagWhereInput) === "function" ? _a : Object)
], TopicTagListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_input_1.TopicTagWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_where_input_1.TopicTagWhereInput !== "undefined" && topic_tag_where_input_1.TopicTagWhereInput) === "function" ? _b : Object)
], TopicTagListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_input_1.TopicTagWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof topic_tag_where_input_1.TopicTagWhereInput !== "undefined" && topic_tag_where_input_1.TopicTagWhereInput) === "function" ? _c : Object)
], TopicTagListRelationFilter.prototype, "none", void 0);
TopicTagListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagListRelationFilter);
exports.TopicTagListRelationFilter = TopicTagListRelationFilter;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-order-by-relation-aggregate.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagOrderByRelationAggregateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
let TopicTagOrderByRelationAggregateInput = class TopicTagOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], TopicTagOrderByRelationAggregateInput.prototype, "_count", void 0);
TopicTagOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagOrderByRelationAggregateInput);
exports.TopicTagOrderByRelationAggregateInput = TopicTagOrderByRelationAggregateInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-scalar-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TopicTagScalarWhereInput_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagScalarWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
let TopicTagScalarWhereInput = TopicTagScalarWhereInput_1 = class TopicTagScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], TopicTagScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], TopicTagScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], TopicTagScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagScalarWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagScalarWhereInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagScalarWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagScalarWhereInput.prototype, "domainId", void 0);
TopicTagScalarWhereInput = TopicTagScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagScalarWhereInput);
exports.TopicTagScalarWhereInput = TopicTagScalarWhereInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-update-many-mutation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpdateManyMutationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let TopicTagUpdateManyMutationInput = class TopicTagUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateManyMutationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateManyMutationInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateManyMutationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagUpdateManyMutationInput.prototype, "domainId", void 0);
TopicTagUpdateManyMutationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpdateManyMutationInput);
exports.TopicTagUpdateManyMutationInput = TopicTagUpdateManyMutationInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-update-many-with-where-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpdateManyWithWhereWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_scalar_where_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-scalar-where.input.ts");
const topic_tag_update_many_mutation_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-many-mutation.input.ts");
let TopicTagUpdateManyWithWhereWithoutChallengesInput = class TopicTagUpdateManyWithWhereWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_scalar_where_input_1.TopicTagScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_scalar_where_input_1.TopicTagScalarWhereInput !== "undefined" && topic_tag_scalar_where_input_1.TopicTagScalarWhereInput) === "function" ? _a : Object)
], TopicTagUpdateManyWithWhereWithoutChallengesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_update_many_mutation_input_1.TopicTagUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_update_many_mutation_input_1.TopicTagUpdateManyMutationInput !== "undefined" && topic_tag_update_many_mutation_input_1.TopicTagUpdateManyMutationInput) === "function" ? _b : Object)
], TopicTagUpdateManyWithWhereWithoutChallengesInput.prototype, "data", void 0);
TopicTagUpdateManyWithWhereWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpdateManyWithWhereWithoutChallengesInput);
exports.TopicTagUpdateManyWithWhereWithoutChallengesInput = TopicTagUpdateManyWithWhereWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-update-many-without-challenges-nested.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpdateManyWithoutChallengesNestedInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_create_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-without-challenges.input.ts");
const topic_tag_create_or_connect_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-or-connect-without-challenges.input.ts");
const topic_tag_upsert_with_where_unique_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-upsert-with-where-unique-without-challenges.input.ts");
const topic_tag_where_unique_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where-unique.input.ts");
const topic_tag_update_with_where_unique_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-with-where-unique-without-challenges.input.ts");
const topic_tag_update_many_with_where_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-many-with-where-without-challenges.input.ts");
const topic_tag_scalar_where_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-scalar-where.input.ts");
let TopicTagUpdateManyWithoutChallengesNestedInput = class TopicTagUpdateManyWithoutChallengesNestedInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_create_or_connect_without_challenges_input_1.TopicTagCreateOrConnectWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_upsert_with_where_unique_without_challenges_input_1.TopicTagUpsertWithWhereUniqueWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_where_unique_input_1.TopicTagWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_where_unique_input_1.TopicTagWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof Array !== "undefined" && Array) === "function" ? _e : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_where_unique_input_1.TopicTagWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof Array !== "undefined" && Array) === "function" ? _f : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_where_unique_input_1.TopicTagWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_g = typeof Array !== "undefined" && Array) === "function" ? _g : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_update_with_where_unique_without_challenges_input_1.TopicTagUpdateWithWhereUniqueWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_h = typeof Array !== "undefined" && Array) === "function" ? _h : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_update_many_with_where_without_challenges_input_1.TopicTagUpdateManyWithWhereWithoutChallengesInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_j = typeof Array !== "undefined" && Array) === "function" ? _j : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [topic_tag_scalar_where_input_1.TopicTagScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_k = typeof Array !== "undefined" && Array) === "function" ? _k : Object)
], TopicTagUpdateManyWithoutChallengesNestedInput.prototype, "deleteMany", void 0);
TopicTagUpdateManyWithoutChallengesNestedInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpdateManyWithoutChallengesNestedInput);
exports.TopicTagUpdateManyWithoutChallengesNestedInput = TopicTagUpdateManyWithoutChallengesNestedInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-update-with-where-unique-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpdateWithWhereUniqueWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_where_unique_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where-unique.input.ts");
const topic_tag_update_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-without-challenges.input.ts");
let TopicTagUpdateWithWhereUniqueWithoutChallengesInput = class TopicTagUpdateWithWhereUniqueWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_unique_input_1.TopicTagWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_where_unique_input_1.TopicTagWhereUniqueInput !== "undefined" && topic_tag_where_unique_input_1.TopicTagWhereUniqueInput) === "function" ? _a : Object)
], TopicTagUpdateWithWhereUniqueWithoutChallengesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput !== "undefined" && topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput) === "function" ? _b : Object)
], TopicTagUpdateWithWhereUniqueWithoutChallengesInput.prototype, "data", void 0);
TopicTagUpdateWithWhereUniqueWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpdateWithWhereUniqueWithoutChallengesInput);
exports.TopicTagUpdateWithWhereUniqueWithoutChallengesInput = TopicTagUpdateWithWhereUniqueWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-update-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpdateWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let TopicTagUpdateWithoutChallengesInput = class TopicTagUpdateWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateWithoutChallengesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateWithoutChallengesInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagUpdateWithoutChallengesInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagUpdateWithoutChallengesInput.prototype, "domainId", void 0);
TopicTagUpdateWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpdateWithoutChallengesInput);
exports.TopicTagUpdateWithoutChallengesInput = TopicTagUpdateWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-upsert-with-where-unique-without-challenges.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagUpsertWithWhereUniqueWithoutChallengesInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const topic_tag_where_unique_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-where-unique.input.ts");
const topic_tag_update_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-update-without-challenges.input.ts");
const topic_tag_create_without_challenges_input_1 = __webpack_require__("./generated/topic-tag/topic-tag-create-without-challenges.input.ts");
let TopicTagUpsertWithWhereUniqueWithoutChallengesInput = class TopicTagUpsertWithWhereUniqueWithoutChallengesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_where_unique_input_1.TopicTagWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof topic_tag_where_unique_input_1.TopicTagWhereUniqueInput !== "undefined" && topic_tag_where_unique_input_1.TopicTagWhereUniqueInput) === "function" ? _a : Object)
], TopicTagUpsertWithWhereUniqueWithoutChallengesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput !== "undefined" && topic_tag_update_without_challenges_input_1.TopicTagUpdateWithoutChallengesInput) === "function" ? _b : Object)
], TopicTagUpsertWithWhereUniqueWithoutChallengesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput !== "undefined" && topic_tag_create_without_challenges_input_1.TopicTagCreateWithoutChallengesInput) === "function" ? _c : Object)
], TopicTagUpsertWithWhereUniqueWithoutChallengesInput.prototype, "create", void 0);
TopicTagUpsertWithWhereUniqueWithoutChallengesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagUpsertWithWhereUniqueWithoutChallengesInput);
exports.TopicTagUpsertWithWhereUniqueWithoutChallengesInput = TopicTagUpsertWithWhereUniqueWithoutChallengesInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let TopicTagWhereUniqueInput = class TopicTagWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagWhereUniqueInput.prototype, "id", void 0);
TopicTagWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagWhereUniqueInput);
exports.TopicTagWhereUniqueInput = TopicTagWhereUniqueInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TopicTagWhereInput_1, _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTagWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const challenge_list_relation_filter_input_1 = __webpack_require__("./generated/challenge/challenge-list-relation-filter.input.ts");
let TopicTagWhereInput = TopicTagWhereInput_1 = class TopicTagWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], TopicTagWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], TopicTagWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [TopicTagWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], TopicTagWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagWhereInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTagWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTagWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_list_relation_filter_input_1.ChallengeListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof challenge_list_relation_filter_input_1.ChallengeListRelationFilter !== "undefined" && challenge_list_relation_filter_input_1.ChallengeListRelationFilter) === "function" ? _d : Object)
], TopicTagWhereInput.prototype, "challenges", void 0);
TopicTagWhereInput = TopicTagWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], TopicTagWhereInput);
exports.TopicTagWhereInput = TopicTagWhereInput;


/***/ }),

/***/ "./generated/topic-tag/topic-tag.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicTag = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const challenge_model_1 = __webpack_require__("./generated/challenge/challenge.model.ts");
const topic_tag_count_output_1 = __webpack_require__("./generated/topic-tag/topic-tag-count.output.ts");
let TopicTag = class TopicTag {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTag.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTag.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTag.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'disabled' }),
    (0, tslib_1.__metadata)("design:type", String)
], TopicTag.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], TopicTag.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [challenge_model_1.Challenge], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], TopicTag.prototype, "challenges", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => topic_tag_count_output_1.TopicTagCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof topic_tag_count_output_1.TopicTagCount !== "undefined" && topic_tag_count_output_1.TopicTagCount) === "function" ? _b : Object)
], TopicTag.prototype, "_count", void 0);
TopicTag = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], TopicTag);
exports.TopicTag = TopicTag;


/***/ }),

/***/ "./generated/user/find-many-user.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyUserArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const user_where_input_1 = __webpack_require__("./generated/user/user-where.input.ts");
const user_order_by_with_relation_input_1 = __webpack_require__("./generated/user/user-order-by-with-relation.input.ts");
const user_where_unique_input_1 = __webpack_require__("./generated/user/user-where-unique.input.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const user_scalar_field_enum_1 = __webpack_require__("./generated/user/user-scalar-field.enum.ts");
let FindManyUserArgs = class FindManyUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof user_where_input_1.UserWhereInput !== "undefined" && user_where_input_1.UserWhereInput) === "function" ? _a : Object)
], FindManyUserArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_order_by_with_relation_input_1.UserOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FindManyUserArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof user_where_unique_input_1.UserWhereUniqueInput !== "undefined" && user_where_unique_input_1.UserWhereUniqueInput) === "function" ? _c : Object)
], FindManyUserArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyUserArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyUserArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_scalar_field_enum_1.UserScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Array !== "undefined" && Array) === "function" ? _d : Object)
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;


/***/ }),

/***/ "./generated/user/user-create.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
let UserCreateInput = class UserCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCreateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCreateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "extendData", void 0);
UserCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;


/***/ }),

/***/ "./generated/user/user-email-domain-id-compound-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEmailDomainIdCompoundUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let UserEmailDomainIdCompoundUniqueInput = class UserEmailDomainIdCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserEmailDomainIdCompoundUniqueInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserEmailDomainIdCompoundUniqueInput.prototype, "domainId", void 0);
UserEmailDomainIdCompoundUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserEmailDomainIdCompoundUniqueInput);
exports.UserEmailDomainIdCompoundUniqueInput = UserEmailDomainIdCompoundUniqueInput;


/***/ }),

/***/ "./generated/user/user-order-by-with-relation.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const sort_order_enum_1 = __webpack_require__("./generated/prisma/sort-order.enum.ts");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "extendData", void 0);
UserOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;


/***/ }),

/***/ "./generated/user/user-scalar-field.enum.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserScalarFieldEnum = void 0;
const graphql_1 = __webpack_require__("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["firstname"] = "firstname";
    UserScalarFieldEnum["lastname"] = "lastname";
    UserScalarFieldEnum["status"] = "status";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["avatar"] = "avatar";
    UserScalarFieldEnum["provider"] = "provider";
    UserScalarFieldEnum["domainId"] = "domainId";
    UserScalarFieldEnum["createdById"] = "createdById";
    UserScalarFieldEnum["createdByUsername"] = "createdByUsername";
    UserScalarFieldEnum["createdByName"] = "createdByName";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["extendData"] = "extendData";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });


/***/ }),

/***/ "./generated/user/user-update.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUpdateInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
let UserUpdateInput = class UserUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserUpdateInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserUpdateInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUpdateInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUpdateInput.prototype, "extendData", void 0);
UserUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;


/***/ }),

/***/ "./generated/user/user-username-domain-id-compound-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUsernameDomainIdCompoundUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let UserUsernameDomainIdCompoundUniqueInput = class UserUsernameDomainIdCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUsernameDomainIdCompoundUniqueInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_3.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserUsernameDomainIdCompoundUniqueInput.prototype, "domainId", void 0);
UserUsernameDomainIdCompoundUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUsernameDomainIdCompoundUniqueInput);
exports.UserUsernameDomainIdCompoundUniqueInput = UserUsernameDomainIdCompoundUniqueInput;


/***/ }),

/***/ "./generated/user/user-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const user_username_domain_id_compound_unique_input_1 = __webpack_require__("./generated/user/user-username-domain-id-compound-unique.input.ts");
const user_email_domain_id_compound_unique_input_1 = __webpack_require__("./generated/user/user-email-domain-id-compound-unique.input.ts");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_username_domain_id_compound_unique_input_1.UserUsernameDomainIdCompoundUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof user_username_domain_id_compound_unique_input_1.UserUsernameDomainIdCompoundUniqueInput !== "undefined" && user_username_domain_id_compound_unique_input_1.UserUsernameDomainIdCompoundUniqueInput) === "function" ? _a : Object)
], UserWhereUniqueInput.prototype, "username_domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_email_domain_id_compound_unique_input_1.UserEmailDomainIdCompoundUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof user_email_domain_id_compound_unique_input_1.UserEmailDomainIdCompoundUniqueInput !== "undefined" && user_email_domain_id_compound_unique_input_1.UserEmailDomainIdCompoundUniqueInput) === "function" ? _b : Object)
], UserWhereUniqueInput.prototype, "email_domainId", void 0);
UserWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;


/***/ }),

/***/ "./generated/user/user-where.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserWhereInput_1, _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserWhereInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const json_nullable_filter_input_1 = __webpack_require__("./generated/prisma/json-nullable-filter.input.ts");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], UserWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], UserWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], UserWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserWhereInput.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UserWhereInput.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereInput.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UserWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof json_nullable_filter_input_1.JsonNullableFilter !== "undefined" && json_nullable_filter_input_1.JsonNullableFilter) === "function" ? _f : Object)
], UserWhereInput.prototype, "extendData", void 0);
UserWhereInput = UserWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;


/***/ }),

/***/ "./generated/user/user.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
const graphql_4 = __webpack_require__("@nestjs/graphql");
const graphql_type_json_1 = __webpack_require__("graphql-type-json");
let User = class User {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "firstname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "lastname", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'disabled' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'user' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'koj' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "domainId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "createdById", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "createdByUsername", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "createdByName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], User.prototype, "extendData", void 0);
User = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;


/***/ }),

/***/ "./libs/adapter/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/adapter/src/lib/adapter.module.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/adapter/src/lib/adapter.service.ts"), exports);


/***/ }),

/***/ "./libs/adapter/src/lib/adapter.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdapterModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AdapterModule = class AdapterModule {
};
AdapterModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], AdapterModule);
exports.AdapterModule = AdapterModule;


/***/ }),

/***/ "./libs/adapter/src/lib/adapter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AdapterService_1, _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdapterService = void 0;
const tslib_1 = __webpack_require__("tslib");
/* eslint-disable @typescript-eslint/no-empty-function */
const casbin_1 = __webpack_require__("casbin");
const common_1 = __webpack_require__("@nestjs/common");
const client_1 = __webpack_require__("@prisma/client");
let AdapterService = AdapterService_1 = class AdapterService {
    /**
     * @param option It should be PrismaClientOptions or PrismaClient.
     * You should later call open() to activate it.
     */
    constructor(option) {
        this.open = () => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.option) {
                this.option = {};
            }
            if (!this.prisma) {
                this.prisma = new client_1.PrismaClient(this.option);
            }
            yield this.prisma.$connect();
        });
        this.loadPolicyLine = (line, model) => {
            const result = line.ptype +
                ', ' +
                [
                    line.subject,
                    line.object,
                    line.action,
                    line.effect,
                    line.effectWith,
                    line.condition,
                    line.domainId,
                ].join(', ');
            casbin_1.Helper.loadPolicyLine(result, model);
        };
        this.loadRoleLine = (line, model) => {
            const result = line.ptype +
                ', ' +
                [line.role, line.rule, line.domainId].filter((n) => n).join(', ');
            casbin_1.Helper.loadPolicyLine(result, model);
        };
        if (option instanceof client_1.PrismaClient) {
            this.prisma = option;
        }
        else {
            this.option = option;
        }
    }
    loadPolicy(model) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const [policies, roles] = yield Promise.all([
                this.prisma.policy.findMany(),
                this.prisma.roleGroup.findMany(),
            ]);
            for (const policy of policies) {
                this.loadPolicyLine(policy, model);
            }
            for (const role of roles) {
                this.loadRoleLine(role, model);
            }
        });
    }
    close() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.prisma.$disconnect();
        });
    }
    static newAdapter(option) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const a = new AdapterService_1(option);
            try {
                yield a.open();
                return a;
            }
            catch (error) {
                console.log(error);
                // throw new Error('Init Adapter with prisma failed');
            }
        });
    }
    //Place holder
    addPolicy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    addPolicies() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    updatePolicy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    updatePolicies() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    removePolicy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    removeFilteredPolicy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { });
    }
    savePolicy() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return;
        });
    }
};
AdapterService = AdapterService_1 = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AdapterService);
exports.AdapterService = AdapterService;


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

/***/ "./libs/common/dto/src/challenge/challenge-find-many.args.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindManyChallengeArgs = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const find_many_challenge_args_1 = __webpack_require__("./generated/challenge/find-many-challenge.args.ts");
const challenge_where_unique_input_1 = __webpack_require__("./libs/common/dto/src/challenge/challenge-where-unique.input.ts");
class FindManyChallengeArgs extends find_many_challenge_args_1.FindManyChallengeArgs {
}
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => challenge_where_unique_input_1.KChallengeWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof challenge_where_unique_input_1.KChallengeWhereUniqueInput !== "undefined" && challenge_where_unique_input_1.KChallengeWhereUniqueInput) === "function" ? _a : Object)
], FindManyChallengeArgs.prototype, "cursor", void 0);
exports.FindManyChallengeArgs = FindManyChallengeArgs;


/***/ }),

/***/ "./libs/common/dto/src/challenge/challenge-submit-result.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeResult = exports.ChallengeSubmitResult = exports.ChallengeResultInfo = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let ChallengeResultInfo = class ChallengeResultInfo {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResultInfo.prototype, "testcaseCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResultInfo.prototype, "testcasePassCount", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResultInfo.prototype, "score", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResultInfo.prototype, "totalScore", void 0);
ChallengeResultInfo = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], ChallengeResultInfo);
exports.ChallengeResultInfo = ChallengeResultInfo;
let ChallengeSubmitResult = class ChallengeSubmitResult {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => ChallengeResultInfo, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", ChallengeResultInfo)
], ChallengeSubmitResult.prototype, "info", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ChallengeResult], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ChallengeSubmitResult.prototype, "result", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitResult.prototype, "error", void 0);
ChallengeSubmitResult = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], ChallengeSubmitResult);
exports.ChallengeSubmitResult = ChallengeSubmitResult;
let ChallengeResult = class ChallengeResult {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResult.prototype, "time", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeResult.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeResult.prototype, "errorMessage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeResult.prototype, "message", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeResult.prototype, "log", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeResult.prototype, "output", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeResult.prototype, "expectedOutput", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ChallengeResult.prototype, "hidden", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ChallengeResult.prototype, "result", void 0);
ChallengeResult = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], ChallengeResult);
exports.ChallengeResult = ChallengeResult;


/***/ }),

/***/ "./libs/common/dto/src/challenge/challenge-submit.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeSubmitInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
let ChallengeSubmitInput = class ChallengeSubmitInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitInput.prototype, "functionName", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeSubmitInput.prototype, "challengeId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String),
    (0, tslib_1.__metadata)("design:type", String)
], ChallengeSubmitInput.prototype, "languageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ChallengeSubmitInput.prototype, "domainId", void 0);
ChallengeSubmitInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ChallengeSubmitInput);
exports.ChallengeSubmitInput = ChallengeSubmitInput;
// registerEnumType(RUN_TYPE, {
//   name: "RUN_TYPE"
// });


/***/ }),

/***/ "./libs/common/dto/src/challenge/challenge-where-unique.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KChallengeWhereUniqueInput = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const graphql_2 = __webpack_require__("@nestjs/graphql");
const graphql_3 = __webpack_require__("@nestjs/graphql");
let KChallengeWhereUniqueInput = class KChallengeWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], KChallengeWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], KChallengeWhereUniqueInput.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.HideField)(),
    (0, tslib_1.__metadata)("design:type", Number)
], KChallengeWhereUniqueInput.prototype, "domainId", void 0);
KChallengeWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], KChallengeWhereUniqueInput);
exports.KChallengeWhereUniqueInput = KChallengeWhereUniqueInput;


/***/ }),

/***/ "./libs/common/dto/src/challenge/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/dto/src/challenge/challenge-find-many.args.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/dto/src/challenge/challenge-submit-result.model.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/dto/src/challenge/challenge-submit.input.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/dto/src/challenge/challenge-where-unique.input.ts"), exports);


/***/ }),

/***/ "./libs/common/dto/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/dto/src/challenge/index.ts"), exports);


/***/ }),

/***/ "./libs/common/guards/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/local.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/policy.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/gql-auth.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/refresh-token.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/google.guard.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/guards/src/lib/github.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/guards/src/lib/github.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GithubGuard = void 0;
const passport_1 = __webpack_require__("@nestjs/passport");
class GithubGuard extends (0, passport_1.AuthGuard)("github") {
}
exports.GithubGuard = GithubGuard;


/***/ }),

/***/ "./libs/common/guards/src/lib/google.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleOauthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let GoogleOauthGuard = class GoogleOauthGuard extends (0, passport_1.AuthGuard)("google") {
};
GoogleOauthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], GoogleOauthGuard);
exports.GoogleOauthGuard = GoogleOauthGuard;


/***/ }),

/***/ "./libs/common/guards/src/lib/gql-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const common_1 = __webpack_require__("@nestjs/common");
let GqlAuthGuard = class GqlAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
};
GqlAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], GqlAuthGuard);
exports.GqlAuthGuard = GqlAuthGuard;


/***/ }),

/***/ "./libs/common/guards/src/lib/local.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./libs/common/guards/src/lib/policy.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var GqlPolicyGuard_1, _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlPolicyGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const casbin = (0, tslib_1.__importStar)(__webpack_require__("casbin"));
const core_1 = __webpack_require__("@nestjs/core");
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const common_1 = __webpack_require__("@nestjs/common");
const common_2 = __webpack_require__("@nestjs/common");
const interfaces_1 = __webpack_require__("./libs/common/interfaces/src/index.ts");
const constants_1 = __webpack_require__("./libs/common/constants/src/index.ts");
const apollo_server_express_1 = __webpack_require__("apollo-server-express");
let GqlPolicyGuard = GqlPolicyGuard_1 = class GqlPolicyGuard {
    constructor(reflector, prisma, enforcer, options) {
        this.reflector = reflector;
        this.prisma = prisma;
        this.enforcer = enforcer;
        this.options = options;
    }
    canActivate(context) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const gqlContext = graphql_1.GqlExecutionContext.create(context);
            const permissions = this.reflector.get(constants_1.PERMISSIONS_METADATA, gqlContext.getHandler());
            if (!permissions) {
                return true;
            }
            const request = gqlContext.getContext().req;
            const user = request.user;
            const polices = [];
            if (!user.role) {
                throw new apollo_server_express_1.ForbiddenError("User no have role");
            }
            const hasPermission = (user, permission) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                const { resource, action } = permission;
                // console.log(await this.enforcer.getPolicy());
                const [isAllow, policy] = yield this.enforcer.enforceEx({ role: user.role }, resource, action, user.domainId);
                if (!isAllow) {
                    throw new common_1.ForbiddenException({
                        message: `Don't have permission`,
                        statusCode: common_1.HttpStatus.FORBIDDEN
                    });
                }
                if (policy.length !== 0) {
                    polices.push(policy);
                    return true;
                }
                return false;
            });
            const result = yield GqlPolicyGuard_1.asyncEvery(permissions, (permission) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { return hasPermission(user, permission); }));
            if (result) {
                const attachCtxWhere = {
                    createdById: user.userId,
                    domainId: user.domainId,
                    effectWith: polices[0].effectWith
                };
                const attachCtxData = {
                    createdById: user.userId,
                    domainId: user.domainId,
                    createdByUsername: user.username,
                    createdByName: `${user.firstname}:${user.lastname}`
                };
                Object.assign(request, {
                    context: { where: attachCtxWhere, data: attachCtxData, polices }
                });
            }
            return result;
        });
    }
    static asyncSome(array, callback) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                const result = yield callback(array[i], i, array);
                if (result) {
                    return result;
                }
            }
            return false;
        });
    }
    static asyncEvery(array, callback) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                const result = yield callback(array[i], i, array);
                if (!result) {
                    return result;
                }
            }
            return true;
        });
    }
};
GqlPolicyGuard = GqlPolicyGuard_1 = (0, tslib_1.__decorate)([
    (0, common_2.Injectable)(),
    (0, tslib_1.__param)(2, (0, common_2.Inject)(constants_1.ADAPTER_ENFORCER)),
    (0, tslib_1.__param)(3, (0, common_2.Inject)(constants_1.ADAPTER_MODULE_OPTIONS)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof nestjs_prisma_1.PrismaService !== "undefined" && nestjs_prisma_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof casbin !== "undefined" && casbin.Enforcer) === "function" ? _c : Object, typeof (_d = typeof interfaces_1.CasbinModuleOptions !== "undefined" && interfaces_1.CasbinModuleOptions) === "function" ? _d : Object])
], GqlPolicyGuard);
exports.GqlPolicyGuard = GqlPolicyGuard;


/***/ }),

/***/ "./libs/common/guards/src/lib/refresh-token.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtRefreshGuard = class JwtRefreshGuard extends (0, passport_1.AuthGuard)('jwt-refresh-token') {
};
JwtRefreshGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], JwtRefreshGuard);
exports.JwtRefreshGuard = JwtRefreshGuard;


/***/ }),

/***/ "./libs/common/interfaces/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/types.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/jwt.interface.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/user.interface.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/config.interface.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/permission.interface.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/interfaces/src/lib/auth-module-options.interface.ts"), exports);


/***/ }),

/***/ "./libs/common/interfaces/src/lib/auth-module-options.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/interfaces/src/lib/config.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/interfaces/src/lib/jwt.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/interfaces/src/lib/permission.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/interfaces/src/lib/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthAction = exports.AuthPossession = exports.AuthActionVerb = void 0;
var AuthActionVerb;
(function (AuthActionVerb) {
    AuthActionVerb["CREATE"] = "create";
    AuthActionVerb["UPDATE"] = "update";
    AuthActionVerb["DELETE"] = "delete";
    AuthActionVerb["READ"] = "read";
})(AuthActionVerb = exports.AuthActionVerb || (exports.AuthActionVerb = {}));
var AuthPossession;
(function (AuthPossession) {
    AuthPossession["ANY"] = "any";
    AuthPossession["OWN"] = "own";
    AuthPossession["OWN_ANY"] = "own|any";
})(AuthPossession = exports.AuthPossession || (exports.AuthPossession = {}));
var AuthAction;
(function (AuthAction) {
    AuthAction["CREATE_ANY"] = "create:any";
    AuthAction["CREATE_OWN"] = "create:own";
    AuthAction["UPDATE_ANY"] = "update:any";
    AuthAction["UPDATE_OWN"] = "update:own";
    AuthAction["DELETE_ANY"] = "delete:any";
    AuthAction["DELETE_OWN"] = "delete:own";
    AuthAction["READ_ANY"] = "read:any";
    AuthAction["READ_OWN"] = "read:own";
})(AuthAction = exports.AuthAction || (exports.AuthAction = {}));


/***/ }),

/***/ "./libs/common/interfaces/src/lib/user.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/strategies/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/jwt.strategy.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/jwt-refresh.strategy.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/google.strategy.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/github.strategy.ts"), exports);


/***/ }),

/***/ "./libs/common/strategies/src/lib/github.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Githubstrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_github2_1 = __webpack_require__("passport-github2");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
let Githubstrategy = class Githubstrategy extends (0, passport_1.PassportStrategy)(passport_github2_1.Strategy) {
    constructor(configService) {
        super({
            clientID: configService.get("GITHUB_CLIENT_ID"),
            clientSecret: configService.get("GITHUB_CLIENT_SECRET"),
            scope: ["user"]
        });
    }
    validate(_accessToken, _refreshToken, profile) {
        return profile;
    }
};
Githubstrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], Githubstrategy);
exports.Githubstrategy = Githubstrategy;


/***/ }),

/***/ "./libs/common/strategies/src/lib/google.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleAuthStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_google_oauth20_1 = __webpack_require__("passport-google-oauth20");
let GoogleAuthStrategy = class GoogleAuthStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy) {
    constructor(configService) {
        super({
            // Put config in `.env`
            clientID: configService.get("OAUTH_GOOGLE_ID"),
            clientSecret: configService.get("OAUTH_GOOGLE_SECRET"),
            scope: ["email", "profile"]
        });
    }
    validate(accessToken, refreshToken, profile) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { id, name, emails } = profile;
            console.log("🚀 ~ file: google.strategy.ts ~ line 27 ~ GoogleAuthStrategy ~ classGoogleAuthStrategyextendsPassportStrategy ~ profile", profile);
            return {
                provider: "google",
                providerId: id,
                name: name.givenName,
                username: emails[0].value
            };
        });
    }
};
GoogleAuthStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], GoogleAuthStrategy);
exports.GoogleAuthStrategy = GoogleAuthStrategy;


/***/ }),

/***/ "./libs/common/strategies/src/lib/jwt-refresh.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let JwtRefreshTokenStrategy = class JwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh-token') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a, _b, _c;
                    const signature = (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a['r_sign'];
                    const header = (_b = request === null || request === void 0 ? void 0 : request.cookies) === null || _b === void 0 ? void 0 : _b['r_header'];
                    const payload = (_c = request === null || request === void 0 ? void 0 : request.headers) === null || _c === void 0 ? void 0 : _c['x-refresh-payload'];
                    if (!signature || !header || !payload) {
                        throw new common_1.UnauthorizedException({
                            message: 'Missing Refresh Token',
                            level: 'warn',
                        });
                    }
                    console.log('refresh Token', `${header}.${payload}.${signature}`);
                    return `${header}.${payload}.${signature}`;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_REFRESH_SECRET'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            console.log('🚀 ~ file: jwt-refresh.strategy.ts ~ line 38 ~ validate ~ payload', payload);
            return payload;
        });
    }
};
JwtRefreshTokenStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtRefreshTokenStrategy);
exports.JwtRefreshTokenStrategy = JwtRefreshTokenStrategy;


/***/ }),

/***/ "./libs/common/strategies/src/lib/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const utils_1 = __webpack_require__("./libs/common/utils/src/index.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a, _b, _c;
                    console.log('🚀 ~ file: jwt.strategy.ts ~ line 17 ~ JwtStrategy ~ constructor ~ request', request.cookies);
                    const signature = (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a['a_sign'];
                    const header = (_b = request === null || request === void 0 ? void 0 : request.cookies) === null || _b === void 0 ? void 0 : _b['a_header'];
                    const payload = (_c = request === null || request === void 0 ? void 0 : request.headers) === null || _c === void 0 ? void 0 : _c['x-access-payload'];
                    if (!signature || !header || !payload) {
                        // throw new UnauthorizedException({
                        //   message: 'Missing Auth Token',
                        //   level: 'warn',
                        // });
                    }
                    console.log(`${header}.${payload}.${signature}`);
                    return `${header}.${payload}.${signature}`;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_ACCESS_SECRET'),
        });
        this.configService = configService;
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const privateData = JSON.parse((0, utils_1.decrypt)(payload.private));
            return Object.assign(Object.assign({}, payload), privateData);
        });
    }
};
JwtStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


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

/***/ "@liaoliaots/nestjs-redis":
/***/ ((module) => {

module.exports = require("@liaoliaots/nestjs-redis");

/***/ }),

/***/ "@nestjs/apollo":
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

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

/***/ "@paljs/plugins":
/***/ ((module) => {

module.exports = require("@paljs/plugins");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@supercharge/request-ip":
/***/ ((module) => {

module.exports = require("@supercharge/request-ip");

/***/ }),

/***/ "apollo-server-core":
/***/ ((module) => {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-express":
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "bull":
/***/ ((module) => {

module.exports = require("bull");

/***/ }),

/***/ "casbin":
/***/ ((module) => {

module.exports = require("casbin");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "del":
/***/ ((module) => {

module.exports = require("del");

/***/ }),

/***/ "dockerode":
/***/ ((module) => {

module.exports = require("dockerode");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "expression-eval":
/***/ ((module) => {

module.exports = require("expression-eval");

/***/ }),

/***/ "graphql":
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-type-json":
/***/ ((module) => {

module.exports = require("graphql-type-json");

/***/ }),

/***/ "ioredis":
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "kafkajs":
/***/ ((module) => {

module.exports = require("kafkajs");

/***/ }),

/***/ "memory-streams":
/***/ ((module) => {

module.exports = require("memory-streams");

/***/ }),

/***/ "nanoid":
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ "nestjs-otel":
/***/ ((module) => {

module.exports = require("nestjs-otel");

/***/ }),

/***/ "nestjs-pino":
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "nestjs-prisma":
/***/ ((module) => {

module.exports = require("nestjs-prisma");

/***/ }),

/***/ "passport-github2":
/***/ ((module) => {

module.exports = require("passport-github2");

/***/ }),

/***/ "passport-google-oauth20":
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

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

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

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

// Monkeypatching must at top level of code
// import './tracing';
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const cookie_parser_1 = (0, tslib_1.__importDefault)(__webpack_require__("cookie-parser"));
const nestjs_prisma_1 = __webpack_require__("nestjs-prisma");
const config_1 = __webpack_require__("@nestjs/config");
const app_module_1 = __webpack_require__("./apps/koj/src/app/app.module.ts");
const exceptions_1 = __webpack_require__("./apps/koj/src/exceptions/exceptions.ts");
const instrumentation_1 = __webpack_require__("./libs/instrumentation/src/index.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
        const configService = app.get(config_1.ConfigService);
        const globalPrefix = configService.get("app.globalPrefix");
        app.setGlobalPrefix(globalPrefix);
        app.useGlobalFilters(new exceptions_1.AllExceptionsFilter());
        app.useGlobalPipes(new common_1.ValidationPipe({
            stopAtFirstError: true,
            exceptionFactory: (validationErrors = []) => {
                // Get first property from first error
                return new common_1.BadRequestException(Object.values(validationErrors[0].constraints)[0]);
            }
        }));
        app.use((0, cookie_parser_1.default)());
        // enable shutdown hook
        const prismaService = app.get(nestjs_prisma_1.PrismaService);
        prismaService.enableShutdownHooks(app);
        const appConfig = configService.get("app");
        app.useGlobalInterceptors(new instrumentation_1.TraceInterceptor());
        // Cors
        if (appConfig.cors.enabled) {
            app.enableCors({ origin: true, credentials: true });
        }
        yield app.listen(appConfig.port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${appConfig.port}/${globalPrefix}`);
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