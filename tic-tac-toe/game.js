export default class Game {

    constructor(){
        console.log("game init");
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    updateTurn() {
        if(this.turn == "X"){
            this.turn = "O";
        }else{
            this.turn = "X";
        }
    }

    makeMove(i){

        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){
            return;
        }

        this.board[i] = this.turn;

        let winningCombination = this.winner();
        
        if(!winningCombination){
            this.updateTurn();
        }
    }

    
    winner() {
        
        const winningCombinations = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8],
        ]

        for (const combination of winningCombinations) {
    
            const [a, b, c] = combination;
    
            if (this.board[a] && this.board[a] == this.board[b] && this.board[a] == this.board[c]) {
                return combination;
            } 
        }
        return null;
    }

    endOfGame(){

        let winningCombination = this.winner();
        if(winningCombination) {
            return true;
        }
        return false;
    }
    
}