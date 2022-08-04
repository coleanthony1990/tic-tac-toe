class Player {
    constructor(details) {
        this.id = details.id;
        this.token = details.token;
        this.wins = 0
        this.turn = false;
    }
    increaseWins() {
        for (var i = 0; i < game.winningMoves.length; i++) {
            if //(moves include(game.winningMoves[i]) this.wins++ )
        }
        
    }
}