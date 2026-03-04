const lodash = require('lodash');

const array = [1, 2, 3, 4, 5];
const chunked = lodash.chunk(array, 2);
//chunk é uma função do lodash que divide um array em arrays menores
console.log(chunked);

console.log(lodash.kebabCase('hello world'));
//kebabCase é uma função do lodash que divide uma string em strings menores

