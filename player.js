class Player {
    constructor(details) {
        this.id = details.id
        this.token = details.token
        this.wins = 0
        this.turn = false
    }
    increaseWins() {
        this.wins++
    }
}