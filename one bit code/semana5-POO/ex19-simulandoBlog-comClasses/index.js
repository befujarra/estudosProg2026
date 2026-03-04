//Simulando um Blog com classes - modularizado
//precisamos de classes para:
//Author importado
const Author = require("./Author")
//Post importado
const Post = require("./Post")
//Comentario importado
const Comment = require("./Comment")

//criando um autor
const author = new Author("Vinicius", "[EMAIL_ADDRESS]")

//criando um post
const post = new Post("Meu primeiro post", "Este é o conteúdo do meu primeiro post", author)

//criando um comentario
const comment = new Comment("Este é um comentario", author)

//adicionando um comentario ao post
post.addComment(comment)

//adicionando um post ao autor
author.addPost(post)

//exibindo o post
post.showPost()