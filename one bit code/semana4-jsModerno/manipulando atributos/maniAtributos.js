const input = document.getElementById("input");

document.getElementById("value").addEventListener('click', function(){
    input.value = 'ola mundo'

    console.log(input.value)

    console.log(input.getAttribute('value'))
})


document.getElementById("type").addEventListener('click', function() {
// input.type = input.type !== 'date' ? 'date' : 'text'
input.setAttribute('type','radio')

})

document.getElementById('placeholder').addEventListener('click', function() {
input.placeholder = 'Digita algo...'

} )

document.getElementById('disable').addEventListener('click', function() {
input.setAttribute('disabled', true)

} )

document.getElementById('data').addEventListener('click', function (){
const data = input.dataset.somethingElse
input.dataset.somethingElse = 'novo valor'
console.log('o valor do atributo data-something-else é: ' + data)
console.log(input.dataset.somethingElse)


})


