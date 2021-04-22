import Board from "./Board";

export default class InputData {
    element: HTMLDivElement;

    constructor() {
        this.element = document.createElement("div");
        const input1 = this.createInput("Ilosc pol", "fields");
        const input2 = this.createInput("wygrywajaca kombinacja", "win");
        const button = document.createElement("button");

        button.textContent = "Rozpocznij grę";
        button.addEventListener("click", () => {
            const in1 = +(<HTMLInputElement>input1.childNodes[0]).value;
            const in2 = +(<HTMLInputElement>input1.childNodes[0]).value;
            
            const board = new Board(in1, in2);
            
            if(in1<3|| in2<3){
                alert("Minimalne wartości to 3");
            }
            else{
                this.element.innerHTML="";
                this.element.appendChild(board.board);
            }
        });

        this.element.appendChild(input1);
        this.element.appendChild(input2);
        
        this.element.appendChild(button);
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
