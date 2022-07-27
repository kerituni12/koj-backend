import { jsTemplate } from './javascript.template';
import * as json from '../input.json';
import { fitOneLine } from '../codegen.utils';

const INDENTATION = '  ';

// console.log(json.structs.fields.length);

function intToIterator(value) {
  if (value < 105) {
    return String.fromCharCode(105);
  }
  return String.fromCharCode(value);
}

function readLine({ declare, input, structs, indentLevel }) {
  const indent = INDENTATION.repeat(indentLevel);
  const start = `${indent}${declare ? 'const ' : ''}${input.name} =`;

  if (input.type == 'list') {
    if (input.encapsulated.type === 'char') {
      return `${start} stdin[line++].split("");`;
    }
    return `${start} stdin[line++].split(" ", ${input.size || 1}).map(Number);`;
  }
  if (input.type === 'struct') {
    const struct = structs.find((struct) => struct.name === input.name);
    const words = 'word';
    const lines = [`${indent}const ${words} = stdin[line++].split(" ");`];
    lines.push(`${start} {`);

    const properties = struct.fields
      .map(
        (field, i) =>
          `${indent} ${INDENTATION} "${field.name}": ${
            field.type === 'int' ? `${words}[${i}]` : `Number(${words}[${i}])`
          }`,
      )
      .join(',\n');

    lines.push(properties);
    lines.push(`${indent} };`);

    return lines.join('\n');
  }

  const readInput = {
    int: 'Number(stdin[line++]);',
    char: 'stdin[line++];',
    string: 'stdin[line++];',
  };

  return `${start} ${readInput[input.type]}`;
}

function readLines({ declare, input, structs, indentLevel }) {
  let initIterator = 104;

  function f({ declare, input, structs, indentLevel }) {
    initIterator++;
    const iterator = intToIterator(initIterator);
    if (fitOneLine(input, structs)) {
      return readLine({ declare, input, structs, indentLevel });
    }

    const indent = INDENTATION.repeat(indentLevel);
    if (input.type === 'list') {
      if (!input.name) {
        initIterator += 1;
        input.name = intToIterator(initIterator);
      }
      if (!input.encapsulated.name) {
        initIterator += 1;
        input.encapsulated.name = intToIterator(++initIterator);
      }

      const lines = [`${indent}${declare ? 'const ' : ''}${input.name}= [];`];
      lines.push(
        `${indent}for (let ${iterator} = 0; ${iterator} < ${input.size}; ${iterator}++){`,
      );
      const innerInput = f({
        declare,
        input: input.encapsulated,
        structs,
        indentLevel: indentLevel + 1,
      });

      // console.log('inner', innerInput);

      lines.push(`${innerInput}`);
      lines.push(`${indent}${INDENTATION}${input.name}.push(${input.encapsulated.name})`);
      lines.push(`${indent}};`);
      return lines.join('\n');
    }

    const lines = [`${indent}${declare ? 'const ' : ''}${input.name}= {};`];
    const struct = structs.find((struct) => struct.name === input.name);

    const innerInput = struct.fields.forEach((field) => {
      lines.push(f({ declare: false, input: field, structs, indentLevel }));
    });
    return lines.join('\n');
  }

  return f({ declare, input, structs, indentLevel });
}

function typeString({ input, structs }) {
  // console.log(input);
  if (input.type === 'int') {
    return 'number';
  }
  if (input.type === 'char') {
    return 'string';
  }
  if (input.type === 'string') {
    return 'string';
  }
  if (input.type === 'struct') {
    const struct = structs.find((struct) => struct.name === input.name);
    const typeStruct = struct.fields.map((field) => {
      return `"${field.name.split('.')[1]}": ${typeString({ input: field, structs })}`;
    });
    return `{${typeStruct.join(', ')}}`;
  }
  if (input.type === 'list') {
    return `Array.<${typeString({ input: input.encapsulated, structs })}>`;
  }
}

function callWithComment({ functionName, inputs, outputs, structs }) {
  const lines = ['/**'];
  inputs.forEach((input) => {
    lines.push(
      ` * Param {${typeString({ input, structs })}} ${input.name} ${input.comment || ''}`,
    );
  });
  lines.push(' */');
  lines.push(`function ${functionName} (${inputs.map((i) => i.name).join(', ')}){
    
}`);
  return lines.join('\n');
}

function call({ functionName, inputs, outputs, structs }) {
  return `function ${functionName} (${inputs.map((i) => i.name).join(', ')}){}`;
}

// console.log(typeString({ input: json.input[1], structs: json.structs }));
// console.log(call({ inputs: json.input, structs: json.structs }));
// console.log(
//   readLines({
//     declare: true,
//     input: json.input[1],
//     structs: json.structs,
//     size: 1,
//     indentLevel: 1,
//   }),
// );
export function getContent({ functionName, inputs, outputs, structs }) {
  const placeholder = call({
    functionName: functionName,
    inputs: inputs,
    outputs: outputs,
    structs: structs,
  });

  const ind = INDENTATION;
  const args = inputs.map((i) => i.name).join(', ');
  const placeholderCall = `${json.functionName}(${args});`;
  const parser = inputs
    .map((i) =>
      readLines({ declare: true, input: i, structs: json.structs, indentLevel: 1 }),
    )
    .join('\n');

  return jsTemplate({ placeholder, placeholderCall, ind, parser });
}

console.log(getContent(json));
