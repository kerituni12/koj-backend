import fs from 'fs';
// const ws = fs.createWriteStream('./newtransform.in');

const inputSchema = {
  name: 'custom',
  structs: [
    {
      name: 'a struct',
      comment: 'A struct for the example',
      fields: [
        {
          name: 'listt',
          comment: 'an listt',
          type: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } },
          formatStyle: 'DEFAULT'
        }
      ]
    }
  ],
  inputs: [
    {
      name: 'size',
      comment: 'size',
      type: { main: 'INTEGER' },
      formatStyle: 'DEFAULT'
    },
    {
      name: 'a struct',
      comment: 'a struct',
      type: { main: 'OBJECT', structName: 'a struct' },
      formatStyle: 'DEFAULT'
    },
    {
      name: 'sizex',
      comment: 'sizex',
      type: { main: 'INTEGER' },
      formatStyle: 'DEFAULT'
    },
    {
      name: 'list',
      comment: 'a list of structs',
      type: {
        main: 'ARRAY',
        encapsulated: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } }
      },
      formatStyle: 'DEFAULT'
    }
  ],
  output: {
    name: 'output',
    comment: 'a list of structs',
    type: {
      main: 'ARRAY',
      encapsulated: { main: 'ARRAY', encapsulated: { main: 'INTEGER' } }
    },
    formatStyle: 'DEFAULT'
  }
};

const testcases = [
  {
    inputs: [
      { value: 5, key: '1' },
      { value: { listt: [1, 2, 3] }, key: '2' },
      { value: 5, key: '3' },
      {
        value: [
          [1, 2, 3],
          [1, 4, 5]
        ],
        key: '4'
      }
    ],
    output: ''
  }
];

export function transformInput(inputSchema, testcase) {
  const resultLine = [];
  function canBeInlined(type) {
    const canBeInlinedType = ['INTEGER', 'CHAR'];
    return canBeInlinedType.includes(type?.main);
  }

  function fitsInOneLine({ data, inputSchema, structs = [] }) {
    const fitsInOneLineType = ['INTEGER', 'CHAR', 'STRING'];
    if (fitsInOneLineType.includes(inputSchema.type.main)) return [true, data];

    if (inputSchema.type.main === 'ARRAY') {
      const isFit = canBeInlined(inputSchema.type.encapsulated);
      if (isFit) {
        return [true, data.join(' ')];
      }
      //   ws.write((data.length || inputSchema.size) + '\n');
      resultLine.push(data.length || inputSchema.size);
      return [false, null];
    }

    if (inputSchema.type.main === 'OBJECT') {
      const struct = structs.find(
        (struct) => struct.name === inputSchema.type.structName
      );
      if (!struct) {
        throw new Error('khong co struct');
        return [false, null];
      }

      for (let i = 0; i < struct.fields.length; i++) {
        if (!canBeInlined(struct.fields[i].type)) {
          return [false, null];
        }
      }
      return [true, Object.values(data).join(' ')];
    }

    throw new Error('khong phai type');
    return [false, null];
  }

  function getData2(data, inputSchema, structs?) {
    console.log(
      '🚀 ~ file: transform-input.util.ts ~ line 123 ~ getData2 ~ inputSchema',
      inputSchema
    );
    const [isFit, result] = fitsInOneLine({ data, inputSchema, structs });
    if (isFit) {
      //   ws.write(result + '\n')
      resultLine.push(result);
      return;
    }
    if (inputSchema.type.main === 'ARRAY') {
      // ws.write((data.length || inputSchema.size) + '\n');
      data.forEach((arr) => {
        const inputSchema$ = {} as any;
        inputSchema$.type = inputSchema.type.encapsulated;
        console.log('inputSchema$', inputSchema$);

        getData2(arr, inputSchema$);
      });
    }
    if (inputSchema.type.main === 'OBJECT') {
      const struct = structs.find(
        (struct) => struct.name == inputSchema.type.structName
      );
      console.log('struct', struct);
      if (!struct) {
        throw new Error('khong co struct');
        return [false, null];
      }
      Object.entries(data)
        .sort()
        .forEach(([key, value], index) => {
          const inputSchema$ = struct.fields[index];
          // console.log("inputSchema$",inputSchema$)
          getData2(value, inputSchema$);
        });
    }
  }

  function getData(inputs, inputSchema) {
    console.log(
      '🚀 ~ file: transform-input.util.ts ~ line 161 ~ getData ~ inputs',
      inputs
    );
    inputs.forEach((value, index) => {
      getData2(value, inputSchema.inputs[index], inputSchema.structs);
    });
    // ws.end();
  }

  const inputMapping = (testcase.inputs || []).map((input) => input.value);
  console.log(
    '🚀 ~ file: transform-input.util.ts ~ line 170 ~ transformInput ~ inputMapping',
    inputMapping
  );
  getData(inputMapping, inputSchema);
  console.log('resultLine', resultLine);
  return resultLine.join('\n');
}

// const result = transformInput(inputSchema, testcases[0]);
// console.log(result);
const inputSchemaTest = {
  structs: [
    {
      name: 'STRUCT1',
      fields: [{ name: 'a', type: { main: 'INTEGER' }, formatStyle: 'DEFAULT' }]
    }
  ],
  inputs: [
    {
      name: 'input1',
      type: { main: 'OBJECT', structName: 'STRUCT1' },
      formatStyle: 'DEFAULT'
    },
    {
      name: 'input2',
      type: { main: 'INTEGER' },
      formatStyle: 'DEFAULT'
    }
  ],
  output: {
    name: '__output__',
    type: { main: 'OBJECT', structName: 'STRUCT1' },
    formatStyle: 'DEFAULT'
  }
};
const testcaseTest = [
  {
    inputs: [
      { value: { a: 1 }, key: '3' },
      {
        value: 2,
        key: '4'
      }
    ],
    output: ''
  }
];
const result = transformInput(inputSchemaTest, testcaseTest[0]);
console.log(result);
