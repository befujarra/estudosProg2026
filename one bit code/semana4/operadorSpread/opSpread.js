//aula sobre operadorSpread
//serve para espalhar os elementos de um array
//e transformar em um array ou objeto
//é usado para clonar arrays e objetos
//é usado para adicionar elementos a arrays e objetos
//é usado para remover elementos de arrays e objetos

const towns = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
console.log(towns)
console.log(...towns);
console.log(...towns[0])

const townsCopy = towns;
townsCopy.pop();
townsCopy.pop();
townsCopy.push("Salvador");

console.log({ towns, townsCopy });

const townsClone2 = [...towns];
townsClone2.push("Recife");

console.log({ towns, townsCopy, townsClone2 });

const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test = "test";

console.log({ townsObj, townsObjClone });