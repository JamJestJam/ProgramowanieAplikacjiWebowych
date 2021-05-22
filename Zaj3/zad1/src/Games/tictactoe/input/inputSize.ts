import Board from "../game/board";
import GameControler from "../game/gameControler";
import OnlineGameControler from "../game/onlineGameControler";
import Button from "./button";
import Input from "./input";
import { check, max, min } from "./inputSizeD";
import OldGames from "./oldGame";
import OnlineGames from "./onlineGames";

class InputSize {
    content = document.createElement('div');

    constructor() {
        const input1 = new Input("Ilość pol", "size1");
        const input2 = new Input("Wygrywająca wielkość", "size2");
        const btn = new Button("Rozpocznij gre", this.getSize);
        const oldGames = new OldGames(this.resumeGame);
        const onlineGame = new OnlineGames(this.getOnline);

        this.content.appendChild(input1.element);
        this.content.appendChild(input2.element);
        this.content.appendChild(btn.element);
        //this.content.appendChild(onlineGame.div);
        this.content.appendChild(oldGames.div);
    }

    getSize = () => {
        const in1 = document.querySelector<HTMLInputElement>('#size1');
        const in2 = document.querySelector<HTMLInputElement>('#size2');
        if (in1 && in2) this.startGame(+in1?.value, +in2?.value);
    }

    @min(3)
    @max(10)
    @check
    startGame(size1: number, size2: number): void {
        const parent = this.content.parentElement;
        if (parent) {
            parent.innerHTML = "";
            parent.appendChild(new GameControler(size1, size2).board);
        }
    }

    resumeGame = (board: Board) => {
        const parent = this.content.parentElement;
        if (parent) {
            parent.innerHTML = "";
            parent.appendChild(new GameControler(board.size, board.winSize, board).board);
        }
    }

    getOnline=()=>{
        const in1 = document.querySelector<HTMLInputElement>('#size1');
        const in2 = document.querySelector<HTMLInputElement>('#size2');
        const name = document.querySelector<HTMLInputElement>('#serverName');
        if (in1 && in2 && name)
            this.createOnlineGame(+in1.value, +in2.value, name.value);
    }

    @min(3)
    @max(10)
    @check
    createOnlineGame(size1: number, size2: number, name: string):void {
        const parent = this.content.parentElement;
        if (parent) {
            parent.innerHTML = "";
            parent.appendChild(new OnlineGameControler(size1, size2, name).board);
        }
    }

    joinOnlineGame() {

    }
}

export default InputSize;