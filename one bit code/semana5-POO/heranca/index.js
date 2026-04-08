//herança

class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property {}
    

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Property)


class Apartment extends Property {
    constructor(num, area, price){
        super(area, price)
        this.num = num
    }
    getFloor(){
        return `Andar ${this.num.slice(0, -2)}`
    }
}

const apartment = new Apartment("12A", 100, 100000)
console.log(apartment)
console.log(apartment.getFloor())
console.log(apartment instanceof Property)
console.log(apartment instanceof House)