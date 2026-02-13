//Sistema de Vagas de Emprego
//programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas.

//Requisitos//
///Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair
//Listar vagas disponíveis
//Criar uma nova vaga
//Visualizar uma vaga
//Inscrever um candidato em uma vaga
//Excluir uma vaga
//Sair

//A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
//A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
//A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
//A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
//A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

let opcao = ""

const vagas = []    

do {
    opcao = prompt(
        "Sistema de Vagas de Emprego\n" +   
        "Escolha uma opção:\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    )   
    switch (opcao) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga() 
            break
        case "3":
            visualizarVaga()    
            break
        case "4":            inscreverCandidato()    
            break   
        case "5":            excluirVaga()    
            break   
        case "6":            alert("Saindo...")    
            break   
        default:            alert("Opção inválida")    
    }   
} while (opcao !== "6")

function listarVagas() {
    if (vagas.length === 0) {
        alert("Não há vagas disponíveis.")
    } else {
        const vagasTexto = vagas.map((vaga, index) => {
            return `${index}. ${vaga.nome} (${vaga.candidatos.length} candidatos)`
        }).join("\n")
        alert(vagasTexto)
    }
}

function criarVaga() {
    const nome = prompt("Digite o nome da vaga:")
    const descricao = prompt("Digite a descrição da vaga:") 
    const dataLimite = prompt("Digite a data limite (dd/mm/aaaa):")
    const confirmacao = confirm(
        `Confirme as informações:\n` +
        `Nome: ${nome}\n` +
        `Descrição: ${descricao}\n` +
        `Data Limite: ${dataLimite}`
    )
    if (confirmacao) {
        const novaVaga = {
            nome: nome,
            descricao: descricao,
            dataLimite: dataLimite,
            candidatos: []
        }
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    } else {
        alert("Criação de vaga cancelada.")
    }   
}

function visualizarVaga() {
    const indice = parseInt(prompt("Digite o índice da vaga que deseja visualizar:"))
    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert("Índice inválido.")
    } else {
        const vaga = vagas[indice]
        const candidatosTexto = vaga.candidatos.length > 0 ? vaga.candidatos.join("\n") : "Nenhum candidato inscrito."
        alert(
            `Índice: ${indice}\n` +
            `Nome: ${vaga.nome}\n` +
            `Descrição: ${vaga.descricao}\n` +
            `Data Limite: ${vaga.dataLimite}\n` +
            `Candidatos:\n${candidatosTexto}`
        )
    }
}

function inscreverCandidato() { 
    const nomeCandidato = prompt("Digite o nome do candidato:")
    const indiceVaga = parseInt(prompt("Digite o índice da vaga para a qual deseja se inscrever:"))     
    if (isNaN(indiceVaga) || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Índice de vaga inválido.")
        return
    }
    const vaga = vagas[indiceVaga]
    const confirmacao = confirm(
        `Confirme as informações:\n` +
        `Nome do candidato: ${nomeCandidato}\n` +
        `Vaga: ${vaga.nome}\n` +
        `Descrição: ${vaga.descricao}\n` +
        `Data Limite: ${vaga.dataLimite}`
    )
    if (confirmacao) {
        vaga.candidatos.push(nomeCandidato)
        alert("Candidato inscrito com sucesso!")
    } else {
        alert("Inscrição cancelada.")
    }
}

function excluirVaga() {
    const indice = parseInt(prompt("Digite o índice da vaga que deseja excluir:"))
    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert("Índice inválido.")
    } else {
        const vaga = vagas[indice]
        const confirmacao = confirm(
            `Confirme as informações da vaga que deseja excluir:\n` +
            `Índice: ${indice}\n` +
            `Nome: ${vaga.nome}\n` +
            `Descrição: ${vaga.descricao}\n` +
            `Data Limite: ${vaga.dataLimite}\n` +
            `Candidatos: ${vaga.candidatos.length}`
        )   
        if (confirmacao) {
            vagas.splice(indice, 1)
            alert("Vaga excluída com sucesso!")
        } else {
            alert("Exclusão cancelada.")
        }   
    }
}

