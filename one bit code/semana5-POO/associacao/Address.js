class Address {
    constructor(street, number, neighborhood, city, state) {
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    fullAddress() {
        return `Rua ${this.street}, número  ${this.number}, bairro ${this.neighborhood}, cidade ${this.city}/${this.state}`
    }
}

module.exports = Address
//module.exports pois estamos usando require e export