//aula sobre função
//função é um bloco de código que pode ser reutilizado, e que pode receber parâmetros e retornar um valor
//função sem parâmetros e sem retorno
//entrada -> processamento -> saída
//pode ser somente com processamento, ou seja, sem entrada e sem saída

// function saudacao() {
//     alert("Olá, seja bem-vindo!")
// }
// saudacao()

// //função com parâmetros e sem retorno
// function saudacaoPersonalizada(nome) {
//     alert(`Olá, ${nome}, seja bem-vindo!`)
// }
// saudacaoPersonalizada("João")

// //função com parâmetros e com retorno
// function soma(a, b) {
//     return a + b
// }
// const resultado = soma(10, 20)
// alert(resultado)

//função com parâmetro padrão

// function dizerOlaPara(nome = "usuário") {
//     return `Olá, ${nome}!`
// }
// const mensagem = dizerOlaPara()
// alert(mensagem)

function calcularMedia (a, b) {
    const media = (a + b) / 2
    return media
}
const media = calcularMedia(10, 20)
alert(media)


function reusoDeVariaveis(media) {
    alert(`A média é ${media}`)
}
reusoDeVariaveis(media)

//