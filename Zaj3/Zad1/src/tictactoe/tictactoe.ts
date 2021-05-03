import { Game } from "../games/game.model";
import InputData from "./inputData";
import { disabledFunction } from "../games/gameDecorators/disabled";
import "../styles/_tictactoe.scss";

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }

    @disabledFunction
    getGameElement(): HTMLElement {
        const input = new InputData();

        return <HTMLElement>input.element;
    }
}
