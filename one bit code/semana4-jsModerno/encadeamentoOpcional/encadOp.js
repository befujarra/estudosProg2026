//aula sobre encadeamentoOpcional
//operador que permite ler propriedades
//de um objeto que podem ser nulas ou indefinidas
//sem causar erro

//?. é usado para ler propriedades de um objeto
//que podem ser nulas ou indefinidas
//sem causar erro

const user = {
    name: 'john Doe',
    email: 'doeJhon@gmail.com',
    friends: [{
        name: 'Mary',
        addresss: {
            street: 'some street',
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: '+55',
        ddd: '22',
        number: '999999999'
    }
}

// console.log(user.friends[0].phone.ddd);
console.log(user?.friends[0]?.phone?.ddd);
