//session storage
//forma simples de armazenar dados no navegador durante a navegação
//os dados são apagados quando a sessão é encerrada
//fica salvo enquanto a aba é aberta

//exemplo
document.getElementById("sessionBtn").addEventListener("click", function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('a informação é: ' + info)
})

//local storage
//dados armazenados no navegador que persistem mesmo apos fechar a aba do navegador
//existem para sempre ate serem removidos. Não possuem data de expiração

//exemplo

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const info = localStorage.getItem('info')
    alert('a informação é: ' + info)
})

//cookies
//cookies são pequenos arquivos de texto que são armazenados no navegador
//eles são enviados para o servidor a cada requisição
//podem ter data de expiração

//exemplo

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2026, 12, 31) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    document.cookie = 'info2=' + input.value
    input.value = ''
})
    