function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
    //...code to send spaceship
}

sendSpaceship({ pilot: 'John', copilot: 'Jane' })

sendSpaceship({ pilot: 'John'})


//o uso de ? é para indicar que o campo é opcional, e isso é muito util para evitar erros de tipagem e para tornar o codigo mais flexivel

let input : unknown
input = 'Hello World'

let inputAny: any
inputAny = 'Hello World'

//a diferença entre unknown e any é que o unknown é mais seguro, pois ele não permite acessar propriedades ou métodos de um valor desconhecido, enquanto o any permite acessar qualquer propriedade ou método, o que pode levar a erros de runtime. Por isso, é recomendado usar unknown em vez de any sempre que possível.


// function verification(input: unknown) {
//     if (typeof input === 'string') {
//         console.log(input.toUpperCase())
//     }else {
//         let check: never
//         return check
//     }

//     }

    //no exemplo acima, a função verification recebe um parâmetro do tipo unknown, e dentro da função é feita uma verificação para verificar se o tipo do input é string, caso seja, é possível acessar o método toUpperCase, caso contrário, é retornado um valor do tipo never, que indica que o código nunca deve ser executado. Isso é útil para garantir que o código seja seguro e evitar erros de runtime.
