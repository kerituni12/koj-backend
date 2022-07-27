import { zip } from './utils/utils';
import { DEFAULT_OUTPUT_NAME } from './configs/constants';

export enum TypeEnum {
  INTEGER = 'INTEGER',
  CHAR = 'CHAR',
  STRING = 'STRING',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

export enum FormatStyle {
  DEFAULT = 'DEFAULT',
  NO_ENDLINE = 'NO_ENDLINE', // An integer that has no endline after it (an other follows)
  FORCE_NEWLINES = 'FORCE_NEWLINES', // A integer list with each int on a new line
}

/* Represent a struct (like in C) */
export class Struct {
  name: string;
  comment: string;
  fields: Variable[];

  constructor(data: Partial<Struct>) {
    Object.assign(this, data);
  }

  /* A special kind of struct: first field is the size of the second */
  is_sized_struct() {
    return (
      this.fields.length === 2 &&
      this.fields[0].type.main === TypeEnum.INTEGER &&
      [TypeEnum.STRING, TypeEnum.ARRAY].includes(this.fields[1].type.main) &&
      this.fields[0].name === this.fields[1].type.size
    );
  }

  fieldsNameTypeSize(format_spec, varName): { name; type; size }[] {
    let typeSize = this.fields.map((element) => varName(element.type.size));
    if (this.is_sized_struct()) {
      typeSize = ['', format_spec.replace('$$', varName(this.fields[0].name))];
    }
    const zipArray = zip(this.fields, typeSize);

    return this.fields.map((field, index) => {
      return {
        name: format_spec.replace('$$', varName(zipArray[index][0].name)),
        type: zipArray[index][0].type,
        size: zipArray[index][1],
      };
    });
  }

  static formJson({ name, comment, fields }) {
    if (!name || !fields) {
      return null;
    }

    const fieldList = [];
    fields.forEach((element) => {
      const variable = Variable.fromJson(element);
      if (!variable) return null;

      fieldList.push(variable);
    });

    const customName = name.toUpperCase();
    return new Struct({ name: customName, comment, fields: fieldList });
  }
}

/* Everything there is to know about a variable */
export class Variable {
  name: string;
  comment: string;
  type: Type;
  constraints: any;
  formatStyle: FormatStyle;

  constructor(data: Partial<Variable> = {}) {
    Object.assign(this, data);
  }

  /* Return False if more than one line is needed for this variable */
  fitsInOneLine(structs: Struct[]) {
    return this.type.fitsInOneLine(structs, this.formatStyle);
  }

  static fromJson({ name, comment, type, format }) {
    if (!name || !type) {
      return null;
    }

    const type$ = Type.fromString(type);
    if (!type$) return null;

    let formatStyle = FormatStyle.DEFAULT;
    if (format) {
      if (format === 'no_endlines') {
        if (type$.main != TypeEnum.INTEGER) {
          return null;
        }
        formatStyle = FormatStyle.NO_ENDLINE;
      } else if (format === 'force_newlines') {
        if (
          type$.main != TypeEnum.ARRAY ||
          type$.encapsulated === null ||
          type$.encapsulated.main != TypeEnum.INTEGER
        ) {
          return null;
        }
        formatStyle = FormatStyle.FORCE_NEWLINES;
      } else {
        throw new Error('khong dung format');
      }
    }

    return new Variable({ name, comment, type: type$, formatStyle });
  }
}

/* Represents the user input, parsed */
export class Input {
  name?: string;
  structs?: Struct[];
  inputs?: Variable[];
  subject?: string;
  output?: Variable;

  constructor(data: Partial<Input>) {
    Object.assign(this, data);
  }

  getStruct(name: string): Struct {
    /* Get a struct by its name (or throw StopIteration) */
    return this.structs.find((struct: Struct) => struct.name === name);
  }

  getAllVars() {
    const ret = [];
    let current = [];
    this.inputs.forEach((element) => {
      current.push(element);
      if (element.formatStyle !== FormatStyle.NO_ENDLINE) {
        ret.push(current);
        current = [];
      }
    });
    return ret;
  }

  static formJson({ name, structs, inputs, subject, output }) {
    const variableLookup = {};
    const variableDicts = [];
    const structs$ = [];

    if (structs) {
      structs.forEach((struct) => {
        const struct$ = Struct.formJson(struct);
        if (!struct$) return null;
        structs$.push(struct$);
        struct$.fields.forEach((field) => {
          if (variableLookup[field.name]) {
            throw new Error('Several struct fields are called' + field.name);
          }
          variableLookup[field.name] = field;
        });
        variableDicts.concat(struct$.fields);
      });
    }

    const variables = [];
    inputs.forEach((input) => {
      const variable = Variable.fromJson(input);
      if (!variable) return null;
      variables.push(variable);
      if (variableLookup[variable.name]) {
        throw new Error('Several variables or struct fields ' + variable.name);
      }
      variableLookup[variable.name] = variable;
      variableDicts.push(input);
    });

    // Todo check vaild variable name

    if (!output.name) output.name = DEFAULT_OUTPUT_NAME;
    const output$ = Variable.fromJson(output);

    return new Input({
      name,
      structs: structs$,
      inputs: variables,
      subject,
      output: output$,
    });
  }
}

/* Represents the type of a variable */
export class Type {
  main: any;
  size?: string;
  can_be_empty?: boolean;
  encapsulated?: Type;
  structName?: string;

  constructor(data: Partial<Type>) {
    Object.assign(this, data);
  }

  // toString() {
  //   switch (this.main) {
  //     case TypeEnum.INTEGER:
  //       return 'int';
  //     case TypeEnum.CHAR:
  //       return 'char';
  //     case TypeEnum.STRING:
  //       return `str(${this.size})`;
  //     case TypeEnum.ARRAY:
  //       return `Array[${this.encapsulated}](${this.size})`;
  //     case TypeEnum.OBJECT:
  //       return `@${this.structName}`;
  //     default:
  //       throw new Error('not exist type');
  //   }
  // }

  canBeInlined() {
    /* Can we parse several of this type on a single line */
    return [TypeEnum.INTEGER, TypeEnum.CHAR].includes(this.main);
  }

  fitsInOneLine(structs: Array<Struct>, style: FormatStyle = FormatStyle.DEFAULT) {
    const fitOneLineType = [TypeEnum.INTEGER, TypeEnum.CHAR, TypeEnum.STRING];
    if (fitOneLineType.includes(this.main)) return true;

    switch (this.main) {
      case TypeEnum.ARRAY:
        return this.encapsulated.canBeInlined();
      case TypeEnum.OBJECT: {
        const struct = structs.find((struct) => struct.name === this.structName);
        return struct.fields.every((field: Variable) => {
          return field.type.canBeInlined();
        });
      }
      default:
        throw new Error('khong ton tai key');
    }
  }

  static fromString(string: string): Type {
    switch (string) {
      case TypeEnum.INTEGER:
        return new Type({ main: TypeEnum.INTEGER });
      case TypeEnum.CHAR:
        return new Type({ main: TypeEnum.CHAR });
      case TypeEnum.STRING:
        return new Type({ main: TypeEnum.STRING });
      default: {
        const parseTypeResult = parseType(string);
        if (parseTypeResult) {
          if (parseTypeResult.type === TypeEnum.OBJECT) {
            return new Type({
              main: TypeEnum.OBJECT,
              structName: parseTypeResult.encapsulated.toUpperCase(),
            });
          }
          if (parseTypeResult.type === TypeEnum.ARRAY) {
            const encapsulated = Type.fromString(parseTypeResult.encapsulated);
            return new Type({
              main: TypeEnum.ARRAY,
              size: parseTypeResult.size,
              encapsulated,
            });
          }
        }
        return null;
      }
    }
  }
}

// (Object|Array)({|[])innerType(]|})(size)
function parseType(string) {
  const regex =
    /^(OBJECT|ARRAY)((\[|{)([A-Za-z][A-Za-z0-9{}[\]()) ]*)(}|\]))?(\(([A-Za-z0-9 ])\))?$/;
  const result = string.match(regex);
  if (result) {
    return {
      type: result[1],
      encapsulated: result[4],
      size: result[7],
    };
  }
  return null;
}
