function addContact(){
    const contactsList = document.getElementById('contacts-list');
    const h3 = document.createElement('h3');
    h3.innerText = 'Novo contato';

    const ul = document.createElement('ul');
    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameInput.placeholder = 'Digite o nome...';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br'));

    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Telefone: ';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.placeholder = 'Digite o telefone...';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br'));

    const addressLi = document.createElement('li');
    addressLi.innerHTML = '<label for="address">Endereço: </label>';
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.id = 'address';
    addressInput.placeholder = 'Digite o endereço...';
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br'));

    contactsList.appendChild(h3);
    contactsList.appendChild(ul);

}


function removeContact(){
    const contactsList = document.getElementById('contacts-list');
    const lastContact = contactsList.lastElementChild;
    const lastContactTitle = lastContact.previousElementSibling;
    contactsList.removeChild(lastContactTitle);
    contactsList.removeChild(lastContact);  
}