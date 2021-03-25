import { FORMERR } from "node:dns";
import Field from "./Field";
import Line from "./Line";
import MoveType from "./MoveType";

class Board {
    board: Element;
    fieldList: Field[] = new Array();
    move: MoveType = MoveType.circle;
    size: number;

    constructor(size: number) {
        this.size = size;
        this.board = document.createElement("div");
        this.board.classList.add("Board");
        document.body.appendChild(this.board);
        this.Init();
    }

    private Init() {
        this.board.innerHTML = "";

        for (let i = 0; i < this.size; i++) {
            const line = new Line();
            this.board.appendChild(line.element);

            for (let j = 0; j < this.size; j++) {
                const field = new Field(i, j);

                line.element.appendChild(field.element);
                this.fieldList.push(field);

                field.element.addEventListener("click", this.MakeMove);
            }
        }
    }

    public MakeMove = (e: MouseEvent) => {
        const target = <HTMLElement>e.target;
        const id = target.id;

        const click = this.fieldList.find((ele) => ele.Equal(id));
        if (click && click?.State() == MoveType.null) {
            click.MakeMove(this.move);

            if (this.move == MoveType.circle) this.move = MoveType.cross;
            else this.move = MoveType.circle;

            this.CheckWin(click.row, click.column);
        }
    };

    CheckWin(row: number, column: number) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                
            }
        }
    }
}

export default Board;
