async function imc(weight, height) {
    if (typeof weight  !== 'number' || typeof height !== 'number')
        return Promise.reject('arguments must be of type number')
    else
        return Promise.resolve(weight / (height * height))
  }
  
  async function showImc(weight, height) {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
    try {
        const result = await imc(weight, height)
        console.log(`O resultado do IMC foi de ${result}.`)
    } catch (err) {
        console.log(err)
    }
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)