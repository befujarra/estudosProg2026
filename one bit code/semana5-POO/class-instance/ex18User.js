//criação da classe user
class User {
    constructor(fullname, email, password) {
        this.name = fullname
        this.email = email
        this.password = password
    }

    Login(){
        if(this.email === "[EMAIL_ADDRESS]" && this.password === "1234"){
            console.log("Login realizado com sucesso!")
        }else{
            console.log("Login falhou!")
        }
    }
}

const user = new User("Vinicius Souza", "[EMAIL_ADDRESS]", "1234")
user.Login()

