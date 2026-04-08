//exercicio 20

//criar 4 classes

//class Component - deve conter atributo privado chamado element para guardar o elemento HTML
//metodo accessComponent que deve retornar o elemento HTML
//metodo buildComponent que deve criar o elemento HTML e atribuilo ao atributo privado element, mas tambem deve ser possivel chamalo novamente atraves da instancia
//metodo renderComponent que deve adicionar o elemento HTML ao DOM  que podera ser chamado pela instancia

//class InputField - deve herdar de Component
//class labelField - deve herdar de Component e deve ter em seu constructor um atributo que possa ser passado como argumento e seja atribuido como seu conteudo em texto
//class formField - deve herdar de Component e deve ter um metodo para add elementos como filho(através das instâncias das classes Component e suas subclasses).)


class Component {
    #element = null

    accessComponent() {
        return this.#element
    }
    buildComponent() {
        this.#element = document.createElement('div')
    }
    renderComponent() {
        document.body.appendChild(this.#element)
    }
}

class LabelField extends Component {
    constructor(label) {
        super()
        this.label = label
        this.buildComponent()
    }
    buildComponent() {
        super.buildComponent()
        this.accessComponent().textContent = this.label
    }
}

class InputField extends Component {
    constructor(placeholder = '') {
        super()
        this.placeholder = placeholder
    }
    buildComponent() {
        super.buildComponent()
        this.accessComponent().innerHTML = `<input type="text" placeholder="${this.placeholder}" />`
    }
}

class FormField extends Component {
    constructor() {
        super()
        this.buildComponent()
    }
    addElement(componentInstance) {
        this.accessComponent().appendChild(componentInstance.accessComponent())
    }
}

// Exemplo de uso
const label = new LabelField('Email')
label.renderComponent()

const inputField = new InputField('Digite seu email')
inputField.buildComponent()
inputField.renderComponent()

const form = new FormField()
const labelForm = new LabelField('Nome')
const inputForm = new InputField('Digite seu nome')
inputForm.buildComponent()
form.addElement(labelForm)
form.addElement(inputForm)
form.renderComponent()
