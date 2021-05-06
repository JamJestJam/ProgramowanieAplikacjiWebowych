import Board from "./Board";

const name = "tiictactoe";

export default class ResumeGame {
    constructor() {
        const dataString = localStorage.getItem(name);
        if (dataString === null) localStorage.setItem(name, JSON.stringify([]));
    }

    getSavedGames() {
        const dataString = localStorage.getItem(name);
        if (dataString === null) return [];

        const data: GameData[] = JSON.parse(dataString);
        return data;
    }

    saveGame(
        start: string,
        moves: number[],
        size: number,
        winSize: number
    ) {
        const dataString = localStorage.getItem(name);
        if (dataString === null) return;

        const data: GameData[] = JSON.parse(dataString);
        const cont = data.find((a) => a.startData === start);
        if (cont) {
            const index = data.indexOf(cont);
            data[index].moves = moves;
            data[index].lastPlayDate = Date.now.toString();
        } else {
            const gameData: GameData = {
                startData: start,
                lastPlayDate: Date.now().toString(),
                moves: moves,
                size: size,
                winSize: winSize,
            };
            data.push(gameData);
        }

        localStorage.setItem(name, JSON.stringify(data));
    }
}

export interface GameData {
    startData: string;
    lastPlayDate: string;
    moves: number[];
    size: number;
    winSize: number;
}
