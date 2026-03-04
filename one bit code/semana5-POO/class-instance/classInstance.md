classes em POO

class é como uma fabrica de objetos

com ela voce cria um padrao e uma estrutura pronta

instancia é o objeto criado a partir da classe

exemplo de classe

class Book {
    constructor(title) {
        this.title = title
        this.publisher = false
    }

    publish() {
        this.publisher = true
    }
}

note que a classe é so um modelo, ela nao faz nada sozinha

a instancia é criada usando a palavra reservada new
entao com o exemplo abaixo criamos duas instancias da classe Book, são livros diferentes mas são livros

const book = new Book("O Senhor dos Anéis")
const book2 = new Book("O Senhor dos Anéis 2")

note que o book2 esta publicado pois esta chamando o metodo publish() criado na classe
book2.publish()

console.log(book)
console.log(book2)