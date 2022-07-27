export function escapePath(path) {
  return typeof path !== 'undefined' &&
    path !== 'undefined' &&
    path !== '' &&
    !path.includes('..') &&
    !path.includes('./')
    ? path
    : '/uploads/';
}

export function checkExtension(extension) {
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
export function checkVariables(variables) {
  let result = true;
  variables.forEach((element) => {
    if (element === '' || element === undefined) {
      result = false;
    }
  });
  return result;
}
