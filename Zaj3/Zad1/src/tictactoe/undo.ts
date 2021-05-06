import Board from "./Board";
import ResumeGame from "./ResumeGame";

export default class Undo {
    element: HTMLDivElement = document.createElement("div");
    resume: ResumeGame = new ResumeGame();

    constructor() {
        this.element.innerHTML = "cofnij";

        sessionStorage.setItem("MoveHistory", JSON.stringify([]));
    }

    rememberMe(position: number, board:Board) {
        const historyString = sessionStorage.getItem("MoveHistory");
        if (historyString) {
            const history: number[] = JSON.parse(historyString);
            history.push(position);
            sessionStorage.setItem("MoveHistory", JSON.stringify(history));

            this.resume.saveGame(board.start, history, board.size, board.winSize);
        }
    }

    undoMove(): number {
        const historyString = sessionStorage.getItem("MoveHistory");
        if (historyString) {
            const history: number[] = JSON.parse(historyString);
            const lastEle = history.pop();
            if(lastEle === undefined)
                return -1;

            sessionStorage.setItem("MoveHistory", JSON.stringify(history));
            return lastEle;
        }
        return -1;
    }
}
