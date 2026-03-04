// // exercicio 14
// // usar os conhecimentos de JS modernos aprendido nas aulas
// // criar 4 funcções que aceitam qualquer quantidade de parametros utilizando arrowfunction

// // Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.

// //meu ex
// //  const mediaAritmetica = (...nums) => {
// //   const soma = nums.reduce((acc, num) => acc + num, 0)
// //     return media = soma / nums.length
// //  }

// //  console.log(mediaAritmetica(2, 6, 3, 7, 4))  

// // //correção
// // const average = (...numbers) => {
// //   const sum = numbers.reduce((acc, num) => acc + num, 0)
// //   return sum / numbers.length
// // }
// // console.log(`a media é ${average(2, 6, 3, 7, 4)}`)



//  //  mediaAritmetica Ponderada 
//  //meu ex
// // const pesos = [2, 5, 1]
// // const notas = [7, 9, 3]

// // const mediaPonderada = (pesos,...notas) => {
// //  //notas
// // const [notasSeparadas] = notas
// //  const [nota1, nota2, nota3] = notasSeparadas
// // //pesos
// //  const [peso1, peso2, peso3] = pesos
// //  //soma
// //  const soma = nota1 * peso1 + nota2 * peso2 + nota3 * peso3
// //  //soma dos pesos
// //  const somaPesos = peso1 + peso2 + peso3
// //  //media ponderada
// //     const result = soma / somaPesos
// // return result
// // }   

// // console.log(mediaPonderada(pesos, notas))
  
// // //correção
// // const weightedAverage = (...entries) => {
// //   const sum = entries.reduce((acc, { number, weight }) => acc + (number * (weight ?? 1)), 0)
// //   const weightSum = entries.reduce((acc, entries ) => acc + (entries.weight ?? 1), 0)
// //   return sum / weightSum
// // }
// // console.log(`a media ponderada é ${weightedAverage(
// //   {number: 7, weight: 2},
// //    {number: 9, weight: 5},
// //    {number: 3, weight: 1}
// //   )}`)


// // Mediana
// // é o valor que está no meio de um conjunto de dados ordenados
// // se o conjunto de dados for par, a mediana é a média dos dois valores centrais
// // se o conjunto de dados for impar, a mediana é o valor central

// //exemplo
// //meu ex
// const numeros = [1, 2, 3, 4, 5]
//  const mediana = numeros[Math.floor(numeros.length / 2)]
//  console.log(mediana)

// //exemplo 2
//  const numeros3 = [1, 2, 3, 4, 5, 6, 9, 10]
//  const mediana3 = (numeros3[numeros3.length / 2 - 1] + numeros3[numeros3.length / 2]) / 2
//  console.log(mediana3) 

//  //exemplo3 - validando se o array é par ou impar com if para obter resultado idependente do numero de elementos
//  const numeros4 = [1, 2, 3, 4, 5, 6, 9, 10, 11, 82, 12]
//     if (numeros4.length % 2 === 0) {
//         const mediana4 = (numeros4[numeros4.length / 2 - 1] + numeros4[numeros4.length / 2]) / 2
//         console.log(mediana4)
//     } else {
//         const mediana4 = numeros4[Math.floor(numeros4.length / 2)]
//         console.log(mediana4)
//     }


// //correção
// const median = (...numbers) => {
//   const orderedNums = [...numbers].sort((a, b) => a - b)
//   const middle = Math.floor(orderedNums.length / 2)
//   if (orderedNums.length % 2 !== 0) {
//     return orderedNums[middle]
//   } else {
//     const firstmedian = orderedNums[middle - 1]
//     const secondmedian = orderedNums[middle]
//     return average(firstmedian, secondmedian)
//   }
// }
// console.log(`a mediana é ${median(1, 2, 3, 4, 5)}`)



// const mode = (...numbers) => {
//   const quantities = numbers.map(num => [
//     num,
//     numbers.filter(n => num === n).length
//   ])
//   quantities.sort((a, b) => b[1] - a[1])
//   return quantities[0][0]
// }

// console.log(`a moda é ${mode(1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 2, 2, 2, 2, 2)}`)


// // moda 
// // numero que mais se repete em um conjunto de dados
// // exemplo
// const numeros = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 2, 2, 2, 2, 2]

// const moda = (...numeros) => {
//   //validar qual numero mais se repete no array e exibir somento o numero que mais se repete como resultado
//   const [numerosSeparados] = numeros
//   const numerosOrdenados = numerosSeparados.sort((a, b) => a - b)
//   const numerosContados = numerosOrdenados.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1
//     return acc
//   }, {})
//   const moda = Object.entries(numerosContados).reduce((acc, [num, count]) => {
//     if (count > acc[1]) {
//       return [num, count]
//     }
//     return acc
//   }, ["", 0])
  
//   console.log(`O numero ${moda[0]} é o mais frequente com ${moda[1]} ocorrências`)
// }

// moda(numeros)
  