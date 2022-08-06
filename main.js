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
    currentGame
    currentGame.switchTurn()
}
function changeTurn() {
    
}

