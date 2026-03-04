const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//map
//map serve para transformar o array original em outro array

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

// console.log(nomes)

// const nomes = personagens.map(function (personagem) {
//     return personagem.nome
// })

// console.log(nomes)

//filter
//filter serve para filtrar o array original, retornando um novo array com os elementos que passaram no teste   

// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         orcs.push(personagens[i])
//     }
// }

// console.log(orcs)

// const orcs = personagens.filter(function (personagem) {
//     return personagem.raca === "Orc"
// })

// console.log(orcs)

//reduce
//reduce serve para reduzir o array original a um único valor, seja ele um número, string, objeto, etc

// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//     nivelTotal += personagens[i].nivel
// }

// console.log(nivelTotal)
    




// const nivelTotal = personagens.reduce(function (acumulador, personagem) {
//     return acumulador + personagem.nivel
// }, 0)

// console.log(nivelTotal)

// const racas = personagens.reduce(function (acumulador, personagem) {
//     if (acumulador[personagem.raca]) {
//         acumulador[personagem.raca].push(personagem)
//     } else {
//         acumulador[personagem.raca] = [personagem]
//     }
//     return acumulador
// }, {})

// console.log(racas)

// personagens.sort(function (a, b) {
//    return a.nivel - b.nivel
// })  

// console.log(personagens)

const personagensOrdenados = personagens.slice().sort(function (a, b) {
   return a.nivel - b.nivel
})  

console.log(personagens)
console.log(personagensOrdenados)