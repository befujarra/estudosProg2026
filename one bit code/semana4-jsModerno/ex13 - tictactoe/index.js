// Seleções
const cells = document.querySelectorAll(".cell")
const playerXInput = document.querySelector("#playerX")
const playerOInput = document.querySelector("#playerO")
const winnerText = document.querySelector("#winner")
const restartButton = document.querySelector("#reiniciar")

// Estado do jogo
let currentPlayer = "X"
let board = ["", "", "", "", "", "", "", "", ""]
let gameOver = false

// Combinações de vitória
const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

// Mostrar jogador da vez
function updateTurnText() {
  const playerName = currentPlayer === "X"
    ? playerXInput.value || "Jogador X"
    : playerOInput.value || "Jogador O"

  winnerText.textContent = `Vez de: ${playerName}`
}

// Clique em uma célula
function handleCellClick(event) {
  const cell = event.target
  const index = cell.dataset.index

  if (board[index] !== "" || gameOver) {
    return
  }

  board[index] = currentPlayer
  cell.textContent = currentPlayer
  cell.disabled = true

  checkWinner()

  if (!gameOver) {
    switchPlayer()
    updateTurnText()
  }
}

// Trocar jogador
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
}

// Verificar vencedor
function checkWinner() {

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i]

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      highlightWinner(a, b, c)
      showWinner()
      gameOver = true
      return
    }
  }

  // Empate
  if (!board.includes("")) {
    winnerText.textContent = "Empate!"
    gameOver = true
  }
}

// Destacar células vencedoras
function highlightWinner(a, b, c) {
  cells[a].style.backgroundColor = "#884dff"
  cells[b].style.backgroundColor = "#884dff"
  cells[c].style.backgroundColor = "#884dff"
}

// Mostrar vencedor
function showWinner() {
  const playerName = currentPlayer === "X"
    ? playerXInput.value || "Jogador X"
    : playerOInput.value || "Jogador O"

  winnerText.textContent = `🏆 ${playerName} venceu!`
}

// Reiniciar jogo
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""]
  gameOver = false
  currentPlayer = "X"

  cells.forEach(cell => {
    cell.textContent = ""
    cell.disabled = false
    cell.style.backgroundColor = ""
  })

  updateTurnText()
}

// Eventos
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick)
})

restartButton.addEventListener("click", restartGame)

// Iniciar
updateTurnText()
