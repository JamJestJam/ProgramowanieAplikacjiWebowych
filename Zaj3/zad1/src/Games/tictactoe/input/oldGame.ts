import { cli } from "webpack";
import Board from "../game/board";
import ResumeGame from "../game/resumeGame";

class OldGames {
    data: Board[] = new ResumeGame().getAllGames();
    div: HTMLDivElement = document.createElement('div');
    table: HTMLTableElement = document.createElement('table');
    callBack: (board: Board) => void;

    constructor(callBack: (board: Board) => void) {
        this.callBack = callBack;

        const header = document.createElement('tr');
        const guid = document.createElement('td');
        const createDate = document.createElement('td');
        const lastUpdate = document.createElement('td');
        const resume = document.createElement('td');
        const span = document.createElement('span');

        this.table.id = "table";
        guid.innerText = "GUID";
        createDate.innerText = "data rozpoczęcia gry";
        lastUpdate.innerText = "ostatnio grany";
        resume.innerText = "wznów";
        span.innerText = "Kontynuuj gry";

        header.appendChild(guid);
        header.appendChild(createDate);
        header.appendChild(lastUpdate);
        header.appendChild(resume);

        this.div.appendChild(span);
        this.div.appendChild(this.table);
        this.table.appendChild(header);
        this.init();
    }

    init() {
        this.data.forEach(board => {
            this.table.appendChild(this.createRow(board));
        });
    }

    createRow(board: Board) {
        const row = document.createElement('tr');
        row.appendChild(this.createCol(board.guid));
        row.appendChild(this.createCol(this.stringToDateString(board.startGame.toString())));
        row.appendChild(this.createCol(this.stringToDateString(board.lastUpdate.toString())));
        row.appendChild(this.createColButton(board));

        return row;
    }

    createCol(data: string) {
        const col = document.createElement('td');
        col.innerText = data;

        return col;
    }

    stringToDateString(date: string) {
        const d = new Date(date);
        const string = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

        return string;
    }

    createColButton(board: Board) {
        const col = document.createElement('td');
        const btn = document.createElement('button');
        btn.innerText = "wznow"
        btn.addEventListener('click', () => { this.callBack(board) });

        col.appendChild(btn);
        return col;
    }
}

export default OldGames;