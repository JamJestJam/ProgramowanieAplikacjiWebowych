import Board from "../game/board";
import Button from "./button";
import Input from "./input";
import { min, max, check } from "./inputSizeD";

class InputSize {
    content = document.createElement('div');

    constructor() {
        const input1 = new Input("Ilość pol", "size1");
        const input2 = new Input("Wygrywająca wielkość", "size2");
        const btn = new Button("Rozpocznij gre", this.getSize);

        this.content.appendChild(input1.element);
        this.content.appendChild(input2.element);
        this.content.appendChild(btn.element);
    }


    getSize = () => {
        const in1 = document.querySelector<HTMLInputElement>('size1');
        const in2 = document.querySelector<HTMLInputElement>('size2');

        if (in1 && in2) this.startGame(+in1?.value, +in2?.value);
    }

    @min(3)
    @max(10)
    @check()
    startGame = (size1: number, size2: number): void => {
        const parent = this.content.parentElement;
        if(parent){
            parent.innerHTML = "";
            parent.appendChild(new Board(size1, size2).board);
        }
    }
}

export default InputSize;