typescript é js com sintaxe para tipos, é o js tipado

é uma linguagem de progamação

é um superset de JS, ou seja, construido em ciam de JS

todo codigo JS valido é codigo TS valido

 a relação entre o ts e o js pode ser vista como semelhante ao scss e o css


é uma linguagem fortemente tiáda

Por que usar?
 - apos se acotumar  usar, aumenta muito a sua produtividade

 Permite que sua IDE seja mais inteligente, apontando erros e mostrando opções do autocomplete

 Permite quer voce identifique erros em tempo de compilação ao inves de em tempo de execução
 curva de aprendizado reduzida visto que ele usa sintaxe d JS e é possivel adota o TS de forma parcial e gradativa

 traz recusros extras que nao exitem nativamente no JS como tuplas, enums melhor suporte ao POO


 TS X JS

 mesma sintaxe basica
 suporte ao ES6

 tipagem - JS: fraca e dinamica
           TS: forte e estatica


funcionamento no navegador> JS altamente suportada

funcionamento com o node 
TS nao é suportado pelo node e precisa ser compilado em codigo JS


Principais funcionalidades

Tipagem para variaveis,objetos, parametros e retornos de função

criação de nossos proprios tipos e interfaces

checagem de erros pela IDE enquanto escrevemos o codigo

funcção de autocompletar

excelente documentação e suporte da comunidade

Tipos primitivos:

Assim como nmo JS sao aqueles mais asicos e utilizados

sao aqueles que voce normalmente usa como typeof

existem os 3 mais utilizados que sao:
boolean let example: boolean = true
number e string let example: number = 10 ou let example: string = 'abc'

Arrays:
a sintaxe basica pro arrayu é utilizando os tipos dos seus elementos

Idealmente usamos arrays como sendo uma lista onde todos os elementos tem o mesmo tipo, mas isso tambem pode ser evitado

let example :number [] = [1234]

let example: Array<number> = [1234]