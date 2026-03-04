const dayjs = require('dayjs');

const dataNascimento = '1994-04-25'

console.log(dayjs(dataNascimento).format('DD/MM/YYYY'))

//idade atual
const dataAtual = dayjs()
const idade = dataAtual.diff(dataNascimento, 'year')
console.log(`idade: ${idade}`)


//proximo aniversario
const proximoAniversario = dayjs(dataNascimento).add(idade + 1, 'year')
console.log(`proximo aniversario: ${proximoAniversario.format('DD/MM/YYYY')}`)

//dias para o proximo aniversario
const diasParaOProximoAniversario = proximoAniversario.diff(dataAtual, 'day')
console.log(`dias para o proximo aniversario: ${diasParaOProximoAniversario}`)  

