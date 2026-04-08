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


//um objeto é criado em forma de objeto literal se for de uso unico, se for de uso repetitivo, é melhor usar a classe
//pois a classe é uma forma de criar um padrão de objeto
//ou function constructor que é uma forma de criar um padrão de objeto



//a instancia é criada usando a palavra reservada new, onde se cria um novo objeto a partir da classe

//o this é uma palavra reservada que referencia o objeto atual
