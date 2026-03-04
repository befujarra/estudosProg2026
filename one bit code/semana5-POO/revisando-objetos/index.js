// //objetos
// //estrutura chave e valor

// const book = {
//     title: 'Clean Code',
//     author: 'Robert C. Martin',
//     pages: 464,
//     publisher: {
//         name: 'Prentice Hall',
//         location: 'New York'
//     },
//     addPages(pages) {
//         this.pages += pages
//     },
//     save: function() {
//         console.log('Salvando o livro')
//     }
// }

// console.log(`O livro ${book.title} tem ${book.pages} páginas. e foi publicado pela ${book.publisher.name} em ${book.publisher.location}`)
// book.addPages(10)
// console.log(`O livro ${book.title} tem ${book.pages} páginas.`)
// book.save()


//function constructor
//nome da funcção construtor é PascalCase - primeira letra maiúscula
function Book(title, author, pages, publisher) {
    this.title = title
    this.author = author
    this.pages = pages
    this.publisher = publisher
    this.addPages = function(pages) {
        this.pages += pages
    }
    this.save = function() {
        console.log('Salvando o livro')
    }
}

const book = new Book('Clean Code', 'Robert C. Martin', 464, 'Prentice Hall')
console.log(book)
