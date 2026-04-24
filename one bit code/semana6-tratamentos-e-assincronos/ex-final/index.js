

function renderTransaction(transactionData) {
    const transaction = document.createElement('div')
    transaction.classList.add('transaction')
    transaction.id = `transaction-${transactionData.id}`
    const name = document.createElement('span')
    name.classList.add('transaction-name')
    name.textContent = transactionData.name
    const amount = document.createElement('span')
    amount.classList.add('transaction-amount')
    amount.textContent = transactionData.amount
    const editButton = document.createElement('button')
    editButton.classList.add('edit-btn')
    editButton.textContent = 'Editar'
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.textContent = 'Excluir'
    transaction.append(name, amount, editButton, deleteButton)
    document.getElementById('transactions').appendChild(transaction)
}

async function fetchTransactions() {    
    const transactions = await fetch("http://localhost:3000/transactions").then(res => res.json())
    transactions.forEach(renderTransaction)
}

fetchTransactions()

const form = document.querySelector('form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const transactionData = {
        name: document.querySelector('#name').value,
        amount: document.querySelector('#amount').value
    }   
    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })
    const savedTransaction = await response.json()
    renderTransaction(savedTransaction)
    form.reset()
})


//funcção para o botao de editar, abrur uma caixa de dialogo para editar o nome e o valor da transação
const editButtons = document.querySelectorAll('.edit-btn')
editButtons.forEach(editButton => {
    editButton.addEventListener('click', async (event) => {
        event.preventDefault()
        const transaction = event.target.closest('.transaction')
        const name = transaction.querySelector('.transaction-name')
        const amount = transaction.querySelector('.transaction-amount')
        const modal = new bootstrap.Modal(document.getElementById('editModal'))
        modal.show()
    })
})