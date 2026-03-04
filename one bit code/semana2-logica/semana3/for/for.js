//aula sobre laço for
// o laço for é utilizado quando sabemos o número de vezes que queremos executar um bloco de código. Ele é composto por três partes: a inicialização, a condição e a atualização. A inicialização é executada apenas uma vez, no início do laço. A condição é verificada antes de cada iteração, e se for verdadeira, o bloco de código é executado. A atualização é executada após cada iteração, e geralmente é utilizada para atualizar a variável de controle do laço.

// exemplo de laço for que imprime os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// exemplo de laço for que imprime os números pares de 1 a 20
// o operador % é utilizado para verificar se um número é par ou ímpar. Se o resultado da divisão do número por 2 for igual a 0, então o número é par.
//como 4 é par, 4 % 2 = 0, então o número é par. Já o número 5 é ímpar, pois 5 % 2 = 1, ou seja, o resultado da divisão do número por 2 não é igual a 0, então o número é ímpar.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}   

// exemplo de laço for para iterar sobre um array
let frutas = ['maçã', 'banana', 'laranja', 'uva']
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//pode ser usado assim tambem para iterar sobre um array, usando o for of
for (let fruta of frutas) {
    console.log(fruta)
}
