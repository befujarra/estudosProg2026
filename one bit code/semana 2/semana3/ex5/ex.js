//programa com menuinterativo com 5 opções diferentes.
//mostra 5 opçoes disponiveis para o usuario escolher, e cada opção tem uma função diferente.
// 1 - mostrar a data atual
// 2 - mostrar a hora atual
// 3 - mostrar o nome do usuário
// 4 - mostrar o sistema operacional
// 5 - sair do programa
// o programa deve continuar rodando até que o usuário escolha a opção 5 para sair do programa. 

// usar do while, switch case e prompt para receber a opção do usuário.

// let opcao = 0

// do {
//     opcao = parseInt(prompt('Escolha uma opção:\n1 - Mostrar a data atual\n2 - Mostrar a hora atual\n3 - Mostrar o nome do usuário\n4 - Mostrar o sistema operacional\n5 - Sair do programa'))                                  
//     switch (opcao) {  
//         case 1:
//             console.log(`A data atual é: ${new Date().toLocaleDateString()}`)
//             break
//         case 2:
//             console.log(`A hora atual é: ${new Date().toLocaleTimeString()}`)
//             break
//         case 3:
//             console.log(`O nome do usuário é: ${prompt('Qual é o seu nome?')}`)
//             break
//         case 4:
//             console.log(`O sistema operacional é: ${navigator.userAgent}`)
//             break
//         case 5:
//             console.log('Saindo do programa...')
//             break
//         default:
//             console.log('Opção inválida')
//             break
//     }
// } while (opcao !== 5)




//perguntar quantidade inicial de dinheiro
//mostrar na tela a quantidade e opçoes de adicionar, remover e sair
//se adicionar, perguntar o valor e fazer a soma, ao mostrar o menunnovamente deve atualizar o montante, 
//ao remover deve fazer o mesmo processo, mas subtraindo o valor, e ao sair deve mostrar o valor final do montante.

// let montante = parseFloat(prompt('Digite a quantidade inicial de dinheiro:'))
// let opcao = 0   
// do {
//     opcao = parseInt(prompt(`Montante atual: R$ ${montante.toFixed(2)}\nEscolha uma opção:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair do programa`))   
//     switch (opcao) {
//         case 1:
//             let valor = parseFloat(prompt('Digite o valor a ser adicionado:'))
//             montante += valor
//             break
//         case 2:
//             let valor1 = parseFloat(prompt('Digite o valor a ser removido:'))
//             montante -= valor1
//             break
//         case 3:
//             console.log(`Saindo do programa... Montante final: R$ ${montante.toFixed(2)}`)
//             break
//         default:
//             console.log('Opção inválida')
//             break
//     }
// } while (opcao !== 3)
