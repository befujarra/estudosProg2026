// //programa que permite inserir o nome e a velocidade de dois veiculos e exiba na tela uma mensagem dizendo qual dos dois é mais rapido ou se as velocidades sao iguais se for o caso
// let nomeVeiculo1 = prompt("Insira o nome do primeiro veículo:");    
// let velocidadeVeiculo1 = parseFloat(prompt("Insira a velocidade do primeiro veículo (em km/h):"));

// let nomeVeiculo2 = prompt("Insira o nome do segundo veículo:");    
// let velocidadeVeiculo2 = parseFloat(prompt("Insira a velocidade do segundo veículo (em km/h):"));

// if (velocidadeVeiculo1 > velocidadeVeiculo2) {
//     console.log(`O veículo mais rápido é o ${nomeVeiculo1} com uma velocidade de ${velocidadeVeiculo1} km/h.`);
// } else if (velocidadeVeiculo2 > velocidadeVeiculo1) {
//     console.log(`O veículo mais rápido é o ${nomeVeiculo2} com uma velocidade de ${velocidadeVeiculo2} km/h.`);
// } else {
//     console.log(`Os dois veículos têm a mesma velocidade de ${velocidadeVeiculo1} km/h.`);
// }

//programa 2
//programa que permite inserir o nome e o poder de ataque de um personagem, depois o nome, quantidade de vida, poder de defesa e se possui escudo, entao calcule a quatidade de dano causado baseado em:
//se o poder de ataquie fopr maior que a defesa e o defensor nao tiver escudo, o dano causado sera igual a diferençã entre ataque e defesa
//se o poder de ataque for maior que a defesa e o defensor tiver um escudo, o dano causado sera igual a metade da diferençã entre ataque e a defesa.
//se o poder de ataque for menor ou igual a defesa, o dano causado sera 0

// o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens

let nomeAtacante = prompt("Insira o nome do personagem atacante:");
let poderAtaque = parseFloat(prompt("Insira o poder de ataque do personagem atacante:"));

let nomeDefensor = prompt("Insira o nome do personagem defensor:");
let quantidadeVida = parseFloat(prompt("Insira a quantidade de vida do personagem defensor:"));
let poderDefesa = parseFloat(prompt("Insira o poder de defesa do personagem defensor:"));
let possuiEscudoInput = prompt("O personagem defensor possui escudo? (sim/não):");
let possuiEscudo = possuiEscudoInput.toLowerCase() === 'sim';

let danoCausado = 0;
if (poderAtaque > poderDefesa) {    
    if (possuiEscudo) {        
        danoCausado = (poderAtaque - poderDefesa) / 2;    
    } else {        
        danoCausado = poderAtaque - poderDefesa;    
    }
} else {    
    danoCausado = 0;
}
quantidadeVida -= danoCausado;

console.log(`O personagem ${nomeAtacante} causou ${danoCausado} de dano ao personagem ${nomeDefensor}.`);
console.log(`Informações atualizadas do personagem defensor: Nome: ${nomeDefensor}, Quantidade de Vida: ${quantidadeVida}, Poder de Defesa: ${poderDefesa}, Possui Escudo: ${possuiEscudo ? 'Sim' : 'Não'}.`);

