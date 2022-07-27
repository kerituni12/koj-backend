import {
  genCplusplus,
  genPython,
  genJavascript,
  genJavascriptSolution,
  genCplusplusModule,
  genCplusplusSolution,
  genOutput,
} from '@koj/code-gen';
import saveCode from './save-code.util';
import path from 'path';

export const languageConfigs = {
  javascript: {
    gen: genJavascriptFile,
    genSolution: genJavascriptSolution,
    name: 'javascript',
    extension: 'js',
  },
  python: {
    gen: genPython,
    name: 'python',
    extension: 'py',
  },
  cplusplus: {
    gen: genCplusPlusFile,
    genModule: genCplusplusModule,
    genSolution: genCplusplusSolution,
    name: 'cplusplus',
    extension: 'cpp',
  },
  output: {
    gen: genOutputFile,
    name: 'output',
    extension: 'js',
  },
};

function genJavascriptFile({ inputData, domainId, slug, path }) {
  const codegen = genJavascript(inputData);
  return saveCode(path, `main.js`, codegen, false);
}

function genCplusPlusFile({ inputData, domainId, slug, path }) {
  const codegen = genCplusplus(inputData);

  return Promise.all([
    saveCode(path, `main.cpp`, codegen.main, false),
    saveCode(path, 'solution.h', codegen.lib, false),
  ]);
}

function genOutputFile({ inputData, domainId, slug, path }) {
  const codegen = genOutput(inputData);
  return saveCode(path, `output.js`, codegen, false);
}
