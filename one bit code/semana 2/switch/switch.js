// aula de switch
//estrutura
// switch (expressão) {
//     case valor1:
//         // código a ser executado se a expressão for igual a valor1  
//         break;
//     case valor2:
//         // código a ser executado se a expressão for igual a valor2
//         break;
//     // você pode ter quantos casos quiser
//     default:
//         // código a ser executado se a expressão não corresponder a nenhum dos casos
//         break;
// }


//exemplo
let diaSemana = 3;
let nomeDia = '';
switch (diaSemana) {
    case 1:
        nomeDia = 'Domingo'; 
        break;
    case 2:
        nomeDia = 'Segunda-feira';
        break;
    case 3:
        nomeDia = 'Terça-feira';
        break;
    case 4:
        nomeDia = 'Quarta-feira';
        break;
    case 5:
        nomeDia = 'Quinta-feira';
        break;
    case 6:
        nomeDia = 'Sexta-feira';
        break;
    case 7:
        nomeDia = 'Sábado';
        break;
    default:
        nomeDia = 'Dia inválido';
        break;
}
console.log(`O dia da semana é: ${nomeDia}`);
