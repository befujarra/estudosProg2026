//funções recursivas são funções que se chamam a si mesmas até atingir uma condição de parada.
function dividir (numero) {
    console.log(numero);
    if (numero % 2 === 0) {
        dividir(numero / 2);
    }else {
        return numero;
    }
 }
 dividir(10);

//estrutura de pilha (stack)
//a cada chamada de função, uma nova camada é adicionada na pilha.
//quando a função termina, a camada é removida da pilha.
//quando a pilha atinge o limite máximo, ocorre um erro de estouro de pilha (stack overflow).
//exemplo de estouro de pilha:
//function estourarPilha() {
 //   return estourarPilha();
//}
//estourarPilha();
//essa função não tem condição de parada, então ela continuará se chamando até atingir o limite máximo da pilha e gerar um erro.
//é tipo while só que com funções.

function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
console.log(fatorial(5)); //120