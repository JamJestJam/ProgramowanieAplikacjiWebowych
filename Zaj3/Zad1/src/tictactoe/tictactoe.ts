import { Game } from "../game.model";
import Board from "./Board";
import '../styles/_tictactoe.scss';

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        const board = new Board(4, 3);
        return <HTMLElement>board.board;
    }
}
