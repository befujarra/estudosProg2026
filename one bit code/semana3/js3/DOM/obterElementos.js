//aula para trabalhar com o DOM obtendo elementos do html
//para obter um elemento do html, podemos usar o método 





function show(){
    //document.getElementById() passando o id do elemento como argumento
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    //document.getElementsByTagName() passando a tag do elemento como argumento
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    //document.getElementsByClassName() passando a classe do elemento como argumento
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    //document.getElementsByName() passando o nome do elemento como argumento
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //document.querySelectorAll() passando um seletor CSS como argumento, retorna uma NodeList com todos os elementos que correspondem ao seletor
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)   

    //document.querySelector() passando um seletor CSS como argumento
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}   

