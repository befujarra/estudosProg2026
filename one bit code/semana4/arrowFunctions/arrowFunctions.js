//aula sobre arrow functions
//uma forma mais curta de escrever funções
//utiliza => em vez de function
//não tem this
//não tem arguments
//não tem prototype
//não tem construtor

//exemplo
// const sum = function(a, b) {
//     return a + b
// }

// const sum1 = (a, b) => a + b

// const soma = (a, b) => a + b
// console.log(`soma com arrow function: ${soma(1, 2)}`)

// //exemplo 2

// const subtracao = (a, b) => a - b
// console.log(`subtracao com arrow function: ${subtracao(1, 2)}`)

// //exemplo 3

// const multiplicacao = (a, b) => a * b
// console.log(`multiplicacao com arrow function: ${multiplicacao(1, 2)}`)

// //exemplo 4

// const divisao = (a, b) => a / b
// console.log(`divisao com arrow function: ${divisao(1, 2)}`)

function normalSum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

console.log(`soma com função normal: ${normalSum(1, 2)}`)
console.log(`soma com arrow function: ${arrowSum(1, 2)}`)

const subtracao = (a, b) => a - b

console.log(`subtracao com arrow function inline: ${subtracao(1, 2)}`)

const double = n => `double com arrow function inline: ${n * 2}`

console.log(double(10))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town.startsWith('P'))

console.log(startingWithP)