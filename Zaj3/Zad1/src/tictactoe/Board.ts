import { FORMERR } from "node:dns";
import { join } from "node:path";
import Field from "./Field";
import Line from "./Line";
import MoveType from "./MoveType";

class Board {
    board: Element;
    fieldList: Field[][] = new Array();
    move: MoveType = MoveType.circle;
    size: number;
    winSize: number;

    constructor(size: number, winSize: number) {
        this.size = size;
        this.winSize = winSize;
        this.board = document.createElement("div");
        this.board.classList.add("Board");
        this.Init();
    }

    private Init() {
        this.board.innerHTML = "";

        for (let i = 0; i < this.size; i++) {
            const line = new Line();
            this.board.appendChild(line.element);
            this.fieldList[i] = new Array();

            for (let j = 0; j < this.size; j++) {
                const field = new Field(i, j);

                line.element.appendChild(field.element);
                this.fieldList[i][j] = field;

                field.element.addEventListener("click", this.MakeMove);
            }
        }
    }

    public MakeMove = (e: MouseEvent) => {
        const target = <HTMLElement>e.target;
        const id = target.id;

        // const click = this.fieldList.find((ele) => ele.Equal(id));
        let click: Field | undefined;
        for (let i = 0; i < this.fieldList.length; i++) {
            for (let j = 0; j < this.fieldList.length; j++) {
                if (this.fieldList[i][j].element.id === target.id)
                    click = this.fieldList[i][j];
            }
        }

        if (click && click?.State() == MoveType.null) {
            click.MakeMove(this.move);

            if (this.move == MoveType.circle) this.move = MoveType.cross;
            else this.move = MoveType.circle;

            this.CheckWin(click.row, click.column);
        }
    };

    CheckWin(row: number, column: number) {
        let horizontal = 1,
            vertical = 1,
            diagonallyX = 1,
            diagonallyY = 1;
        const move = this.fieldList[row][column].State();
        const l = this.size;

        for (let i = column - 1; i >= 0; i--) {
            //lewo
            if (this.fieldList[row][i].State() == move) {
                horizontal++;
            } else break;
        }
        for (let i = column + 1; i < l; i++) {
            //prawo
            if (this.fieldList[row][i].State() == move) {
                horizontal++;
            } else break;
        }
        //------------------------------------------------------------------------\\
        for (let j = row - 1; j >= 0; j--) {
            //gora
            if (this.fieldList[j][column].State() == move) {
                vertical++;
            } else break;
        }
        for (let j = row + 1; j < l; j++) {
            //dol
            if (this.fieldList[j][column].State() == move) {
                vertical++;
            } else break;
        }
        //------------------------------------------------------------------------\\
        for (let i = column - 1, j = row - 1; i >= 0 && j >= 0; i--, j--) {
            //lewo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyX++;
            } else break;
        }
        for (let i = column + 1, j = row + 1; i < l && j < l; i++, j++) {
            //prawo i dol
            if (this.fieldList[j][i].State() == move) {
                diagonallyX++;
            } else break;
        }
        //------------------------------------------------------------------------\\
        for (let i = column + 1, j = row - 1; i < l && j >= 0; i++, j--) {
            //prawo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyY++;
            } else break;
        }
        for (let i = column - 1, j = row + 1; i >= 0 && j < l; i--, j++) {
            //prawo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyY++;
            } else break;
        }

        if (
            horizontal == this.winSize ||
            vertical == this.winSize ||
            diagonallyX == this.winSize ||
            diagonallyY == this.winSize
        ) {
            alert("wygrałeś " + move);
            this.board.innerHTML="";
            this.Init();
        }
    }
}

export default Board;
