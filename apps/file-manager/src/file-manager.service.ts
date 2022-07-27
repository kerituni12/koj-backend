import fs from 'fs';
import PATH from 'path';
import fsExtra from 'fs-extra';
import archiver from 'archiver';
import unzipper from 'unzipper';
import { NotFoundException } from '@nestjs/common';

import { writeFile } from '@koj/common/utils';

import { directoryTree } from './utilits/directory-tree.util';
import { checkExtension, checkVariables, escapePath } from './utilits/file.util';

const baseDir = PATH.resolve(__dirname + '/../');
const coreFolder = baseDir + '/uploads';

export class FileManagerService {
  async folderTree({ path, domainId }) {
    const paths = directoryTree(`${coreFolder}/${domainId}${escapePath(path)}`, {
      normalizePath: true,
      removePath: baseDir,
      withChildren: true,
    });
    return paths;
  }
  async folderInfo({ path, domainId }) {
    const paths = directoryTree(`${coreFolder}/${domainId}${escapePath(path)}`, {
      normalizePath: true,
      removePath: baseDir,
      includeFiles: true,
    });
    return paths;
  }
  async all({ path, domainId }) {
    const paths = directoryTree(`${coreFolder}/${domainId}${escapePath(path)}`, {
      normalizePath: true,
      removePath: baseDir,
      includeFiles: true,
      withChildren: true,
    });
    return paths;
  }

  async rename({ path, newName, domainId }) {
    const pathEscape = escapePath(path);

    if (!checkExtension(PATH.extname(newName))) {
      throw new NotFoundException(`Wrong File Format ${newName}`);
    }

    if (!checkVariables([pathEscape, newName])) {
      throw new NotFoundException('Variables not seted!');
    }

    const editPath = pathEscape.split('/');
    editPath.pop();
    editPath.push(newName);
    const renamePath = editPath.join('/');
    fs.rename(
      `${coreFolder}/${domainId}${pathEscape}`,
      `${coreFolder}/${domainId}${renamePath}`,
      function (err) {
        if (err) {
          throw new NotFoundException(err);
        } else {
          return {
            status: 'success',
            message: 'File or Folder succesfully renamed!',
          };
        }
      },
    );
  }

  async createfile({ path, file, domainId }) {
    const pathEscape = escapePath(path);
    const fileEscape = escapePath(file);

    if (!checkExtension(PATH.extname(fileEscape))) {
      throw new NotFoundException(`Wrong File Format ${fileEscape}`);
    }
    if (!checkVariables([pathEscape, fileEscape])) {
      throw new NotFoundException('Variables not seted!');
    }
    fs.open(
      `${coreFolder}/${domainId}${pathEscape}/${fileEscape}`,
      'wx',
      function (err, fd) {
        if (err) {
          throw new NotFoundException('Error while creating file');
        }
        fs.close(fd, function (err) {
          if (err) {
            throw new NotFoundException('Error while closing file');
          } else {
            return {
              status: 'success',
              message: 'File or Folder succesfully renamed!',
            };
          }
        });
      },
    );
  }

  async createfolder({ path, folder, mask, domainId }) {
    const pathEscape = escapePath(path);
    const folderEscape = escapePath(folder);
    const mask$ = typeof mask === 'undefined' ? 0o777 : mask;

    fs.mkdir(
      `${coreFolder}/${domainId}${pathEscape}/${folderEscape}`,
      mask$,
      function (err) {
        if (err) {
          if (err.code == 'EEXIST') {
            throw new NotFoundException('Folder already exists');
          }
          throw new NotFoundException('Something goes wrong');
        } else {
          return {
            status: 'success',
            message: 'Folder succesfully created!',
          };
        }
      },
    );
  }

  async delete({ items, domainId }) {
    if (!checkVariables([items])) {
      throw new NotFoundException('Variables not seted!');
    }
    const pendingRequests = [];
    const errorDeleted = [];
    items.forEach(function (item, i, arr) {
      item = escapePath(item);
      pendingRequests.push(
        fsExtra.remove(`${coreFolder}/${domainId}${item}`, (err) => {
          if (err) {
            errorDeleted.push({ item, err });
          }
        }),
      );
    });
    Promise.all(pendingRequests)
      .then((values) => {
        return {
          status: 'success',
          message: 'File or folder succesfully deleted!',
        };
      })
      .catch((error) => {
        throw new NotFoundException(errorDeleted);
      });
  }

  async emptydir({ path, domainId }) {
    const pathEscape = escapePath(path);
    fsExtra.emptyDir(`${coreFolder}/${domainId}${pathEscape}`, (err) => {
      if (err) throw new NotFoundException(err);
      return {
        status: 'success',
        message: 'All files and folder inside folder removed!',
      };
    });
  }

  async duplicate({ path, domainId }) {
    const pathEscape = escapePath(path);
    if (!checkVariables([pathEscape])) {
      throw new NotFoundException('Variables not seted!');
    }
    let nameNew = pathEscape.split('.');
    const timestamp = new Date().getTime();
    nameNew =
      nameNew.length > 1
        ? `${nameNew[0]}_${timestamp}.${nameNew[1]}`
        : `${nameNew[0]}_${timestamp}`;

    fsExtra.copy(
      `${coreFolder}/${domainId}${pathEscape}`,
      `${coreFolder}/${domainId}${nameNew}`,
      (err) => {
        if (err) {
          throw new NotFoundException(err);
        }
        return {
          status: 'success',
          message: 'Files or folders succesfully duplicated!',
        };
      },
    );
  }

  async copy({ items, destination, domainId }) {
    const destinationEscape = escapePath(destination);
    if (!checkVariables([items, destinationEscape])) {
      throw new NotFoundException('Variables not seted!');
    }
    const pendingRequests = [];
    const errorCopy = [];
    items.forEach(function (item, i, arr) {
      const newItem = escapePath(item);
      const newdestination =
        `${coreFolder}/${domainId}${destinationEscape}/` + item.split('/').pop();
      pendingRequests.push(
        fsExtra.copy(`${coreFolder}/${domainId}${newItem}`, newdestination, (err) => {
          if (err) {
            errorCopy.push({ newItem, err });
          }
        }),
      );
    });
    Promise.all(pendingRequests)
      .then((values) => {
        return {
          status: 'success',
          message: 'Files or folders succesfully copied!',
        };
      })
      .catch((error) => {
        throw new NotFoundException(errorCopy);
      });
  }

  async move({ items, destination, domainId }) {
    const destinationEscape = escapePath(destination);
    if (!checkVariables([items, destinationEscape])) {
      throw new NotFoundException('Variables not seted!');
    }
    const pendingRequests = [];
    const errorCopy = [];
    try {
      items.forEach(function (item, i, arr) {
        const newItem = escapePath(item);
        const newdestination =
          `${coreFolder}/${domainId}${destinationEscape}/` + item.split('/').pop();
        pendingRequests.push(
          fsExtra.moveSync(`${coreFolder}/${domainId}${newItem}`, newdestination, {
            overwrite: true,
          }),
        );
      });
      Promise.all(pendingRequests).then((values) => {
        return {
          status: 'success',
          message: 'Files or folders succesfully moved!',
        };
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async unzip({ file, destination, domainId }) {
    if (!checkVariables([file, destination])) {
      throw new NotFoundException('Variables not seted!');
    }
    file = escapePath(file);
    destination =
      destination === '' || destination === undefined
        ? file.split('.').shift()
        : escapePath(destination);
    try {
      const zip = fs
        .createReadStream(`${coreFolder}/${domainId}${file}`)
        .pipe(unzipper.Parse({ forceStream: true })) as any;
      for (const entry of zip) {
        if (checkExtension(PATH.extname(entry.path))) {
          entry.pipe(
            fs.createWriteStream(`${coreFolder}/${domainId}${destination}/${entry.path}`),
          );
        } else {
          entry.autodrain();
        }
      }

      return {
        status: 'success',
        message: 'Archive successfully extracted!',
      };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async archive({ files, destination, name, domainId }) {
    const destinationEscape = await escapePath(destination);
    const nameEscape = await escapePath(name);
    try {
      const output = fs.createWriteStream(
        `${coreFolder}/${domainId}${destinationEscape}/${nameEscape}.zip`,
      );
      const archive = archiver('zip', {
        zlib: { level: 9 }, // Sets the compression level.
      });

      archive.pipe(output);
      archive.on('error', function (err) {
        throw new NotFoundException(err);
      });

      await files.forEach(function (item, i, arr) {
        const newItem = `${coreFolder}/${domainId}${escapePath(item)}`;
        const nameEscape = `${newItem.split('/').pop()}`;
        if (fs.lstatSync(newItem).isDirectory()) {
          archive.directory(newItem, nameEscape);
        } else {
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
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async saveImage({ path, file, isnew, domainId }) {
    let pathEscape = escapePath(path);
    const file$ = file.split(';base64,').pop();
    if (!checkExtension(PATH.extname(pathEscape))) {
      throw new NotFoundException(`Wrong File Format ${pathEscape}`);
    }
    if (!checkVariables([pathEscape, file])) {
      throw new NotFoundException('Variables not seted!');
    }
    if (isnew) {
      const nameNew = pathEscape.split('.');
      const timestamp = new Date().getTime();
      pathEscape = `${nameNew[0]}_${timestamp}.${nameNew[1]}`;
    }
    fs.writeFile(
      `${coreFolder}/${domainId}${pathEscape}`,
      file,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          throw new NotFoundException('Error while creating file');
        }
        return {
          status: 'success',
          message: 'File or Folder succesfully renamed!',
        };
      },
    );
  }

  async uploadFiles({ path, files, domainId }) {
    const pathEscape = escapePath(path);

    try {
      files.forEach(function (element, index, array) {
        if (checkExtension(PATH.extname(element.originalname))) {
          fs.readFile(element.path, async function (err, data) {
            const path = `${coreFolder}/${domainId}${pathEscape}/${element.originalname}`;

            await writeFile(path, data);
            fsExtra.remove(element.path, (err) => {
              if (err) {
                throw new NotFoundException(err.message);
              }
            });
          });
        }
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }

    return {
      status: 'success',
      message: 'Files are succesfully uploaded!',
    };
  }
}
