function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}


getAge('2015-01-01').then((age) => {
    console.log(`Você tem ${age} anos de idade`);
    return checkAge(age);
}).then((isAdult) => {
    console.log(isAdult ? 'Você é maior de idade' : 'Você é menor de idade')
}).catch((error) => {
    console.log(error)
})