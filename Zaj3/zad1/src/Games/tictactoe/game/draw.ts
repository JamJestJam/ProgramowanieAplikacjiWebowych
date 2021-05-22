import Board from "./board";
import Field from "./field";
import FieldEnum from "./fieldEnum";


class Draw {
    div: HTMLDivElement;
    clickEvent: (e: MouseEvent) => void;
    undoEvent: (e: MouseEvent) => void;

    constructor(div: HTMLDivElement, moveEvent: (e: MouseEvent) => void, undoEvent: (e: MouseEvent) => void) {
        this.div = div;
        this.clickEvent = moveEvent;
        this.undoEvent = undoEvent;
    }

    drawAll(board: Board) {
        this.div.innerHTML = "";

        for (let i = 0; i < board.size; i++) {
            const row = document.createElement('div');
            for (let j = 0; j < board.size; j++) {
                const field = board.fields.find(a => a.row === i && a.col === j);
                row.appendChild(this.createField(i, j, field?.status || FieldEnum.empty));
            }
            this.div.appendChild(row);
        }
        this.div.appendChild(this.createButton());
    }

    drawOne(row: number, col: number, status: FieldEnum) {
        const div = this.div.children[row].children[col];
        div.innerHTML = status;
    }

    private createField(row: number, col: number, input: FieldEnum): HTMLDivElement {
        const field = document.createElement('div');
        field.dataset.column = `${col}`;
        field.dataset.row = `${row}`;
        field.innerText = input;
        field.addEventListener('click', this.clickEvent);

        return field;
    }

    private createButton() {
        const btn = document.createElement('button');
        btn.innerText = "Cofnij";
        btn.addEventListener('click', this.undoEvent);

        return btn;
    }
}

export default Draw;