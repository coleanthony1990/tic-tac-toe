var tiles = document.querySelectorAll('.grid-section');
var grid = document.querySelector('.grid')

var score1 = document.getElementById('1-score');
var score2 = document.getElementById('2-score');
var turnStatus = document.querySelector('#turn');

var currentGame = new Game();



for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', addToken, { once: true });
}
grid.addEventListener('click', showWinner)

function addToken(event) {
    var clickedBox = event.target;
    if (clickedBox.innerHTML !== '') {
        return
    }

    clickedBox.innerHTML = currentGame.currentPlayer.token
    endTurn()
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
        
        setTimeout(resetGame, 1000)

    } else if (checkWinner === `Player 2 Wins`) {
        turnStatus.innerText = `${currentGame.player2.token} Wins!`
        
        setTimeout(resetGame, 1000)
}
}


function endTurn() {
    currentGame.checkWin()
    if (currentGame.win) {

        increaseWins()

    } else {
        currentGame.switchTurn()
    }
}

function resetClick() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', addToken, {once: true});
}
}
function resetGame() {
    currentGame.reset()
    grid.addEventListener('click', showWinner)

    resetClick()
    turnStatus.innerHTML = `It's ${currentGame.player1.token} Turn!`
  }




