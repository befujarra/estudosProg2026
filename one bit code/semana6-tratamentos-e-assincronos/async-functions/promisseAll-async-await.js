function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 9, 5, 13, 77]


async function execute() {
    console.time('Promise.all')
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2);
        return number * number;
    }))
    console.log(squares)
    console.timeEnd('Promise.all')
}

execute()



// const squares = numbers.map(async (number) => {
//     await waitFor(2);
//     return number * number;
// })

// console.log(squares)
// Promise.all(squares).then(results => {
//     console.log(results)
// })