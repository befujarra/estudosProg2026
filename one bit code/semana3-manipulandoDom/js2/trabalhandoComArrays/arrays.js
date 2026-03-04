//aula trabalhando com arrays
//

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
//push - adiciona um elemento no final do array
arr.push("Boromir")
console.log(arr)
//pop - remove um elemento do final do array
arr.pop()
console.log(arr)
//unshift - adiciona um elemento no início do array
arr.unshift("Boromir")
console.log(arr)
//shift - remove um elemento do início do array
arr.shift()
console.log(arr)
let inicio = arr.shift()
console.log(inicio)
console.log(arr)

//includes - verifica se um elemento existe no array
console.log(arr.includes("Gandalf"))

//indexOf - retorna o índice de um elemento no array
console.log(arr.indexOf("Gandalf")) 

//slice - retorna uma parte do array
console.log(arr.slice(0, 4)) //retorna os elementos do índice 0 ao 3
console.log(arr.slice(4)) //retorna os elementos do índice 4 em diante

//concat - concatena dois ou mais arrays
const arr2 = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
const arr3 = arr.concat(arr2, 'Boromir')
console.log(arr3)

//splice - remove ou substitui elementos do array
arr.splice(2, 1) //remove o elemento do índice 2
console.log(arr)
arr.splice(2, 0, "Boromir") //adiciona o elemento "Boromir" no índice 2
console.log(arr)

// iterar sobre um array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// ou com of 
for (let elemento of arr) {
    console.log(elemento)
}