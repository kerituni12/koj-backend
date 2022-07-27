import 'multer';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileManagerService } from './file-manager.service';
import { JwtAuthGuard } from './guard';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class FileManagerController {
  constructor(private readonly fileManagerService: FileManagerService) {}

  @Post('/foldertree')
  @UseGuards(JwtAuthGuard)
  folderTree(@Body() body, @Req() req) {
    return this.fileManagerService.folderTree({
      path: body.path,
      domainId: req.user.domainId,
    });
  }
  @Post('/folder')
  @UseGuards(JwtAuthGuard)
  folderInfo(@Body() body, @Req() req) {
    return this.fileManagerService.folderInfo({
      path: body.path,
      domainId: req.user.domainId,
    });
  }
  @Post('/all')
  @UseGuards(JwtAuthGuard)
  all(@Body() body, @Req() req) {
    return this.fileManagerService.all({ path: body.path, domainId: req.user.domainId });
  }

  @Post('/rename')
  @UseGuards(JwtAuthGuard)
  rename(@Body() body, @Req() req) {
    const { path, newname } = body;
    return this.fileManagerService.rename({
      path,
      newName: newname,
      domainId: req.user.domainId,
    });
  }

  @Post('/createfile')
  @UseGuards(JwtAuthGuard)
  createfile(@Body() body, @Req() req) {
    const { path, file } = body;
    return this.fileManagerService.createfile({
      path,
      file,
      domainId: req.user.domainId,
    });
  }

  @Post('/createfolder')
  @UseGuards(JwtAuthGuard)
  createfolder(@Body() body, @Req() req) {
    const { path, folder, mask } = body;
    return this.fileManagerService.createfolder({
      path,
      folder,
      mask,
      domainId: req.user.domainId,
    });
  }

  @Post('/delete')
  @UseGuards(JwtAuthGuard)
  delete(@Body() body, @Req() req) {
    return this.fileManagerService.delete({
      items: body.items,
      domainId: req.user.domainId,
    });
  }

  @Post('/copy')
  @UseGuards(JwtAuthGuard)
  emptydir(@Body() body, @Req() req) {
    return this.fileManagerService.emptydir({
      path: body.path,
      domainId: req.user.domainId,
    });
  }

  @Post('/move')
  @UseGuards(JwtAuthGuard)
  duplicate(@Body() body, @Req() req) {
    return this.fileManagerService.duplicate({
      path: body.path,
      domainId: req.user.domainId,
    });
  }

  @Post('/emptydir')
  @UseGuards(JwtAuthGuard)
  copy(@Body() body, @Req() req) {
    const { items, destination } = body;
    return this.fileManagerService.copy({
      items,
      destination,
      domainId: req.user.domainId,
    });
  }

  @Post('/unzip')
  @UseGuards(JwtAuthGuard)
  move(@Body() body, @Req() req) {
    const { items, destination } = body;
    return this.fileManagerService.move({
      items,
      destination,
      domainId: req.user.domainId,
    });
  }

  @Post('/archive')
  @UseGuards(JwtAuthGuard)
  unzip(@Body() body, @Req() req) {
    const { file, destination } = body;
    return this.fileManagerService.unzip({
      file,
      destination,
      domainId: req.user.domainId,
    });
  }

  @Post('/duplicate')
  @UseGuards(JwtAuthGuard)
  archive(@Body() body, @Req() req) {
    const { files, destination, name } = body;
    return this.fileManagerService.archive({
      files,
      destination,
      name,
      domainId: req.user.domainId,
    });
  }

  @Post('/saveimage')
  @UseGuards(JwtAuthGuard)
  saveImage(@Body() body, @Req() req) {
    const { path, file, isnew } = body;
    return this.fileManagerService.saveImage({
      path,
      file,
      isnew,
      domainId: req.user.domainId,
    });
  }

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files'))
  @UseGuards(JwtAuthGuard)
  uploadFiles(
    @Body() body,
    @Req() req,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(
      '🚀 ~ file: file-manager.controller.ts ~ line 153 ~ FileManagerController ~ req',
      req.user,
    );
    console.log(
      '🚀 ~ file: file-manager.controller.ts ~ line 90 ~ FileManagerController ~ uploadFiles ~ files',
      files,
    );
    return this.fileManagerService.uploadFiles({
      path: body.path,
      files,
      domainId: req.user.domainId,
    });
  }
}
