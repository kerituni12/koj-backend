import { camelToSnakeCase } from './string.util';

export function transformObjectToQuery(object, prefix) {
  return Object.keys(object)
    .map((obj) => {
      console.log('🚀 ~ file: database-query.ts ~ line 6 ~ .map ~ obj', obj);
      const column = camelToSnakeCase(obj);
      return prefix ? `${prefix}."${column}"` : column;
    })
    .join(', ');
}
