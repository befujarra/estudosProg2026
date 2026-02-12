//aula sobre hof - higher order functions
//função de ordem superior é aquela que recebe outra função como argumento ou retorna uma função como resultado
//função de ordem superior é muito utilizada em programação funcional, onde as funções são tratadas como cidadãos de primeira classe

//exemplo de função de ordem superior que recebe outra função como argumento    
function calcular(a, b, operacao) {
    return operacao(a, b);
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

console.log(calcular(5, 3, somar)); // 8
console.log(calcular(5, 3, subtrair)); // 2