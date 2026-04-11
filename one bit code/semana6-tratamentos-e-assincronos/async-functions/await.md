await é um comando que trabalha em conjunto com functions async

as async functions, são um novo modo de trabalhar com funcções assincronas, sem que precise ficar declaarando a funcção e criando promisses dentro dela

basta passar o async antes de function (async function(){}) e ai dentro dessa function é possivel usar comando como Promisse.reject ou resolve normal
async function asyncSum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return Promise.reject('arguments must be of type number')
//     } else {
//         return Promise.resolve(a + b)
//     }
// }



a função async substitui o uso de promisess
o await faz com se consiga trabalhar com o retorno de uma promisse na async function, porem deve ser usado com noção de que ela ira travar o restante da funcção quando for declarad a ate que recebar o valor

por isso é importante avaliar quando usar o await e quando usar o then direto



try, catch dentro da async function serve para tratar erros e rejeições normalmente

anotações para raciocionio.
o curso passa por promisses, then, catch, try, promissesAll
depois abordar como fazer o mesmo resultado com async e await e tambem promissesAll para esse cenario
suas diferenças e beneficios
avaliar quando usar await e then
