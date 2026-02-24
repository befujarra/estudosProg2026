//aula sobre restParams
//serve para passar varios parametros para uma função
//e transformar em um array

function sum(...numbers) {
    return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

console.log(sum(1, 2, 3, 4, 5));

//exemplo2

function sum2(firstnames, ...names) {
    return names.reduce((accumulator, names) => accumulator + names, firstnames);
}

console.log(sum2("firstnames", "names", "lastnames"));   