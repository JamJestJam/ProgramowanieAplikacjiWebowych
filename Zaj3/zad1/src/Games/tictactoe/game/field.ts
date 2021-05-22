import FieldEnum from "./fieldEnum";

class Field {
    row: number;
    col: number;
    status: FieldEnum;

    constructor(row: number, col: number, status: FieldEnum = FieldEnum.empty) {
        this.row = row;
        this.col = col;
        this.status = status;
    }
}

export default Field;