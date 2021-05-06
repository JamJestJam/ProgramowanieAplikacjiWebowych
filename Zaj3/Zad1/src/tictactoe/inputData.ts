import { isThrowStatement } from "typescript";
import Board from "./Board";
import { check, max, min } from "./decorators/defaultInputValue";
import MoveType from "./MoveType";
import ResumeGame, { GameData } from "./ResumeGame";

export default class InputData {
    element: HTMLDivElement;

    constructor() {
        this.element = document.createElement("div");
        this.init();
    }

    init(){
        const input1 = this.createInput("Ilosc pol", "fields");
        const input2 = this.createInput("wygrywajaca kombinacja", "win");
        
        const button = document.createElement("button");

        button.textContent = "Rozpocznij grę";
        button.addEventListener("click", () => {
            const in1 = +(<HTMLInputElement>input1.childNodes[0]).value;
            const in2 = +(<HTMLInputElement>input2.childNodes[0]).value;

            this.startGame(in1, in2);
        });

        this.element.appendChild(input1);
        this.element.appendChild(input2);
        this.element.appendChild(button);
        this.element.appendChild(document.createElement('br'));
        this.element.appendChild(document.createElement('br'));
        this.element.appendChild(document.createElement('br'));

        new ResumeGame().getSavedGames().forEach(game=>{
            this.element.appendChild(this.GetGame(game));
        });
    }

    private GetGame(game: GameData){
        const div = document.createElement('div');
        div.innerText = game.startData;
        div.addEventListener('click', ()=>{
            const board = new Board(game.size, game.winSize);
            board.start = game.startData;
            
            let moveType = MoveType.cross;
            game.moves.forEach(move =>{
                const row = Math.floor(move/game.size);
                const column = move - row*game.size;

                board.fieldList[row][column].MakeMove(moveType);

                if (moveType == MoveType.circle) moveType = MoveType.cross;
                else moveType = MoveType.circle;
            })

            this.element.innerHTML = "";
            this.element.appendChild(board.board);
        });

        return div;
    }

    @min(3)
    @max(10)
    @check
    private startGame(size1:number, size2:number){
        console.log(size1, size2);
        const board = new Board(size1, size2);
        this.element.innerHTML = "";
        this.element.appendChild(board.board);
    }

    private createInput = (name: string, id: string): HTMLDivElement => {
        const div = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");

        div.classList.add("input");
        label.textContent = name;
        input.placeholder = name;
        input.type = "number";
        input.id = id;

        div.appendChild(input);
        div.appendChild(label);

        return div;
    };
}
