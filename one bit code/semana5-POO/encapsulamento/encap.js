class Account {
    #password
    #balance
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }


    getBalance(email, password) {
        if(this.#authenticate(email, password)){
            return this.#balance
        }else{
            return null
        }
    }   

    #authenticate(email, password) {
        if(this.email === email && this.#password === password){
            return true
        }else{
            return false
        }
    }
}

const user = {
    email: "vinicius@gmail.com",
    password: "1234"
}


const account = new Account(user)
console.log(account)
console.log(account.getBalance("vinicius@gmail.com", "1234"))