// function execute() {
//     return new Promise((resolve, reject) => {
//         console.log('A promisse está sendo executada');
//         setTimeout(() => {
//             console.log('A promisse está sendo resolvida');
//             resolve('Resultado da promisse');
//         }, 1000 * 2);
//     });
// }




// execute().then((result) => {
//     console.log(`A promisse foi resolvida com sucesso: ${result}`);


// }).catch((error) => {
//     console.log(`A promisse foi rejeitada com erro: ${error}`);
// }).finally(() => {
//     console.log('A promisse foi finalizada');
// });



    function imcCalculator(weight, height) {
    return new Promise((resolve, reject) => {
        if (isNaN(weight) || isNaN(height)) {
            reject('Invalid weight or height');
        }
        const imc = weight / (height * height);
        resolve(imc);
    });
}



    function main() {
        imcCalculator(80, 1.8).then((imc) => {

            console.log(`seu IMC é: ${Math.round(imc)}`);
            if (imc < 18.5) {
                console.log('Situação: MAGREZA');
            } else if (imc >= 18.5 && imc <= 24.9) {
                console.log('Situação: NORMAL');
            } else if (imc >= 25 && imc <= 29.9) {
                console.log('Situação: SOBREPESO');
            } else {
                console.log('Situação: OBESIDADE');
            }
        }).catch((error) => {
            console.log(`Erro: ${error}`);
        }).finally(() => {
            console.log('A promisse foi finalizada');
        });
}

main();