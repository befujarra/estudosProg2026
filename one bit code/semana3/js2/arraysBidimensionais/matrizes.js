//arrays bidimensionais

const matriz = ['a', 'b', 'c',
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9]]
]   

console.log(matriz[0]) //a
console.log(matriz[3]) //[1, 2, 3]

console.log(matriz[3][0]) //1
console.log(matriz[4][2]) //6
console.log(matriz[5][1]) //8

const matriz2 = [
    ['l1', 'l2', 'l3'],
    ['c1', 'c2', 'c3'],
    ['r1', 'r2', 'r3']
]

console.table(matriz2)
console.table(matriz)

// for (let i = 0; i < matriz2.length; i++) {
//     for (let j = 0; j < matriz2[i].length; j++) {
//         console.log(matriz2[i][j])
//     }
// }

for (let linha of matriz2) {
    for (let elemento of linha) {
        console.log(elemento)
    }
}

for (let linha of matriz) {
    for (let elemento of linha) {
        console.log(elemento)
        if (Array.isArray(elemento)) {
            for (let elemento2 of elemento) {
                console.log(elemento2)
            }
        }
    }
}
