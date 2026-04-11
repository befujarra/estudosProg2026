// //pendente = pending
// //resolvida = resolved
// //rejeitada = rejected

// const p = new Promise((resolve, reject)=>{

//     console.log('Executando a promise');
//     setTimeout(()=>{
//         console.log('Promise resolvida com sucesso');
//         resolve(true);
//     }, 2000 * 2);
//     setTimeout(()=>{
//         console.log('Promise rejeitada');
//         reject(false);
//     }, 2000 * 2);
// });

// p.then((result)=>{
//     console.log(result);
//     console.log('Promise resolvida com sucesso');
// }).catch((error)=>{
//     console.log(error);
//     console.log('Promise rejeitada');
// });

function executePromise() {
    //code
    return new Promise((resolve, reject)=>{
        console.log('Executando a promise');
        setTimeout(()=>{
            resolve('Promise resolvida com sucesso');
        }, 2000 * 2);
    });
}

const p = executePromise();
console.log(p);