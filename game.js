class game {
    constructor() {
        this.win = false;
        this.draw = false;
        this.player1 = new Player({id: 1, token: 🚴})
        this.player2 = new Player({id: 1, token: 🍍})
        this.turnEven = true;
        this.turnOdd = false;
        this.winningMoves = [
            [section-1, section-2, section-3],
            [section-1, section-5, section-9],
            [section-1, section-4, section-7],
            [section-2, section-5, section-8],
            [section-3, section-5, section-7],
            [section-3, section-6, section-9],
            [section-4, section-5, section-6],
            [section-7, section-8, section-9]
        ];
            
        }
        determineTurn() {
            if (this.turnEven) {
                this.turnOdd
            }
        }
    }


/*this game file should 
have Two Player instances
A way to keep track of the data for the game board
A way to keep track of which player’s turn it currently is
A way to check the Game’s board data for win conditions
A way to detect when a game is a draw (no one has won)
A way to reset the Game’s board to begin a new game