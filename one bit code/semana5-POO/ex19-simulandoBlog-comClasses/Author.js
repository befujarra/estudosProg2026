class Author {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.posts = []
    }

    addPost(post) {
        this.posts.push(post)
    }
}

module.exports = Author
//module.exports pois estamos usando require e export