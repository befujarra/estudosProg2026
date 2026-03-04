//programa fila de espera digital
//menu interativo para adicionar, remover e listar pessoas na fila de espera
//no menu deve mostrar a fila com o nome dos pacientes e a posição na fila
//opção para adicionar paciente no final da fila pedindo o nome
//opção para remover paciente do início da fila e mostrar o nome do paciente removido
//opção para listar todos os pacientes na fila

let fila = []
let opcao = ""

do {
    opcao = prompt(`Fila de espera:
${fila.map((paciente, index) => `${index + 1} - ${paciente}`).join("\n")}
Escolha uma opção:
1 - Adicionar paciente
2 - Remover paciente
3 - Listar pacientes
4 - Sair`)  
    switch (opcao) {
        case "1":
            const nomePaciente = prompt("Digite o nome do paciente:")
            fila.push(nomePaciente)
            break
        case "2":
            if (fila.length === 0) {
                alert("A fila está vazia")
            } else {
                const nomePacienteRemovido = fila.shift()
                alert(`O paciente ${nomePacienteRemovido} foi removido da fila`)
            }
            break
        case "3": 
            alert(`Pacientes na fila: ${fila.join(", ")}`)
            break
        case "4":
            alert("Saindo do programa")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "4")
    1