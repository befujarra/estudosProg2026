//aula sobre funções recursivas
//função recursiva é aquela que chama a si mesma

function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

function dividir(num) {
    console.log(num);
    if (num %2 === 0) {
        return dividir(num / 2);
    } else {
        return num;
    }   
}

dividir(10);