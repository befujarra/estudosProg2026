class Book {
    constructor(title) {
        this.title = title
        this.publisher = false
    }

    publish() {
        this.publisher = true
    }
}

const book = new Book("O Senhor dos Anéis")
const book2 = new Book("O Senhor dos Anéis 2")
book2.publish()

console.log(book)
console.log(book2)