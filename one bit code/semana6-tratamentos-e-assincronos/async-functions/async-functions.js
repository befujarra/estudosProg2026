// async function asyncSum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return Promise.reject('arguments must be of type number')
//     } else {
//         return Promise.resolve(a + b)
//     }
// }

// async function asyncSubtract(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return Promise.reject('arguments must be of type number')
//     } else {
//         return Promise.resolve(a - b)
//     }
// }

// const sumResult = asyncSum(50, 33)
// const subtractResult = asyncSubtract(50, 33)

// //Promise.all é usado para executar varias promisses de forma assincrona
// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

//-----------------------------------------------------------------------------------------------------------------
const numbers = [4, 9, 5, 13, 77]

 async function asyncSquare(x) {
    if (typeof x !== 'number') {
        return Promise.reject('arguments must be of type number')
    } else {
        return Promise.resolve(x * x)
    }
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(error => {
    console.log(error)
})

