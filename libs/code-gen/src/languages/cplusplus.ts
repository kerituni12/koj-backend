import { cplusplusKeyword } from "../utils/keywords";
import {
  pascalCase,
  snakeCase,
  IteratorName,
  snakeCaseWithoutDot
} from "../utils/utils";
import { FormatStyle, Input, Type, TypeEnum, Variable } from "../types";
// import * as json from './custom.input.json';
import * as json from "../test/refactor.input.json";
import { DEFAULT_OUTPUT_NAME } from "../configs/constants";

function varName(name) {
  const candidate = snakeCaseWithoutDot(name);
  return cplusplusKeyword.has(candidate) ? candidate + "_" : candidate;
}

function structName(name) {
  /* Transform a class name into a valid one for Python */
  return pascalCase(name);
}

/* Create the C++ code to parse an input */
class ParserCpp {
  input: Input;
  includes: any;
  main: any[];
  method: any[];
  output: any[];
  indent_lvl: number;
  indentation: number;
  iterator: IteratorName;

  constructor(input_data: Input) {
    this.input = input_data;
    this.includes = new Set();
    this.main = [];
    this.method = [];
    this.output = [];
    this.iterator = new IteratorName(
      input_data.inputs.map((variable) => variable.name)
    );
    this.indent_lvl = 0;
    this.indentation = 4;
  }

  type_str(type: Type) {
    /* Return the C++ name for a type */
    if (type.main === TypeEnum.INTEGER) {
      return "int";
    }
    if (type.main === TypeEnum.STRING) {
      this.includes.add("string");
      return "string";
    }
    if (type.main === TypeEnum.CHAR) {
      return "char";
    }
    if (type.main === TypeEnum.OBJECT) {
      return structName(type.structName);
    }

    this.includes.add("vector");
    return `vector<${this.type_str(type.encapsulated)}>`;
  }

  /* Read an entire line and store it into the right place(s) */
  read_line(name: string, type: Type, size: string) {
    const indent = " ".repeat(this.indentation * this.indent_lvl);
    this.includes.add("vector");
    if ([TypeEnum.INTEGER, TypeEnum.CHAR].includes(type.main)) {
      this.main.push(indent + `cin >> ${name};`);
      return;
    }
    if (type.main === TypeEnum.STRING) {
      if (type.can_be_empty) {
        this.main.push(indent + `if (${size} > 0)`);
      }

      this.main.push(
        indent +
          " ".repeat(type.can_be_empty ? this.indentation : 0) +
          `getline(cin >> ws, ${name});`
      );
      return;
    }
    if (type.main === TypeEnum.ARRAY) {
      const innerName = this.iterator.new_it();
      //   this.main.push(
      //     indent + `for (${this.type_str(type.encapsulated)}& ${innerName} : ${name})`,
      //   );
      //   this.main.push(' '.repeat(this.indentation) + indent + `cin >> ${innerName};`);
      this.main.push(`${this.type_str(type.encapsulated)} ${innerName};`);
      this.main.push(`${indent}cin >> ws;`);
      this.main.push(`${indent}getline(cin, buffer);`);
      this.main.push(`${indent}istringstream ${innerName}_cin(buffer);`);
      this.main.push(`${indent}while (${innerName}_cin >> ${innerName}){`);
      this.main.push(
        `${" ".repeat(
          this.indentation * (this.indent_lvl + 1)
        )}${name}.push_back(${innerName});`
      );
      this.main.push(`${indent}}`);
      // this.iterator.pop_it();
      return;
    }

    if (type.main === TypeEnum.OBJECT) {
      const struct = this.input.getStruct(type.structName);
      const properties = struct.fields
        .map((field) => `${name}.${varName(field.name)}`)
        .join(" >> ");

      this.main.push(`${indent}cin >> ${properties};`);
      return;
    }
    throw new Error("khong co type");
  }

  read_lines(name: string, type: Type, size: string, already_resized = false) {
    if (
      type.main === TypeEnum.ARRAY &&
      !already_resized &&
      !type.encapsulated.canBeInlined()
    ) {
      const sizeDeclare = `${varName(name)}_size`;
      const indent = " ".repeat(this.indentation * this.indent_lvl);

      this.main.push(`${indent}int ${sizeDeclare};`);
      this.main.push(`${indent}cin >> ${sizeDeclare};`);
      this.main.push(`${indent}${snakeCase(name)}.resize(${sizeDeclare});`);
    }

    if (type.fitsInOneLine(this.input.structs)) {
      this.read_line(name, type, size);
      return;
    }

    if (type.main === TypeEnum.OBJECT) {
      const struct = this.input.getStruct(type.structName);
      const structNameTypeSize = struct.fieldsNameTypeSize(
        `${name}.$$`,
        varName
      );
      structNameTypeSize.forEach(({ name, type, size }) => {
        this.read_lines(name, type, size);
      });
      return;
    }

    const innerName = this.iterator.new_it();

    this.main.push(
      `${" ".repeat(this.indentation * this.indent_lvl)}for (${this.type_str(
        type.encapsulated
      )}& ${innerName} : ${name}) {`
    );
    this.indent_lvl += 1;
    this.read_lines(
      innerName,
      type.encapsulated,
      varName(type.encapsulated.size)
    );
    this.indent_lvl -= 1;
    this.main.push(" ".repeat(this.indentation * this.indent_lvl) + "}");
    this.iterator.pop_it();
  }

  print_line(name: string, type: Type, indent_lvl: number, style: FormatStyle) {
    const indent = " ".repeat(this.indentation * indent_lvl);
    const endl = style == FormatStyle.NO_ENDLINE ? '" "' : "endl";
    if (
      [TypeEnum.INTEGER, TypeEnum.CHAR, TypeEnum.STRING].includes(type.main)
    ) {
      this.output.push(`${indent}cout << ${name} << ${endl};`);
      return;
    }
    if (type.main === TypeEnum.ARRAY) {
      const innerName = this.iterator.new_it();
      this.output.push(
        `${indent}for (size_t ${innerName} = 0; ${innerName} < ${name}.size(); ++${innerName})`
      );
      this.output.push(
        " ".repeat(this.indentation) +
          indent +
          "cout << " +
          `${name}[${innerName}] << (${innerName} < ${name}.size() - 1 ? "${
            type.encapsulated.main === TypeEnum.CHAR ? "" : " "
          }" : "\\n");`
      );
      this.output.push(indent + `if (${name}.size() == 0) cout << endl;`);
      this.iterator.pop_it();
      return;
    }

    //Struct
    const struct = this.input.getStruct(type.structName);
    const properties = struct.fields
      .map((field) => `${name}.${varName(field.name)}`)
      .join(" << ' ' << ");
    this.output.push(`${indent}cout << ${properties} << endl;`);
  }

  print_lines(
    name: string,
    type: Type,
    indent_lvl: number,
    style: FormatStyle = FormatStyle.DEFAULT
  ) {
    if (type.fitsInOneLine(this.input.structs, style)) {
      this.print_line(name, type, indent_lvl, style);
      return;
    }

    // Struct
    if (type.main === TypeEnum.OBJECT) {
      this.input.getStruct(type.structName).fields.forEach((field) => {
        this.print_lines(
          `${name}.${varName(field.name)}`,
          field.type,
          indent_lvl
        );
      });
      return;
    }

    //Array
    const inner_name = this.iterator.new_it();
    this.output.push(
      `${" ".repeat(this.indentation)}cout << ${name}.size() << endl;`
    );
    this.output.push(
      `${" ".repeat(this.indentation * indent_lvl)}for (const ${this.type_str(
        type.encapsulated
      )}& ${inner_name} : ${name}) {`
    );
    this.print_lines(inner_name, type.encapsulated, indent_lvl + 1);
    this.output.push(" ".repeat(this.indentation * indent_lvl) + "}");
    this.iterator.pop_it();
  }

  /* Read a variable */
  read_var(variable) {
    let size = "";

    if (variable.type.main === TypeEnum.ARRAY) {
      size = variable.type.size ? `(${varName(variable.type.size)})` : "";
    }

    this.main.push(
      `${this.type_str(variable.type)} ${varName(variable.name)}${size}; ///< ${
        variable.comment
      }`
    );
    this.read_lines(
      varName(variable.name),
      variable.type,
      varName(variable.type.size)
      //   true,
    );
  }

  genOutput(output) {
    this.print_lines(varName(output.name), output.type, 1, output.format_style);
  }

  placeholder() {
    const name = this.input.name;
    const args = [];
    this.input.inputs.forEach((arg) => {
      const argName = varName(arg.name);
      // this.method.push(`/// \\param ${arg.name} ${arg.comment}`);
      if (
        [TypeEnum.STRING, TypeEnum.OBJECT, TypeEnum.ARRAY].includes(
          arg.type.main
        )
      ) {
        args.push(`${this.type_str(arg.type)}& ${argName}`);
        return;
      }
      args.push(`${this.type_str(arg.type)} ${argName}`);
    });
    this.method.push(
      `${this.type_str(this.input.output.type)} ${name}(${args.join(", ")});`
    );
  }

  content() {
    const indent = " ".repeat(this.indentation);
    const outputName = this.input.output.name
      ? varName(this.input.output.name)
      : DEFAULT_OUTPUT_NAME;

    let output = '#include "solution.h"\n\n';

    output += "int main() {\n";
    output += indent + "string buffer;\n";

    this.main.forEach((line) => {
      output += indent + line + "\n";
    });

    const argsCall = this.input.inputs
      .map((variable) => varName(variable.name))
      .join(", ");

    output +=
      indent +
      `${this.type_str(this.input.output.type)} ${outputName} = ${
        this.input.name
      }(${argsCall});\n`;
    output += indent + 'cout << "@result@" << endl;\n';

    this.genOutput(this.input.output);
    this.output.forEach((line) => (output += line + "\n"));

    output += "}\n";

    return output;
  }

  genLib() {
    let output = "#pragma once\n";
    output += "#include <iostream>\n";
    output += "#include <string>\n";
    output += "#include <sstream>\n";

    const indent = " ".repeat(this.indentation);

    this.includes.forEach((line) => (output += `#include <${line}>\n`));

    output += "using namespace std;\n\n";

    this.input.structs.forEach((struct) => {
      // output += `/// ${struct.comment}\n`;
      output += `struct ${structName(struct.name)} {\n`;
      struct.fields.forEach((field) => {
        output +=
          indent + `${this.type_str(field.type)} ${varName(field.name)};\n`;
      });
      output += "};\n\n";
    });

    this.method.forEach((line) => (output += line + "\n"));
    return output;
  }
}

export function genCplusplus(inputSchema: any) {
  // const inputData = Input.formJson(inputSchema);
  const parser = new ParserCpp(inputSchema);
  inputSchema.inputs.forEach((variable) => parser.read_var(variable));
  parser.placeholder();
  return { main: parser.content(), lib: parser.genLib() };
}

export function genCplusplusModule() {
  //
}

export function genCplusplusSolution(placeholder, functionName) {
  let result = `#include "/app/solution.h"\n`;
  result += placeholder;
  return result;
}
