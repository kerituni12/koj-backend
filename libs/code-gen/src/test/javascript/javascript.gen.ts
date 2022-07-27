import { genJavascript, genPlaceholderTest } from '../../languages/javascript';
import * as json from '../custom.input.json';
import { Input } from '../../types';

const placeholder = genPlaceholderTest(json);
console.log('🚀 ~ file: javascript.gen.ts ~ line 4 ~ placeholder', placeholder);

const inputData = Input.formJson(<any>json);
const result = genJavascript(inputData);
console.log(result);
