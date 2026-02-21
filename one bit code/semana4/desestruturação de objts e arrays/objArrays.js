// aula sobre desestrutuiração de objetos e arrays

//funcionalidade que permite criar variaveis a partir de uma propriedade de um objetop ou elemento de array
//no caso das propriedades do objeto, as variaveis serao criadas com o mesmo nome da propriedade
//no caso do elementos do array, podemos atribuir qualquer nome para avariavel

//tambem pode ser utilizado de outras formas, como nos parametros de uma function
//exemplo
// const {name, email} = personal
// const [x, y] = cordinates

// function hello ({name}){
//     console.log(`Hello ${name}`)
// }

// hello(personal)

const person = {
    name: 'luke',
    job: 'farmer',
    parents: ['anakin', 'padme']
}

const name = person.name
const {job, parents} = person

console.log(person.name)
console.log(job, parents)

const [father, mother] = parents

console.log(father, mother)

//exemplo 2
function createUser(person){
const id = Math.floor(Math.random() * 9999) 
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

const user = createUser(person)

console.log(user)

//exemplo 3
function createUser({name, job, parents}){
const id = Math.floor(Math.random() * 9999) 
    return {
        id,
        name,
        job,
        parents
    }
}

const user2 = createUser(person)

console.log(user)
