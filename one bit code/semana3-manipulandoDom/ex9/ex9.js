//exercicio calculadora geometrica para exercitar funções
function areaQuadrado(lado) {
    return lado * lado;
}

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaCirculo(raio) {
    return Math.PI * raio * raio;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) / 2) * altura;
}

//menu para o usuário escolher a forma geométrica e calcular a área
function calcularArea() {
    let opcao = ""
    do {
        opcao = prompt(
            "Calculadora Geométrica\n" +
            "Escolha uma opção:\n" +
            "1. Calcular área do triângulo\n" +
            "2. Calcular área do retângulo\n" +
            "3. Calcular área do quadrado\n" +
            "4. Calcular área do trapézio\n" +
            "5. Calcular área do círculo\n" +
            "6. Sair"
        )

        switch (opcao) {
            case "1":
                const baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"))
                const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"))
                alert(`A área do triângulo é: ${areaTriangulo(baseTriangulo, alturaTriangulo)}`)
                break
            case "2":
                const baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"))
                const alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"))
                alert(`A área do retângulo é: ${areaRetangulo(baseRetangulo, alturaRetangulo)}`)
                break
            case "3":
                const lado = parseFloat(prompt("Digite o lado do quadrado:"))
                alert(`A área do quadrado é: ${areaQuadrado(lado)}`)
                break
            case "4":
                const baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"))
                const baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"))
                const alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio:"))
                alert(`A área do trapézio é: ${areaTrapezio(baseMaior, baseMenor, alturaTrapezio)}`)
                break
            case "5":
                const raio = parseFloat(prompt("Digite o raio do círculo:"))
                alert(`A área do círculo é: ${areaCirculo(raio)}`)
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }
    } while (opcao !== "6")
}


calcularArea();
