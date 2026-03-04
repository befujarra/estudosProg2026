const Address = require("./Address")
const Person = require("./Person")

//jeito 1
//desse jeito a classe Address esta sendo chamada dentro da classe Person usando o import
//const person = new Person("Vinicius", "7 de setembro", "123", "centro", "jacarei", "sao paulo"


//jeito 2
//desse jeito a classe Address esta sendo chamada dentro do proprio objeto person
// const person = new Person("Vinicius", new Address("7 de setembro", "123", "centro", "jacarei", "sao paulo"))
// console.log(person)
// console.log(person.address.fullAddress())

//jeito 3
//desse jeito a classe address esta sendo passada pro person, porem o person nao depende do address
const address = new Address("7 de setembro", "123", "centro", "jacarei", "sao paulo")
const person = new Person("Vinicius", address)
console.log(person)
console.log(person.address.fullAddress())