import { javascriptKeyword, pythonKeyword } from '../utils/keywords';
import { Input, Type, TypeEnum, Variable, FormatStyle } from '../types';
import { snakeCase, IteratorName, WordsName, pascalCase } from '../utils/utils';
import * as json from '../test/custom.input.json';
const INDENTATION = '    ';

/* Transform a variable name into a valid one for Python */
function varName(name) {
  const candidate = snakeCase(name);
  return pythonKeyword.has(candidate) || candidate === 'dataclass'
    ? candidate + '_'
    : candidate;
}

function className(name) {
  /* Transform a class name into a valid one for Python */
  const candidate = pascalCase(name);
  return candidate === 'List' ? candidate + '_' : candidate;
}

function typeString(type: Type) {
  switch (type.main) {
    case TypeEnum.INTEGER:
      return 'int';
    case TypeEnum.CHAR:
      return 'str';
    case TypeEnum.STRING:
      return 'str';
    case TypeEnum.OBJECT:
      return className(type.structName);
    case TypeEnum.ARRAY:
      return `List[${typeString(type.encapsulated)}]`;
    default:
      throw new Error('khong ton tai type');
  }
}

function declareClasses(input_data: Input) {
  /* Return declarations of structs as data classes */
  const lines = [];
  input_data.structs.forEach((struct) => {
    lines.push('@dataclass');
    lines.push(`class ${className(struct.name)}:`);
    lines.push(`${INDENTATION}"""${struct.comment}"""`);
    struct.fields.forEach((field) => {
      lines.push(
        `${INDENTATION}${varName(field.name)}: ` +
          `${typeString(field.type)}  # ${field.comment}`,
      );
    });
  });
  return lines;
}

function declareImport(input_data: Input) {
  const lines = ['import json'];

  if (input_data.structs) {
    lines.push('from dataclasses import dataclass');
  }

  let hasList = false;
  input_data.structs.forEach((struct) => {
    struct.fields.forEach((field) => {
      if (field.type.main === TypeEnum.ARRAY) {
        hasList = true;
      }
    });
  });
  input_data.inputs.forEach((variable) => {
    if (variable.type.main === TypeEnum.ARRAY) {
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
function wrapLine(begin: string, end: string, args: string[], indent_lvl = 0) {
  const max_chars = 88;
  const args_size = args.join(', ').length;

  if (
    begin.length + end.length + args_size + INDENTATION.repeat(indent_lvl).length <=
    max_chars
  ) {
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

function readLine(type: Type, input_data: Input) {
  if (type.main === TypeEnum.ARRAY) {
    if (type.encapsulated.main === TypeEnum.CHAR) {
      return 'list(input())';
    }
    return 'list(map(int, input().split()))';
  }
  if (type.main === TypeEnum.OBJECT) {
    const struct = input_data.getStruct(type.structName);

    if (struct.fields.every((field) => field.type.main === TypeEnum.INTEGER)) {
      return `${className(struct.name)}(*map(int, input().split()))`;
    }
    if (struct.fields.every((field) => field.type.main === TypeEnum.CHAR)) {
      return `${className(struct.name)}(*input().split())`;
    }

    const lamdaStatment = 'lamda x, y: int(y) if x else y';
    const mappingStdin = struct.fields
      .map((field) => (field.type.main === TypeEnum.INTEGER ? 1 : 0))
      .join(', ');

    return `${className(
      struct.name,
    )}(*map(${lamdaStatment}, (${mappingStdin}), input().split()))`;
  }

  return {
    [TypeEnum.INTEGER]: 'int(input())',
    [TypeEnum.CHAR]: 'input()[0]',
    [TypeEnum.STRING]: 'input()',
  }[type.main];
}

function readLines(
  type: Type,
  size: string,
  input_data: Input,
  style: FormatStyle = FormatStyle.DEFAULT,
) {
  if (type.fitsInOneLine(input_data.structs, style)) {
    return [readLine(type, input_data)];
  }
  if (type.main == TypeEnum.ARRAY) {
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

function readVars(input_data: Input) {
  const lines = [];
  const allVaraible = input_data.getAllVars();
  allVaraible.forEach((variables) => {
    if (variables.length === 1) {
      const variable: Variable = variables[0];
      const variableLines = readLines(
        variable.type,
        varName(variable.type.size),
        input_data,
        variable.formatStyle,
      );
      variableLines[0] = `${varName(variable.name)} = ${variableLines[0]}`;
      lines.push(...variableLines);
    } else {
      const variables$ = variables.map((variable) => varName(variable.name)).join(', ');
      lines.push(variables$);
      lines.push(` = map(int, input().split())`);
    }
  });

  return lines;
}

class ParserPython {
  input: Input;
  main: any[];
  method: any[];

  constructor(input_data: Input) {
    this.input = input_data;
    this.main = [];
    this.method = [];
  }

  call(reprint = false) {
    const functionName = varName(this.input.name);
    const outputName = varName(this.input.output.name) || '__output__';
    const argsParam = this.input.inputs.map(
      (element) => `${varName(element.name)}: ${typeString(element.type)}`,
    );
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
    this.main.push(
      ...wrapLine(`${varName(this.input.output.name)} = ${functionName}(`, ')', argsCall),
    );
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

export function genPython(inputSchema: any) {
  // const inputData = Input.formJson(inputSchema);
  const result = new ParserPython(inputSchema).content();
  return result;
}
