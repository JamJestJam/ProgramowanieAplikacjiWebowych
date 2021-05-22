import IGame from "../../main/IGame";
import Board from "./board";
import "../../styles/_pong.scss";

export class Pong implements IGame {
    name: string;

    constructor(){
        this.name="Pong"
    }

    getGameElement() {
        const board = new Board();

        return board.element;
    }
}

export default Pong;