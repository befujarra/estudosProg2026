//if e else sao condicionais que permitem executar blocos de código diferentes com base em uma condição.
//note que se usa as operações e operadores logicos para criar as condições.
//pode conter if dentro de if, isso é chamado de if aninhado.

let idade = 18;
if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

//else if
// isso evita muito if aninhado, deixando o código mais limpo e fácil de ler.
let nota = 85;
if (nota >= 90) {
    console.log('Excelente!');
} else if (nota >= 80) {
    console.log('Muito bom!');
} else if (nota >= 70) {
    console.log('Bom!');
} else {
    console.log('Reprovado!');
}

//operador ternario
// é uma forma mais concisa de escrever um if-else, usando a sintaxe: condição ? expressão1 : expressão2
let numero = 10;
let resultado = (numero % 2 === 0) ? 'Par' : 'Ímpar';
console.log(resultado);