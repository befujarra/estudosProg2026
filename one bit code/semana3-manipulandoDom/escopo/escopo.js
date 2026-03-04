//aula sobre escopo
//escopo é o contexto onde as variáveis e funções são acessíveis
//escopo global: variáveis e funções declaradas fora de qualquer função ou bloco de código, são acessíveis em todo o programa
//escopo local: variáveis e funções declaradas dentro de uma função ou bloco de código, são acessíveis apenas dentro desse contexto
//variáveis declaradas com var, let e const têm escopo diferente
//variáveis declaradas com var têm escopo global ou de função, ou seja, são acessíveis em todo o programa ou dentro da função onde foram declaradas
//variáveis declaradas com let e const têm escopo de bloco, ou seja, são acessíveis apenas dentro do bloco onde foram declaradas    

//exemplo de escopo global
// const nome = "João"
// function saudacao() {
//     alert(`Olá, ${nome}, seja bem-vindo!`)       
// }
// saudacao()

//exemplo de escopo de função
// function saudacao() {
//     const nome = "João"
//     alert(`Olá, ${nome}, seja bem-vindo!`)       
// }
// saudacao()

//exemplo de escopo de bloco
// if (true) {
//     const nome = "João"
//     alert(`Olá, ${nome}, seja bem-vindo!`)       
// }
// alert(nome) //erro, nome is not defined  



//