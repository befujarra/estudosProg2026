let pessoa = {
    nome: 'karina',
    idade: 27,
    profissao: 'analista de ecomerce',
    saudacao: function() {
        console.log('olá, meu nome é ' + this.nome + ', tenho ' + this.idade + ' anos e trabalho como ' + this.profissao + '.');
    }
}
console.log(pessoa);
pessoa.saudacao();
//metodo é uma função que está dentro de um objeto.
//this faz referencia ao proprio objeto.