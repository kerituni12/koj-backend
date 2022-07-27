import * as json from '../test/custom.input.json';
import { javascriptKeyword } from '../utils/keywords';
import { DEFAULT_OUTPUT_NAME } from '../configs/constants';
import { Input, TypeEnum, Variable } from '../types';
import { jsTemplateOutput } from '../utils/jsTemplate';
import { camelCase, IteratorName, WordsName } from '../utils/utils';

const INDENTATION = '    ';

/**
 * Transform a variable name into a valid one for Javascript
 * @param name
 * @returns
 */
function varName(name) {
  const candidate = camelCase(name);

  if (['process', 'stdin', 'line', 'main'].includes(candidate)) {
    return candidate + '_';
  }

  return javascriptKeyword.has(candidate) ? candidate + '_' : candidate;
}

class ParserJSOutput {
  input: Input;
  existingName: string[];
  iterator: IteratorName;
  words: WordsName;
  /* Create the Javascript code to parse an input */
  constructor(input_data: Input) {
    this.input = input_data;
    this.existingName = input_data.inputs
      .map((element) => varName(element.name))
      .concat(varName(input_data.name));
    this.iterator = new IteratorName(this.existingName);
    this.words = new WordsName(this.existingName);
  }

  read_line(decl, name, type, size, indentLvl) {
    /* Generate the Javascript code to read a line of given type */
    let lines, struct, words;
    const indent = INDENTATION.repeat(indentLvl);
    const start = indent + (decl ? 'const ' : '') + name + ' = ';

    if (type.main === TypeEnum.ARRAY) {
      const lines = [];
      const sizeName = size;

      if (type.encapsulated.main === TypeEnum.CHAR) {
        lines.push(start + 'stdin[line++].split("");');
      }

      lines.push(start + `stdin[line++].split(" ", ${sizeName}).map(Number);`);
      return lines;
    }

    if (type.main === TypeEnum.OBJECT) {
      struct = this.input.getStruct(type.structName);
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

  read_lines(decl, variable, size, indentLvl) {
    /* Generate the Javascript code to read the lines for a given type */
    if (variable.fitsInOneLine(this.input.structs)) {
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

    const struct = this.input.getStruct(variable.type.structName);
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

  read_vars() {
    /* Generate the Javascript code to read all input variables */
    const lines = [];
    const { name, type, formatStyle } = this.input.output;

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

    return lines;
  }
}

export function genOutput(inputSchema) {
  const parserJS = new ParserJSOutput(inputSchema);
  const parser = parserJS.read_vars().join('\n');
  const outputName = inputSchema.output.name
    ? varName(inputSchema.output.name)
    : DEFAULT_OUTPUT_NAME;

  return jsTemplateOutput({
    ind: INDENTATION,
    parser,
    outputName,
  });
}

// genOutput();
