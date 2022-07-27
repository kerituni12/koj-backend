/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/simple/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/simple/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        // this.logger.assign({ userid: 1 });
        return this.appService.getData();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/simple/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/simple/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/simple/src/app/app.service.ts");
const app_controller_2 = __webpack_require__("./apps/simple/src/appp/app.controller.ts");
const app_service_2 = __webpack_require__("./apps/simple/src/appp/app.service.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
        // LoggerModule.forRoot({
        //   pinoHttp: [
        //     {
        //       name: 'add some name to every JSON line',
        //       level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        //       // install 'pino-pretty' package in order to use the following option
        //       transport:
        //         process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
        //       useLevelLabels: true,
        //       autoLogging: false,
        //       // and all the others...
        //     },
        //   ],
        //   forRoutes: ['*', AppController],
        //   exclude: [{ method: RequestMethod.ALL, path: 'check' }],
        // }),
        ],
        controllers: [app_controller_1.AppController, app_controller_2.ApppController],
        providers: [app_service_1.AppService, app_service_2.ApppService],
    })
], AppModule);
exports.AppModule = AppModule;
// export class AppModule implements NestModule {
//   public configure(consumer: MiddlewareConsumer) {
//     consumer.apply(loggerMiddleware({})).forRoutes('*');
//   }
// }


/***/ }),

/***/ "./apps/simple/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = AppService_1 = class AppService {
    constructor() {
        this.logger = new common_1.Logger(AppService_1.name);
    }
    // constructor(
    //   // @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger
    // ) {}
    getData() {
        this.logger.log('hello');
        return { message: 'Welcome to simple!' };
    }
};
AppService = AppService_1 = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/simple/src/app/logger.middleware.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loggerMiddleware = void 0;
function loggerMiddleware(pinoHttpConfig) {
    return (req, res, next) => {
        console.log('middleware');
        next();
        // const pinoMw = pinoHttp(pinoHttpConfig as any);
        // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // // @ts-ignore
        // PinoLogger.root = pinoMw.logger;
        // pinoMw(req, res, () => {
        //   storage.run(new Store(req.log), () => {
        //     next();
        //   });
        // });
    };
}
exports.loggerMiddleware = loggerMiddleware;
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }


/***/ }),

/***/ "./apps/simple/src/appp/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/simple/src/appp/app.service.ts");
let ApppController = class ApppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        // this.logger.assign({ userid: 1 });
        return this.appService.getData();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ApppController.prototype, "getData", null);
ApppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)({ scope: common_1.Scope.REQUEST, path: '/hi' }),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.ApppService !== "undefined" && app_service_1.ApppService) === "function" ? _a : Object])
], ApppController);
exports.ApppController = ApppController;


/***/ }),

/***/ "./apps/simple/src/appp/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let ApppService = class ApppService {
    // constructor() // @InjectPinoLogger(ApppService.name) private readonly logger: PinoLogger
    // {}
    getData() {
        // this.logger.info('hiii');
        return { message: 'hiiii!' };
    }
};
ApppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], ApppService);
exports.ApppService = ApppService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@opentelemetry/api":
/***/ ((module) => {

module.exports = require("@opentelemetry/api");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

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

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
// import { Logger } from '@nestjs/common';
// import { Logger } from 'nestjs-pino';
const core_1 = __webpack_require__("@nestjs/core");
const api_1 = __webpack_require__("@opentelemetry/api");
console.log('propagation registor', api_1.propagation.fields());
const app_module_1 = __webpack_require__("./apps/simple/src/app/app.module.ts");
const logger_middleware_1 = __webpack_require__("./apps/simple/src/app/logger.middleware.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
        const globalPrefix = '/api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        app.use((0, logger_middleware_1.loggerMiddleware)(null));
        yield app.listen(port);
        // app.useLogger(app.get(Logger));
        // Logger.log(
        //   `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
        // );
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