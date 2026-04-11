console.log('Início do programa');

 const timeoutId = setTimeout(() => {
    console.log('Passaram 2 segundos');
}, 2000 * 2);


// clearTimeout(timeoutId);

let seconds = 0;
const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`Passaram ${seconds} segundos`);
}, 1000 * 3);

clearInterval(intervalId);