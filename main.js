var tiles = document.querySelectorAll('.grid-section');

var score1 = document.getElementById('1-score');
var score2 = document.getElementById('2-score');
var turnStatus = document.querySelector('#turn');

var currentGame = new Game();



for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', addToken, { once: true });
}

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


}
function endTurn() {
    if (currentGame.win) {

        increaseWins()
        currentGame.reset()

    } else {
        currentGame.switchTurn()
    }
}

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


}
function endTurn() {
    currentGame.checkWin()
    console.log("endturn()")
    if (currentGame.win) {

        increaseWins()
        currentGame.reset()

    } else {
        console.log("switch()")
        currentGame.switchTurn()
    }
}
