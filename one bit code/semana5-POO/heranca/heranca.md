aula sobre heraça


herança em POO é atribuir uma relacionamento de herança de umna classe para outra

a classe pai permite que a classe filha tenha algo dela

a classe filha fica com dependencia da classe pai

toda alteração na classe pai, se for alterado a herança da filha, influencia na classe na filha



classe super é a classe pai


a classe filha pode herdar, e ainda ter mais atributos proprios


a tag super é usada dentro da classe filha
pois a classe filha ´precisa passar todos os atributos da classe pai, pra isso usa-se o super(atributos)

para uma classe herdar de outra
ClassFilha extends ClassePai {}

ClassFilha {
    constructor (propsFilha){
    super(propsPai)
    this.propsFilha
    }

    metodosFilha()
}

const newClassFilha = new ClassFilha("12A", 100, 100000)