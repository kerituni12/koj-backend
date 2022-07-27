/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/file-manager/src/exceptions.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        console.log(exception);
    }
};
AllExceptionsFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


/***/ }),

/***/ "./apps/file-manager/src/file-manager.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerController = void 0;
const tslib_1 = __webpack_require__("tslib");
__webpack_require__("multer");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const common_1 = __webpack_require__("@nestjs/common");
const file_manager_service_1 = __webpack_require__("./apps/file-manager/src/file-manager.service.ts");
const guard_1 = __webpack_require__("./apps/file-manager/src/guard.ts");
let FileManagerController = class FileManagerController {
    constructor(fileManagerService) {
        this.fileManagerService = fileManagerService;
    }
    folderTree(body, req) {
        return this.fileManagerService.folderTree({
            path: body.path,
            domainId: req.user.domainId,
        });
    }
    folderInfo(body, req) {
        return this.fileManagerService.folderInfo({
            path: body.path,
            domainId: req.user.domainId,
        });
    }
    all(body, req) {
        return this.fileManagerService.all({ path: body.path, domainId: req.user.domainId });
    }
    rename(body, req) {
        const { path, newname } = body;
        return this.fileManagerService.rename({
            path,
            newName: newname,
            domainId: req.user.domainId,
        });
    }
    createfile(body, req) {
        const { path, file } = body;
        return this.fileManagerService.createfile({
            path,
            file,
            domainId: req.user.domainId,
        });
    }
    createfolder(body, req) {
        const { path, folder, mask } = body;
        return this.fileManagerService.createfolder({
            path,
            folder,
            mask,
            domainId: req.user.domainId,
        });
    }
    delete(body, req) {
        return this.fileManagerService.delete({
            items: body.items,
            domainId: req.user.domainId,
        });
    }
    emptydir(body, req) {
        return this.fileManagerService.emptydir({
            path: body.path,
            domainId: req.user.domainId,
        });
    }
    duplicate(body, req) {
        return this.fileManagerService.duplicate({
            path: body.path,
            domainId: req.user.domainId,
        });
    }
    copy(body, req) {
        const { items, destination } = body;
        return this.fileManagerService.copy({
            items,
            destination,
            domainId: req.user.domainId,
        });
    }
    move(body, req) {
        const { items, destination } = body;
        return this.fileManagerService.move({
            items,
            destination,
            domainId: req.user.domainId,
        });
    }
    unzip(body, req) {
        const { file, destination } = body;
        return this.fileManagerService.unzip({
            file,
            destination,
            domainId: req.user.domainId,
        });
    }
    archive(body, req) {
        const { files, destination, name } = body;
        return this.fileManagerService.archive({
            files,
            destination,
            name,
            domainId: req.user.domainId,
        });
    }
    saveImage(body, req) {
        const { path, file, isnew } = body;
        return this.fileManagerService.saveImage({
            path,
            file,
            isnew,
            domainId: req.user.domainId,
        });
    }
    uploadFiles(body, req, files) {
        console.log('🚀 ~ file: file-manager.controller.ts ~ line 153 ~ FileManagerController ~ req', req.user);
        console.log('🚀 ~ file: file-manager.controller.ts ~ line 90 ~ FileManagerController ~ uploadFiles ~ files', files);
        return this.fileManagerService.uploadFiles({
            path: body.path,
            files,
            domainId: req.user.domainId,
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/foldertree'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "folderTree", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/folder'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "folderInfo", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/all'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "all", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/rename'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "rename", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/createfile'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "createfile", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/createfolder'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "createfolder", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/delete'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "delete", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/copy'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "emptydir", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/move'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "duplicate", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/emptydir'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "copy", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/unzip'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "move", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/archive'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "unzip", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/duplicate'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "archive", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/saveimage'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "saveImage", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Req)()),
    (0, tslib_1.__param)(2, (0, common_1.UploadedFiles)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FileManagerController.prototype, "uploadFiles", null);
FileManagerController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof file_manager_service_1.FileManagerService !== "undefined" && file_manager_service_1.FileManagerService) === "function" ? _b : Object])
], FileManagerController);
exports.FileManagerController = FileManagerController;


/***/ }),

/***/ "./apps/file-manager/src/file-manager.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const file_manager_controller_1 = __webpack_require__("./apps/file-manager/src/file-manager.controller.ts");
const file_manager_service_1 = __webpack_require__("./apps/file-manager/src/file-manager.service.ts");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const jwt_1 = __webpack_require__("@nestjs/jwt");
const strategies_1 = __webpack_require__("./libs/common/strategies/src/index.ts");
const config_1 = __webpack_require__("@nestjs/config");
const coreFolder = path_1.default.resolve(__dirname + '/../');
const TMP_PATH = `${coreFolder}/uploads/tmp`;
let FileManagerModule = class FileManagerModule {
};
FileManagerModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: TMP_PATH,
                    limits: {
                        files: 15,
                        fieldSize: 5 * 1024 * 1024, // 2 MB (max file size)
                    },
                    onError: function (err, next) {
                        console.log('error', err);
                        next(err);
                    },
                }),
            }),
            jwt_1.JwtModule.register({
                secret: 'nestjsPrismaAccessSecret',
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [file_manager_controller_1.FileManagerController],
        providers: [file_manager_service_1.FileManagerService, strategies_1.JwtStrategy, config_1.ConfigService],
    })
], FileManagerModule);
exports.FileManagerModule = FileManagerModule;


/***/ }),

/***/ "./apps/file-manager/src/file-manager.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const fs_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs"));
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const fs_extra_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs-extra"));
const archiver_1 = (0, tslib_1.__importDefault)(__webpack_require__("archiver"));
const unzipper_1 = (0, tslib_1.__importDefault)(__webpack_require__("unzipper"));
const common_1 = __webpack_require__("@nestjs/common");
const utils_1 = __webpack_require__("./libs/common/utils/src/index.ts");
const directory_tree_util_1 = __webpack_require__("./apps/file-manager/src/utilits/directory-tree.util.ts");
const file_util_1 = __webpack_require__("./apps/file-manager/src/utilits/file.util.ts");
const baseDir = path_1.default.resolve(__dirname + '/../');
const coreFolder = baseDir + '/uploads';
class FileManagerService {
    folderTree({ path, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const paths = (0, directory_tree_util_1.directoryTree)(`${coreFolder}/${domainId}${(0, file_util_1.escapePath)(path)}`, {
                normalizePath: true,
                removePath: baseDir,
                withChildren: true,
            });
            return paths;
        });
    }
    folderInfo({ path, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const paths = (0, directory_tree_util_1.directoryTree)(`${coreFolder}/${domainId}${(0, file_util_1.escapePath)(path)}`, {
                normalizePath: true,
                removePath: baseDir,
                includeFiles: true,
            });
            return paths;
        });
    }
    all({ path, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const paths = (0, directory_tree_util_1.directoryTree)(`${coreFolder}/${domainId}${(0, file_util_1.escapePath)(path)}`, {
                normalizePath: true,
                removePath: baseDir,
                includeFiles: true,
                withChildren: true,
            });
            return paths;
        });
    }
    rename({ path, newName, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            if (!(0, file_util_1.checkExtension)(path_1.default.extname(newName))) {
                throw new common_1.NotFoundException(`Wrong File Format ${newName}`);
            }
            if (!(0, file_util_1.checkVariables)([pathEscape, newName])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            const editPath = pathEscape.split('/');
            editPath.pop();
            editPath.push(newName);
            const renamePath = editPath.join('/');
            fs_1.default.rename(`${coreFolder}/${domainId}${pathEscape}`, `${coreFolder}/${domainId}${renamePath}`, function (err) {
                if (err) {
                    throw new common_1.NotFoundException(err);
                }
                else {
                    return {
                        status: 'success',
                        message: 'File or Folder succesfully renamed!',
                    };
                }
            });
        });
    }
    createfile({ path, file, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            const fileEscape = (0, file_util_1.escapePath)(file);
            if (!(0, file_util_1.checkExtension)(path_1.default.extname(fileEscape))) {
                throw new common_1.NotFoundException(`Wrong File Format ${fileEscape}`);
            }
            if (!(0, file_util_1.checkVariables)([pathEscape, fileEscape])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            fs_1.default.open(`${coreFolder}/${domainId}${pathEscape}/${fileEscape}`, 'wx', function (err, fd) {
                if (err) {
                    throw new common_1.NotFoundException('Error while creating file');
                }
                fs_1.default.close(fd, function (err) {
                    if (err) {
                        throw new common_1.NotFoundException('Error while closing file');
                    }
                    else {
                        return {
                            status: 'success',
                            message: 'File or Folder succesfully renamed!',
                        };
                    }
                });
            });
        });
    }
    createfolder({ path, folder, mask, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            const folderEscape = (0, file_util_1.escapePath)(folder);
            const mask$ = typeof mask === 'undefined' ? 0o777 : mask;
            fs_1.default.mkdir(`${coreFolder}/${domainId}${pathEscape}/${folderEscape}`, mask$, function (err) {
                if (err) {
                    if (err.code == 'EEXIST') {
                        throw new common_1.NotFoundException('Folder already exists');
                    }
                    throw new common_1.NotFoundException('Something goes wrong');
                }
                else {
                    return {
                        status: 'success',
                        message: 'Folder succesfully created!',
                    };
                }
            });
        });
    }
    delete({ items, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(0, file_util_1.checkVariables)([items])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            const pendingRequests = [];
            const errorDeleted = [];
            items.forEach(function (item, i, arr) {
                item = (0, file_util_1.escapePath)(item);
                pendingRequests.push(fs_extra_1.default.remove(`${coreFolder}/${domainId}${item}`, (err) => {
                    if (err) {
                        errorDeleted.push({ item, err });
                    }
                }));
            });
            Promise.all(pendingRequests)
                .then((values) => {
                return {
                    status: 'success',
                    message: 'File or folder succesfully deleted!',
                };
            })
                .catch((error) => {
                throw new common_1.NotFoundException(errorDeleted);
            });
        });
    }
    emptydir({ path, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            fs_extra_1.default.emptyDir(`${coreFolder}/${domainId}${pathEscape}`, (err) => {
                if (err)
                    throw new common_1.NotFoundException(err);
                return {
                    status: 'success',
                    message: 'All files and folder inside folder removed!',
                };
            });
        });
    }
    duplicate({ path, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            if (!(0, file_util_1.checkVariables)([pathEscape])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            let nameNew = pathEscape.split('.');
            const timestamp = new Date().getTime();
            nameNew =
                nameNew.length > 1
                    ? `${nameNew[0]}_${timestamp}.${nameNew[1]}`
                    : `${nameNew[0]}_${timestamp}`;
            fs_extra_1.default.copy(`${coreFolder}/${domainId}${pathEscape}`, `${coreFolder}/${domainId}${nameNew}`, (err) => {
                if (err) {
                    throw new common_1.NotFoundException(err);
                }
                return {
                    status: 'success',
                    message: 'Files or folders succesfully duplicated!',
                };
            });
        });
    }
    copy({ items, destination, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const destinationEscape = (0, file_util_1.escapePath)(destination);
            if (!(0, file_util_1.checkVariables)([items, destinationEscape])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            const pendingRequests = [];
            const errorCopy = [];
            items.forEach(function (item, i, arr) {
                const newItem = (0, file_util_1.escapePath)(item);
                const newdestination = `${coreFolder}/${domainId}${destinationEscape}/` + item.split('/').pop();
                pendingRequests.push(fs_extra_1.default.copy(`${coreFolder}/${domainId}${newItem}`, newdestination, (err) => {
                    if (err) {
                        errorCopy.push({ newItem, err });
                    }
                }));
            });
            Promise.all(pendingRequests)
                .then((values) => {
                return {
                    status: 'success',
                    message: 'Files or folders succesfully copied!',
                };
            })
                .catch((error) => {
                throw new common_1.NotFoundException(errorCopy);
            });
        });
    }
    move({ items, destination, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const destinationEscape = (0, file_util_1.escapePath)(destination);
            if (!(0, file_util_1.checkVariables)([items, destinationEscape])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            const pendingRequests = [];
            const errorCopy = [];
            try {
                items.forEach(function (item, i, arr) {
                    const newItem = (0, file_util_1.escapePath)(item);
                    const newdestination = `${coreFolder}/${domainId}${destinationEscape}/` + item.split('/').pop();
                    pendingRequests.push(fs_extra_1.default.moveSync(`${coreFolder}/${domainId}${newItem}`, newdestination, {
                        overwrite: true,
                    }));
                });
                Promise.all(pendingRequests).then((values) => {
                    return {
                        status: 'success',
                        message: 'Files or folders succesfully moved!',
                    };
                });
            }
            catch (error) {
                throw new common_1.NotFoundException(error);
            }
        });
    }
    unzip({ file, destination, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(0, file_util_1.checkVariables)([file, destination])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            file = (0, file_util_1.escapePath)(file);
            destination =
                destination === '' || destination === undefined
                    ? file.split('.').shift()
                    : (0, file_util_1.escapePath)(destination);
            try {
                const zip = fs_1.default
                    .createReadStream(`${coreFolder}/${domainId}${file}`)
                    .pipe(unzipper_1.default.Parse({ forceStream: true }));
                for (const entry of zip) {
                    if ((0, file_util_1.checkExtension)(path_1.default.extname(entry.path))) {
                        entry.pipe(fs_1.default.createWriteStream(`${coreFolder}/${domainId}${destination}/${entry.path}`));
                    }
                    else {
                        entry.autodrain();
                    }
                }
                return {
                    status: 'success',
                    message: 'Archive successfully extracted!',
                };
            }
            catch (error) {
                throw new common_1.NotFoundException(error);
            }
        });
    }
    archive({ files, destination, name, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const destinationEscape = yield (0, file_util_1.escapePath)(destination);
            const nameEscape = yield (0, file_util_1.escapePath)(name);
            try {
                const output = fs_1.default.createWriteStream(`${coreFolder}/${domainId}${destinationEscape}/${nameEscape}.zip`);
                const archive = (0, archiver_1.default)('zip', {
                    zlib: { level: 9 }, // Sets the compression level.
                });
                archive.pipe(output);
                archive.on('error', function (err) {
                    throw new common_1.NotFoundException(err);
                });
                yield files.forEach(function (item, i, arr) {
                    const newItem = `${coreFolder}/${domainId}${(0, file_util_1.escapePath)(item)}`;
                    const nameEscape = `${newItem.split('/').pop()}`;
                    if (fs_1.default.lstatSync(newItem).isDirectory()) {
                        archive.directory(newItem, nameEscape);
                    }
                    else {
                        archive.file(newItem, { name: nameEscape });
                    }
                });
                output.on('close', function () {
                    return {
                        status: 'success',
                        message: 'Archive successfully created!',
                    };
                });
                archive.finalize();
            }
            catch (error) {
                throw new common_1.NotFoundException(error);
            }
        });
    }
    saveImage({ path, file, isnew, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let pathEscape = (0, file_util_1.escapePath)(path);
            const file$ = file.split(';base64,').pop();
            if (!(0, file_util_1.checkExtension)(path_1.default.extname(pathEscape))) {
                throw new common_1.NotFoundException(`Wrong File Format ${pathEscape}`);
            }
            if (!(0, file_util_1.checkVariables)([pathEscape, file])) {
                throw new common_1.NotFoundException('Variables not seted!');
            }
            if (isnew) {
                const nameNew = pathEscape.split('.');
                const timestamp = new Date().getTime();
                pathEscape = `${nameNew[0]}_${timestamp}.${nameNew[1]}`;
            }
            fs_1.default.writeFile(`${coreFolder}/${domainId}${pathEscape}`, file, { encoding: 'base64' }, function (err) {
                if (err) {
                    throw new common_1.NotFoundException('Error while creating file');
                }
                return {
                    status: 'success',
                    message: 'File or Folder succesfully renamed!',
                };
            });
        });
    }
    uploadFiles({ path, files, domainId }) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const pathEscape = (0, file_util_1.escapePath)(path);
            try {
                files.forEach(function (element, index, array) {
                    if ((0, file_util_1.checkExtension)(path_1.default.extname(element.originalname))) {
                        fs_1.default.readFile(element.path, function (err, data) {
                            return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                                const path = `${coreFolder}/${domainId}${pathEscape}/${element.originalname}`;
                                yield (0, utils_1.writeFile)(path, data);
                                fs_extra_1.default.remove(element.path, (err) => {
                                    if (err) {
                                        throw new common_1.NotFoundException(err.message);
                                    }
                                });
                            });
                        });
                    }
                });
            }
            catch (error) {
                throw new common_1.NotFoundException(error.message);
            }
            return {
                status: 'success',
                message: 'Files are succesfully uploaded!',
            };
        });
    }
}
exports.FileManagerService = FileManagerService;


/***/ }),

/***/ "./apps/file-manager/src/guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/file-manager/src/utilits/directory-tree.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.directoryTree = exports.permissionsConvert = exports.isRegExp = exports.normalizePath = exports.safeReadDirSync = void 0;
const tslib_1 = __webpack_require__("tslib");
const fs = (0, tslib_1.__importStar)(__webpack_require__("fs"));
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const constants = {
    DIRECTORY: 'folder',
    FILE: 'file',
};
function safeReadDirSync(path) {
    let dirData = [];
    try {
        dirData = fs.readdirSync(path);
    }
    catch (ex) {
        if (ex.code == 'EACCES' || ex.code == 'EPERM') {
            //User does not have permissions, ignore directory
            return null;
        }
        else
            throw ex;
    }
    return dirData;
}
exports.safeReadDirSync = safeReadDirSync;
/**
 * Normalizes windows style paths by replacing double backslahes with single forward slahes (unix style).
 * @param  {string} path
 * @return {string}
 */
function normalizePath(path) {
    return path.replace(/\\/g, '/');
}
exports.normalizePath = normalizePath;
/**
 * Tests if the supplied parameter is of type RegExp
 * @param  {any}  regExp
 * @return {Boolean}
 */
function isRegExp(regExp) {
    return typeof regExp === 'object' && regExp.constructor == RegExp;
}
exports.isRegExp = isRegExp;
function permissionsConvert(mode) {
    return {
        others: (mode & 1 ? 'x-' : '') + (mode & 2 ? 'w-' : '') + (mode & 4 ? 'r' : ''),
        group: (mode & 10 ? 'x-' : '') + (mode & 20 ? 'w-' : '') + (mode & 40 ? 'r' : ''),
        owner: (mode & 100 ? 'x-' : '') + (mode & 200 ? 'w-' : '') + (mode & 400 ? 'r' : ''),
    };
}
exports.permissionsConvert = permissionsConvert;
/**
 * Collects the files and folders for a directory path into an Object, subject
 * to the options supplied, and invoking optional
 * @param  {String} path
 * @param  {Object} options
 * @param  {export function} onEachFile
 * @param  {export function} onEachDirectory
 * @return {Object}
 */
function directoryTree(path, options, onEachFile, onEachDirectory, depth) {
    const name = path_1.default.basename(path);
    const item = { path, name };
    let stats;
    try {
        stats = fs.statSync(path);
    }
    catch (e) {
        return null;
    }
    // Skip if it matches the exclude regex
    if (options && options.exclude) {
        const excludes = isRegExp(options.exclude) ? [options.exclude] : options.exclude;
        if (excludes.some((exclusion) => exclusion.test(path))) {
            return null;
        }
    }
    item.created = stats.birthtime;
    item.modified = stats.mtime;
    item.type = constants.DIRECTORY;
    item.id = `${item.type}_${stats.ino}`;
    // item.premissions = permissionsConvert(stats.mode);
    if (stats.isFile() && options.includeFiles) {
        const ext = path_1.default.extname(path).toLowerCase();
        // Skip if it does not match the extension regex
        if (options && options.extensions && !options.extensions.test(ext))
            return null;
        item.size = stats.size; // File size in bytes
        item.extension = ext;
        item.type = !ext.match(/.(jpg|jpeg|png|gif)$/i) ? constants.FILE : 'image';
        if (options && options.attributes) {
            options.attributes.forEach((attribute) => {
                item[attribute] = stats[attribute];
            });
        }
        if (onEachFile) {
            onEachFile(item, path_1.default, stats);
        }
    }
    else if (stats.isDirectory()) {
        const dirData = safeReadDirSync(path);
        if (dirData === null)
            return null;
        if (options && options.attributes) {
            options.attributes.forEach((attribute) => {
                item[attribute] = stats[attribute];
            });
        }
        if (!options.withChildren) {
            if (!depth) {
                item.children = dirData
                    .map((child) => directoryTree(path_1.default.join(path, child), options, onEachFile, onEachDirectory, true))
                    .filter((e) => !!e);
                item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
                if (onEachDirectory) {
                    onEachDirectory(item, path_1.default, stats);
                }
            }
        }
        else {
            item.children = dirData
                .map((child) => directoryTree(path_1.default.join(path, child), options, onEachFile, onEachDirectory, false))
                .filter((e) => !!e);
            item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
            if (onEachDirectory) {
                onEachDirectory(item, path_1.default, stats);
            }
        }
    }
    else {
        return null; // Or set item.size = 0 for devices, FIFO and sockets ?
    }
    item.path =
        options && options.normalizePath
            ? options.removePath
                ? normalizePath(item.path).replace(normalizePath(options.removePath), '')
                : normalizePath(item.path)
            : options.removePath
                ? item.path.replace(options.removePath, '')
                : item.path;
    return item;
}
exports.directoryTree = directoryTree;


/***/ }),

/***/ "./apps/file-manager/src/utilits/file.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkVariables = exports.checkExtension = exports.escapePath = void 0;
function escapePath(path) {
    return typeof path !== 'undefined' &&
        path !== 'undefined' &&
        path !== '' &&
        !path.includes('..') &&
        !path.includes('./')
        ? path
        : '/uploads/';
}
exports.escapePath = escapePath;
function checkExtension(extension) {
    const allowedFiles = [
        '.jpg',
        '.png',
        '.gif',
        '.jpeg',
        '.svg',
        '.doc',
        '.txt',
        '.csv',
        '.docx',
        '.xls',
        '.xml',
        '.pdf',
        '.zip',
        '.ppt',
        '.mp4',
        '.ai',
        '.psd',
        '.mp3',
        '.avi',
    ];
    return extension !== ''
        ? allowedFiles.indexOf(extension) === -1
            ? false
            : true
        : true;
}
exports.checkExtension = checkExtension;
function checkVariables(variables) {
    let result = true;
    variables.forEach((element) => {
        if (element === '' || element === undefined) {
            result = false;
        }
    });
    return result;
}
exports.checkVariables = checkVariables;


/***/ }),

/***/ "./libs/common/strategies/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/jwt.strategy.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/strategies/src/lib/jwt-refresh.strategy.ts"), exports);


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
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/file.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/common.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/crypto.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/string.util.ts"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("./libs/common/utils/src/lib/database-query.util.ts"), exports);


/***/ }),

/***/ "./libs/common/utils/src/lib/common.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.template = void 0;
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

/***/ "./libs/common/utils/src/lib/file.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeFile = void 0;
const tslib_1 = __webpack_require__("tslib");
const promises_1 = (0, tslib_1.__importDefault)(__webpack_require__("fs/promises"));
const path_1 = (0, tslib_1.__importDefault)(__webpack_require__("path"));
const getDirName = path_1.default.dirname;
function writeFile(path, contents) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        console.log('🚀 ~ file: file.util.ts ~ line 6 ~ writeFile ~ path', path);
        console.log(getDirName(path));
        yield promises_1.default.mkdir(getDirName(path), { recursive: true });
        yield promises_1.default.writeFile(path, contents);
    });
}
exports.writeFile = writeFile;


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

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "archiver":
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),

/***/ "cookie-parser":
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "fs-extra":
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "unzipper":
/***/ ((module) => {

module.exports = require("unzipper");

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
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const file_manager_module_1 = __webpack_require__("./apps/file-manager/src/file-manager.module.ts");
const exceptions_1 = __webpack_require__("./apps/file-manager/src/exceptions.ts");
const cookie_parser_1 = (0, tslib_1.__importDefault)(__webpack_require__("cookie-parser"));
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(file_manager_module_1.FileManagerModule);
        app.useGlobalFilters(new exceptions_1.AllExceptionsFilter());
        const globalPrefix = 'fm';
        app.setGlobalPrefix(globalPrefix);
        app.use((0, cookie_parser_1.default)());
        const port = 3333;
        app.enableCors({ origin: true, credentials: true });
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