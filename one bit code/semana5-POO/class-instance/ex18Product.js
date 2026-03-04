//criando class Product
class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(qtd){
        this.inStock += qtd
    }

    calculateDiscount(discount){
        return this.price - (this.price * discount / 100)
    }
}

const product = new Product("Notebook", "Notebook gamer", 5000)
product.addToStock(10)
console.log(product)
console.log(`O preço com desconto de 10% é: R$ ${product.calculateDiscount(10)}`)