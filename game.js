class Game {
    constructor() {
        this.win = false;
        this.draw = false;
        this.player1 = new Player({ id: 1, token: '🚴' })
        this.player2 = new Player({ id: 2, token: '🍍' })
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.winningMoves = [
            [1, 2, 3],
            [1, 5, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 5, 7],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9]
        ];
        this.currentPlayer = this.player1;
    }
    switchTurn() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2
        } else {
            this.currentPlayer = this.player1
        }
        var turnTitle = document.getElementById('turn')
        turnTitle.innerHTML = `It's ${this.currentPlayer.token} turn`


    }
    checkWin() {
        for (var i = 0; i < this.winningMoves.length; i++) {
            var squares = this.winningMoves[i]
            if (document.getElementById('section-' + squares[0]).innerHTML === this.player1.token && document.getElementById('section-' + squares[1]).innerHTML === this.player1.token && document.getElementById('section-' + squares[2]).innerHTML === this.player1.token) {
                this.player1.increaseWins()
                this.win = true;
            } else if (document.getElementById('section-' + squares[0]).innerHTML === this.player2.token && document.getElementById('section-' + squares[1]).innerHTML === this.player2.token && document.getElementById('section-' + squares[2]).innerHTML === this.player2.token) {
                this.player2.increaseWins()
                this.win = true;
            }
        }
    }
    reset() {
        var grid = document.querySelectorAll('.grid-section')
        for (var i = 0; i < grid.length; i++) {
            grid[i].innerHTML = ''
            this.draw = false;
        }
    }


    //     if (squares[0] == this.player1.token && 
    //     squares[1] == this.player1.token && 
    //     squares[2] == this.player1.token) {
    //         this.player1.increaseWins()
    //         return
    //     }
    //     if (squares[0] this.player2.token && 
    //         squares[1] == this.player2.token && 
    //         squares[2] == this.player2.token) {
    //             this.player2.increaseWins()
    //             return
    //         }
    // }
}






/*this game file should 
have Two Player instances- done
A way to keep track of the data for the game board
A way to keep track of which player’s turn it currently is
A way to check the Game’s board data for win conditions
A way to detect when a game is a draw (no one has won)
A way to reset the Game’s board to begin a new game*/