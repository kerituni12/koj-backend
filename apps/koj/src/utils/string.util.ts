export function getValueAfterLastChar(string: string, char: string) {
  return string.substring(string.lastIndexOf(char) + 1);
}

export function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
