import { Game } from "../games/game.model";
import { disabledFunction } from "../games/gameDecorators/disabled";
import Board from "./board";
import "../styles/_pong.scss";
import ICollision from "./ICollision";
import ball from "./ball";


export class Pong implements Game {
    name: string;

    constructor(){
        this.name="Pong"
    }

    @disabledFunction
    getGameElement(): HTMLElement {
        const board = new Board();

        return board.element;
    }
}