//aula sobre objetos

//estrutura de dados para se trabalhar com chave valor
//chave - valor é uma propriedade do objeto
//chave é uma string e valor pode ser qualquer tipo de dado
//diferente do array seus elementos nao possuem sequencia
//criado por {} ou new Object()
//acesso as propriedades do objeto com . ou []
//adicionar, modificar ou remover propriedades do objeto
//iterar sobre as propriedades do objeto com for in


// let objeto = {}
// objeto.nome = "Frodo"
// objeto.idade = 50
// objeto.raca = "Hobbit"
// console.log(objeto)
// console.log(objeto.nome)
// console.log(objeto["idade"])

const pessoa = {
    nome: "vinicius",
    idade: 26,
    profissao: "programador",
    hobbies: ["jogar", "ler", "viajar"],
    endereco: {
        rua: "rua das flores",
        numero: 123,
        cidade: "são paulo",
        estado: "sp"
    }
}

//console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.hobbies)
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)
console.log(pessoa.endereco.cidade)
console.log(pessoa.endereco.estado)

//