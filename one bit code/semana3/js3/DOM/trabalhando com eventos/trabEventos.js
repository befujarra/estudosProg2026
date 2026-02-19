function register (event) {
    console.log('Evento:', event);
    const section = event.currentTarget.parentNode;
    const username = section.children.username.value;
    const password = section.children.password.value;
    const passwordConfirmation = section.children.passwordConfirmation.value;
  
    if (password !== passwordConfirmation) {
      alert('As senhas não coincidem!');
    }else {
      alert(`Usuário ${username} registrado com sucesso!`);
    }

}

const button = document.getElementById('register-button')

button.addEventListener('click', register);

function removeEvent() {
  button.removeEventListener('click', register);
  alert('Event Listener removido!');
}



// const button = document.getElementById('register-button');
// button.addEventListener('click', register); {
//   alert('Botão clicado!');
// };