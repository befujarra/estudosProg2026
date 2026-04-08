class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.9 * 100 //transforma em centavos
    }
    get amount() {
        return this.#amount / 100
    }
    set amount(newAmount) {
        if(typeof newAmount === 'number') {
            this.#amount = newAmount * 100
        }
    }

    set username(newUsername) {
        this.#username = newUsername
    }
    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount)
myWallet.username = 'Vinicius'
console.log(myWallet.username)