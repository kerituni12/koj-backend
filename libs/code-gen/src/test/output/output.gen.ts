import { genOutput } from '../../languages/output';
import * as json from '../custom.input.json';
import { Input } from '../../types';

const inputData = Input.formJson(<any>json);
const result = genOutput(inputData);
console.log(result);
