import { Game } from "../game.model";
import InputData from "./inputData";
import "../styles/_tictactoe.scss";

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        const input = new InputData();
        console.log(input);

        return <HTMLElement>input.element;
    }
}
