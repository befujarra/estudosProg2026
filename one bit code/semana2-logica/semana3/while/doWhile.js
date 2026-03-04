//aula sobnre Do while
// semelhante ao while, mas a diferença é que o do while executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa. Depois disso, ele verifica a condição e continua executando o bloco de código enquanto a condição for verdadeira.
let velocidade = 80
do {
    console.log(`A velocidade do carro é ${velocidade} km/h`)
    velocidade -= 20
} while (velocidade > 0)
console.log('O carro parou')

