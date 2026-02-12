3==3
console.log(3 === 3); //true

//Diferente
console.log(3 != "3"); //false
console.log(3 !== "3"); //true

//Maior que
console.log(3 > 4); //false

//Menor que
console.log(3 < 4); //true

//Maior ou igual
console.log(3 >= 4); //false

//Menor ou igual
console.log(3 <= 3); //true

3 * 3 + 1 == 10 //true
3 * (3 + 1) == 12 //true

//Operadores Lógicos
//AND (E) &&
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
//OR (OU) ||
console.log(true || false); //true
console.log(false || false); //false
//NOT (NÃO) !
console.log(!true); //false
console.log(!false); //true 
//Combinação de operadores
console.log((3 > 2) && (4 < 5)); //true
console.log((3 > 2) || (4 > 5)); //true
console.log(!(3 == 3)); //false
console.log((3 < 2) || !(4 < 5)); //false

//Precedência de operadores
console.log(3 + 4 * 2); //11
console.log((3 + 4) * 2); //14

//Comparação de dados
//Igualdade
console.log(3 == '3'); //true
console.log(3 === '3'); //false