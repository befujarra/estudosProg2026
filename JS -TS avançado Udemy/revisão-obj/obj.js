// //obj formado por chaves e valores

// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Silva'
// }
// //obj pessoa
// //chave nome, valor joao
// //chave sobrenome, valor silva

// //visualizar o obj pessoa
// console.log(pessoa)
// //se quiser so a chave nome
// console.log(pessoa.nome)
// //se quiser so a chave sobrenome
// console.log(pessoa.sobrenome)
// //se quiser so a chave nome e sobrenome
// console.log(pessoa.nome, pessoa.sobrenome)

// console.log(pessoa['nome'], pessoa['sobrenome'])

//exemplo sem o literal

const pessoa2 = new Object();
pessoa2.nome = 'roberto';
pessoa2.sobrenome = 'carlos';
pessoa2.idade = 26;
pessoa2.falarNome = function() {
    console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}`)
}

console.log(pessoa2)
console.log(pessoa2.falarNome())

pessoa2.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}
console.log(pessoa2.getDataNascimento())

for (const key in pessoa2) {
    console.log(key, pessoa2[key])
}