import InputSize from "../input/inputSize";
import Board from "./board";
import Draw from "./draw";
import Field from "./field";
import FieldEnum from "./fieldEnum";
import MoveHistory from "./moveHistory";
import ResumeGame from "./resumeGame";

class GameControler {
    board = document.createElement('div');
    logicBoard: Board;
    history: MoveHistory = new MoveHistory();
    private saveGame = new ResumeGame();
    private draw: Draw;

    constructor(size: number, winSize: number, board: Board | undefined = undefined) {
        if (board) this.logicBoard = board;
        else {
            this.logicBoard = new Board(size, winSize);
            this.saveGame.createNewGame(this.logicBoard);
        }

        this.board.classList.add("Board");
        this.draw = new Draw(this.board, this.click, this.undoMove);

        this.init();
        this.checkWin();
    }

    init() {
        this.draw.drawAll(this.logicBoard);
    }

    click = (e: MouseEvent) => {
        const div = <HTMLDivElement>e.target;
        const col = div.dataset.column || -1;
        const row = div.dataset.row || -1;

        const field = this.logicBoard.fields.find(a => a.row === +row && a.col === +col);
        if (field && field.status === FieldEnum.empty) {
            this.makeMove(field, this.logicBoard.status);
            this.checkWin();
            this.changeStatus();
            this.history.saveMove(field);
            this.saveGame.updateGame(this.logicBoard);
        }
    }

    undoMove = (_e: MouseEvent) => {
        const pop = this.history.popLastMove();
        if (pop) {
            const field = this.logicBoard.fields.find(a => a.row === pop.row && a.col === pop.col);
            if (field) {
                field.status = FieldEnum.empty;
                this.makeMove(field, FieldEnum.empty);
                this.changeStatus();
                this.saveGame.updateGame(this.logicBoard);
            }
        }
    }

    makeMove(field: Field, status: FieldEnum) {
        field.status = status;
        this.draw.drawOne(field.row, field.col, field.status);
    }

    private changeStatus() {
        this.logicBoard.status =
            (this.logicBoard.status === FieldEnum.circle) ?
                FieldEnum.cross :
                FieldEnum.circle;
    }

    private checkWin() {
        for (let i = 0; i < this.logicBoard.size; i++) {
            const row = this.logicBoard.fields.filter(a => a.row === i);
            const col = this.logicBoard.fields.filter(a => a.col === i);

            const rowCount = this.calcCount(row);
            const colCount = this.calcCount(col);

            if (rowCount >= this.logicBoard.winSize || colCount >= this.logicBoard.winSize)
                this.win();
        }

        for (let i = 0; i < this.logicBoard.size; i++) {
            const d1 = this.logicBoard.fields.filter(a => a.col === a.row - i);
            const d2 = this.logicBoard.fields.filter(a => this.logicBoard.size - a.col - 1 === a.row - i);
            const d3 = this.logicBoard.fields.filter(a => a.col === this.logicBoard.size - a.row - 1 - i);
            const d4 = this.logicBoard.fields.filter(a => this.logicBoard.size - a.col - 1 === this.logicBoard.size - a.row - 1 - i);

            const cd1 = this.calcCount(d1);
            const cd2 = this.calcCount(d2);
            const cd3 = this.calcCount(d3);
            const cd4 = this.calcCount(d4);

            if (cd1 >= this.logicBoard.winSize || cd2 >= this.logicBoard.winSize  || cd3 >= this.logicBoard.winSize || cd4 >= this.logicBoard.winSize )
                this.win();
        }

        const empty = this.logicBoard.fields.filter(a=>a.status === FieldEnum.empty);
        if(empty.length === 0)
            this.drawFn();
    }

    private calcCount(list: Field[]) {
        let maxCount = 0;
        let current = 0;

        list.forEach(ele => {
            if (ele.status === this.logicBoard.status)
                current++;
            else current = 0;

            if (current > maxCount) maxCount = current;
        })

        return maxCount;
    }

    private win() {
        alert("Wygrałeś");
        this.endGame();
    }
    
    private drawFn() {
        alert("Remis");
        this.endGame();
    }

    private endGame(){
        this.saveGame.deleteGame(this.logicBoard);
        const parent = this.board.parentElement;
        if(parent){
            parent.innerHTML="";
            parent.appendChild(new InputSize().content);
        }
    }
}

export default GameControler;