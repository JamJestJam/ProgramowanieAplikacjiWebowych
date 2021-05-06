import MoveType from "./MoveType";

class Field {
    element: HTMLElement;

    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.element = document.createElement("div");
        this.element.id = `F${row}_${column}`;

        this.row = row;
        this.column = column;
    }

    Equal(id: string) {
        return id === this.element.id;
    }

    State(): MoveType {
        switch (this.element.innerText) {
            case "O":
                return MoveType.circle;
            case "X":
                return MoveType.cross;
            default:
                return MoveType.null;
        }
    }

    MakeMove(type: MoveType) {
        switch (type) {
            case MoveType.circle:
                this.element.innerText = "O";
                break;
            case MoveType.cross:
                this.element.innerText = "X";
                break;
            case MoveType.null:
                this.element.innerText = "";
                break;
        }
    }
}

export default Field;
