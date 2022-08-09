//Global Variables--------->
var tiles = document.querySelectorAll('.grid-section');
var grid = document.querySelector('.grid')
var score1 = document.getElementById('1-score');
var score2 = document.getElementById('2-score');
var turnStatus = document.querySelector('#turn');
var currentGame = new Game();

//Event Listeners----------->
for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', addToken, { once: true });
}
grid.addEventListener('click', showWinner)

//Functions----------->
function addToken(event) {
    var clickedBox = event.target;
    if (clickedBox.innerHTML !== '') {
        return
    }
    clickedBox.innerHTML = currentGame.currentPlayer.token
    endTurn()
    displayDraw()
}

function increaseWins() {
    score1.innerText = `${currentGame.player1.wins} wins`
    score2.innerText = `${currentGame.player2.wins} wins`
    currentGame.win = false
}

function showWinner() {
    var checkWinner = currentGame.checkWin()
    if (checkWinner === `Player 1 Wins`) {
        turnStatus.innerText = `${currentGame.player1.token} Wins!`
        setTimeout(resetGame, 2000)
    } else if (checkWinner === `Player 2 Wins`) {
        turnStatus.innerText = `${currentGame.player2.token} Wins!`
        setTimeout(resetGame, 2000)
    }
}

function endTurn() {
    currentGame.checkWin()
    if (currentGame.win) {
        increaseWins()
    } else {
        currentGame.count++
        currentGame.switchTurn()
    }
}

function resetClick() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addToken, { once: true });
    }
}

function resetGame() {
    currentGame.reset()
    resetClick()
    changePlayer()
    turnStatus.innerHTML = `It's ${currentGame.currentPlayer.token} Turn!`
}

function displayDraw() {
    if (currentGame.count === 9 && !currentGame.win) {
        currentGame.declareDraw()
        setTimeout(resetGame, 2000) 
    }
}
function changePlayer() {
    if (currentGame.gameCount % 2 === 0) {
        currentGame.currentPlayer = currentGame.player2
    } else {
        currentGame.currentPlayer = currentGame.player1
    }
}

//if last game started with 1, reset game2 current player to 2, and so on
//

