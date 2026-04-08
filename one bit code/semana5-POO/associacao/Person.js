// const Address = require("./Address")

// class Person {
//     constructor(name, street, number, neighborhood, city, state) {
//         this.name = name
//         this.address = new Address(street, number, neighborhood, city, state)
//     }
// }

// module.exports = Person

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}

module.exports = Person
//module.exports pois estamos usando require e export