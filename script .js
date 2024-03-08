const board = document.getElementById('board');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} wins!`;
            return;
        }
    }
    if (!gameState.includes('')) {
        gameActive = false;
        message.innerText = 'It\'s a draw!';
    }
};

const handleMove = (cellIndex) => {
    if (!gameActive || gameState[cellIndex] !== '') return;
    gameState[cellIndex] = currentPlayer;
    board.children[cellIndex].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.innerText = '';
    Array.from(board.children).forEach(cell => cell.innerText = '');
};

