//cadastro de imovel
//menu interativo deve mostrar as opções ate o usuario escolher sair
//opção salvar imovel, o programa deve pedir nome do proprietario, quantidade de quartos, quantidade de banehiros, e se possui garagem, e salvar essas informações em um objeto
//opção listar imoveis, o programa deve mostrar os imoveis cadastrados com as informações do proprietario, quantidade de quartos, quantidade de banheiros e se possui garagem
//sair

let imoveis = []
let opcao = ""

do {
    opcao = prompt(`Escolha uma opção:
1 - Salvar imóvel
2 - Listar imóveis
3 - Sair`)
    switch (opcao) {
        case "1": 
            const nomeProprietario = prompt("Digite o nome do proprietário:")   
            const quantidadeQuartos = prompt("Digite a quantidade de quartos:")
            const quantidadeBanheiros = prompt("Digite a quantidade de banheiros:")
            const possuiGaragem = prompt("O imóvel possui garagem? (sim/não)")
            const imovel = {
                nomeProprietario,
                quantidadeQuartos,
                quantidadeBanheiros,
                possuiGaragem
            }
            imoveis.push(imovel)
            alert("Imóvel salvo com sucesso")
            break
        case "2":
            alert("Lista de imóveis:")
            imoveis.forEach((imovel, index) => {
                alert(`Imóvel ${index + 1}:
Proprietário: ${imovel.nomeProprietario}
Quartos: ${imovel.quantidadeQuartos}
Banheiros: ${imovel.quantidadeBanheiros}
Garagem: ${imovel.possuiGaragem}`)
            })
            break
        case "3":
            alert("Saindo do programa")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "3")
    1
    