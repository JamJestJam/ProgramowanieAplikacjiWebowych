import Field from "./field";
import FieldEnum from "./fieldEnum";
import uuidv4 from "./guid";

class Board {
    fields: Field[] = [];
    status: FieldEnum = FieldEnum.circle;
    winSize: number;
    startGame: string = new Date().toISOString();
    lastUpdate: string = new Date().toISOString();
    size: number;
    guid: string = uuidv4();

    constructor(size1: number, size2: number, fields: Field[] | undefined = undefined) {
        this.size = size1;
        this.winSize = size2;

        if (fields && fields.length === size1 * size1) this.fields = fields;
        else {
            for (let i = 0; i < size1; i++) {
                for (let j = 0; j < size1; j++) {
                    this.fields.push(new Field(i, j));
                }
            }
        }
    }
}

export default Board;