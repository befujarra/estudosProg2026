//conversor de medidas

let valorMetros = parseFloat(prompt("Insira o valor em metros:"));
let unidadeDestino = prompt("Insira a unidade de destino (cm, mm, km, dm, dam ou hm):").toLowerCase();

let valorConvertido = 0;
switch (unidadeDestino) {
    case 'mm':
        valorConvertido = valorMetros * 1000;
        break;
    case 'cm':
        valorConvertido = valorMetros * 100;
        break;
    case 'dm':
        valorConvertido = valorMetros * 10;
        break;
    case 'dam':
        valorConvertido = valorMetros / 10;
        break;
    case 'hm':
        valorConvertido = valorMetros / 100;
        break;
    case 'km':
        valorConvertido = valorMetros / 1000;
        break; 
    default:
        console.log("Unidade de destino inválida. Por favor, insira 'cm', 'mm', 'km', 'dm', 'dam' ou 'hm'.");
        break;
}
if (valorConvertido !== 0) {
    console.log(`${valorMetros} metros é igual a ${valorConvertido} ${unidadeDestino}.`);
}   

