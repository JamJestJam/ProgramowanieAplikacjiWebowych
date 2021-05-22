import InputSize from "../input/inputSize";
import Board from "./board";
import Draw from "./draw";
import Field from "./field";
import FieldEnum from "./fieldEnum";
import MoveHistory from "./moveHistory";
import ResumeGame from "./resumeGame";

class OnlineGameControler {
    socket = new WebSocket("ws://localhost:8080");
    board: HTMLDivElement = document.createElement('div');

    constructor(size: number, winSize: number, name: string) {
        this.socket.onopen = (e) => {
            this.socket.send(JSON.stringify({ size: size, winSize: winSize, name: name }));
        }
    }
}

export default OnlineGameControler;