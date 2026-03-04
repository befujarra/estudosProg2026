function register(element) {
const userName = element.children.username.value
const password = element.children.password.value
const passwordConfirmation = element.children.passwordConfirmation.value    

if (password === passwordConfirmation) {
    alert(`Usuário ${userName} registrado com sucesso!`)
} else {
    alert('As senhas não coincidem. Por favor, tente novamente.')
}

}