import  capitalize  from "../src/capitalize.js";
import { strict as assert } from 'assert';

assert.deepEqual(capitalize('hello'), 'Hello');
assert.deepEqual(capitalize(''), '');
console.log('Все тесты пройдены!');
