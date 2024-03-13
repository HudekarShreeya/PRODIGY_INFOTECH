const PLAYER_X = 'X';
const PLAYER_O = 'O';
let currentPlayer = PLAYER_X;
let cells = document.querySelectorAll('.cell');
let statusDisplay = document.getElementById('status');
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let winningLine;

function handleClick(cellIndex) {
  if (gameState[cellIndex] !== '' || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  cells[cellIndex].textContent = currentPlayer;

  if (checkWin()) {
    statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    highlightWinningLine();
    gameActive = false;
    return;
  }

  if (checkDraw()) {
    statusDisplay.textContent = `It's a draw!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  statusDisplay.textContent = `Current Player: ${currentPlayer}`;
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      winningLine = pattern;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameState.includes('');
}

function highlightWinningLine() {
  for (let cellIndex of winningLine) {
    cells[cellIndex].classList.add('winning-line');
  }
}

function resetGame() {
  gameActive = true;
  currentPlayer = PLAYER_X;
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.textContent = `Current Player: ${currentPlayer}`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('winning-line');
  });
}
