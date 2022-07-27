import { jsTemplate } from '../utils/jsTemplate';
import { javascriptKeyword } from '../utils/keywords';
import { Input, Type, TypeEnum, Variable } from '../types';
import { camelCase, IteratorName, WordsName } from '../utils/utils';

const INDENTATION = '    ';

/**
 * Transform a variable name into a valid one for Javascript
 * @param name
 * @returns
 */
function varName(name) {
  const candidate = camelCase(name);
  return javascriptKeyword.has(candidate) ? candidate + '_' : candidate;
}

function typeString(type: Type, inputData: Input) {
  switch (type.main) {
    case TypeEnum.INTEGER:
      return 'number';
    case TypeEnum.CHAR:
      return 'string';
    case TypeEnum.STRING:
      return 'string';
    case TypeEnum.ARRAY:
      return `Array.<${typeString(type.encapsulated, inputData)}>`;
    case TypeEnum.OBJECT: {
      const struct = inputData.getStruct(type.structName);
      const typeStruct = struct.fields.map((field: Variable) => {
        return `'${field.name}': ${typeString(field.type, inputData)}`;
      });
      return `{${typeStruct.join(', ')}}`;
    }
    default:
      throw new Error('khong ton tai type');
  }
}

class ParserJS {
  inputs: Input;
  existingName: string[];
  iterator: IteratorName;
  words: WordsName;

  /* Create the Javascript code to parse an input */
  constructor(input_data: Input) {
    this.inputs = input_data;
    this.existingName = input_data.inputs
      .map((element) => varName(element.name))
      .concat(varName(input_data.name));
    this.iterator = new IteratorName(this.existingName);
    this.words = new WordsName(this.existingName);
  }

  /* Generate the Javascript code to read a line of given type */
  read_line(decl, name, type, size, indentLvl) {
    let lines, struct, words;
    const indent = INDENTATION.repeat(indentLvl);
    const start = indent + (decl ? 'const ' : '') + name + ' = ';

    if (type.main === TypeEnum.ARRAY) {
      const lines = [];
      const sizeName = size;

      // if (!size) {
      //   sizeName = varName(name) + 'Size';
      //   lines.push(`${indent}const ${sizeName} = Number(stdin[line++]);`);
      // }

      if (type.encapsulated.main === TypeEnum.CHAR) {
        lines.push(start + 'stdin[line++].split("");');
      }

      lines.push(start + `stdin[line++].split(" ", ${sizeName || -1}).map(Number);`);
      return lines;
    }

    if (type.main === TypeEnum.OBJECT) {
      struct = this.inputs.getStruct(type.structName);
      words = this.words.next_name();
      lines = [indent + `const ${words} = stdin[line++].split(" ");`, start + '{'];

      const fields = struct.fields.map((field, index) => {
        return `${indent}${INDENTATION}"${varName(field.name)}": ${
          field.type.main === TypeEnum.CHAR
            ? `${words}[${index}]`
            : `Number(${words}[${index}])`
        },`;
      });
      lines.push(...fields);
      lines.push(`${indent}};`);
      return lines;
    }

    return [
      start +
        {
          [TypeEnum.INTEGER]: 'Number(stdin[line++]);',
          [TypeEnum.CHAR]: 'stdin[line++];',
          [TypeEnum.STRING]: 'stdin[line++];',
        }[type.main],
    ];
  }

  /* Generate the Javascript code to read the lines for a given type */
  read_lines(decl, variable, size, indentLvl) {
    if (variable.fitsInOneLine(this.inputs.structs)) {
      return this.read_line(decl, variable.name, variable.type, size, indentLvl);
    }

    const indent = INDENTATION.repeat(indentLvl);

    if (variable.type.main === TypeEnum.ARRAY) {
      const lines = [];
      let sizeName = size;
      if (!size) {
        sizeName = varName(variable.name) + 'Size';
        lines.push(`${indent}const ${sizeName} = Number(stdin[line++]);`);
      }

      lines.push(indent + `${decl ? 'const ' : ''}${variable.name} = [];`);
      const iterator = this.iterator.new_it();
      const inner_name = this.iterator.new_it();
      lines.push(
        indent + `for (let ${iterator} = 0; ${iterator} < ${sizeName}; ${iterator}++) {`,
      );
      this.words.push_scope();
      const readLinesResult = this.read_lines(
        true,
        new Variable({ name: inner_name, type: variable.type.encapsulated }),
        varName(variable.type.encapsulated.size),
        indentLvl + 1,
      );
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
      const readLinesResult = this.read_lines(
        false,
        new Variable({ name, type }),
        size,
        indentLvl,
      );
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
        const { name, type, formatStyle }: Variable = variable$[0];
        const readLinesResult = this.read_lines(
          true,
          new Variable({
            name: varName(name),
            type: type,
            formatStyle: formatStyle,
          }),
          varName(type.size),
          1,
        );
        lines.push(...readLinesResult);
      } else {
        const variable = variable$.map((variable) => varName(variable.name)).join(', ');
        lines.push(
          `${INDENTATION}const [${variable}] = stdin[line++].split(" ").map(Number);`,
        );
      }
    });

    return lines;
  }
}

export function genJavascript(inputSchema: any) {
  // const inputData = Input.formJson(inputSchema);
  const args = inputSchema.inputs.map((i) => varName(i.name)).join(', ');
  const call = `${inputSchema.name}(${args});`;

  const parserJS = new ParserJS(inputSchema);
  const parser = parserJS.read_vars().join('\n');

  const result = jsTemplate({
    call,
    parser,
    ind: INDENTATION,
    outputName: inputSchema.output.name,
    functionName: inputSchema.name,
  });

  return result;
}

export function genPlaceholderTest(inputSchema: any) {
  // const inputData = Input.formJson(inputSchema);
  const args = inputSchema.inputs.map((i) => varName(i.name)).join(', ');
  const placeholderCall = `function ${inputSchema.name} (${args}) {\n\t\n};`;
  return placeholderCall;
}

export function genJavascriptSolution(placeholder, functionName) {
  let result = placeholder + '\n';
  result += `module.exports = ${functionName}`;
  return result;
}
