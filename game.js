class Game {
    constructor() {
        this.win = false;
        this.draw = false;
        this.player1 = new Player({id: 1, token: '🚴'})
        this.player2 = new Player({id: 2, token: '🍍'})
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
            
        }
        checkWinOrDraw() {
            if (this.player1.token === this.winningMoves) {
                return `{this.player1.token} Wins!`
            } else if (this.player2.token === this.winningMoves) {
                return `{this.player1.token} Wins!`
            } else {
                return 'Draw!'
            }
        }
        
     
    }


/*this game file should 
have Two Player instances- done
A way to keep track of the data for the game board
A way to keep track of which player’s turn it currently is
A way to check the Game’s board data for win conditions
A way to detect when a game is a draw (no one has won)
A way to reset the Game’s board to begin a new game*/