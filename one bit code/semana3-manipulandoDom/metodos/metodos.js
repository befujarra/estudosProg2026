//aula sobre metodos
//metodos são funções que estão dentro de objetos

const pessoa = {
    nome: "João",
    idade: 20,  
    falar() {
        console.log("Olá, meu nome é " + this.nome);
    },
    aniversario() {
        this.idade++;
    },
    trabalhar() {
        console.log("Estou trabalhando...");
    }

};

pessoa.falar(); //chamando o metodo falar do objeto pessoa
pessoa.aniversario(); //chamando o metodo aniversario do objeto pessoa
console.log(pessoa.idade);
pessoa.trabalhar(); //chamando o metodo trabalhar do objeto pessoa