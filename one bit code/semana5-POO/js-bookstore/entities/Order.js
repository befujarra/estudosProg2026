module.exports = class Order {
    #items
    #user
    #total
    constructor(items, user) {
        items.forEach(({product, quantity}) => {
            if(product.inStock < quantity) {    
                throw new Error('Produto fora de estoque')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0)
    }

   get data() {
    return {
        items: this.#items,
        user: this.#user,
        total: this.#total
    }
    }
}