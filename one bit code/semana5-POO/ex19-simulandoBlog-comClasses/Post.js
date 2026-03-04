class Post {
    constructor(title, content, author) {
        this.title = title
        this.content = content
        this.author = author
        this.comments = []
    }

    addComment(comment) {
        this.comments.push(comment)
    }

    showPost() {
        console.log(`Titulo: ${this.title}, Conteudo: ${this.content}, Autor: ${this.author.name}, Comentarios: ${this.comments[0].content}, Autor do comentario: ${this.comments[0].author.name}`)
    }
}

module.exports = Post
//module.exports pois estamos usando require e export

