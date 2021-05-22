import Board from "./board";
import Field from "./field";

const storageName = "resumeGame"

class ResumeGame {
    constructor() {
        if (localStorage.getItem(storageName) === undefined)
            localStorage.setItem(storageName, JSON.stringify([]));
    }

    createNewGame(board: Board) {
        const games: Board[] = JSON.parse(localStorage.getItem(storageName) || "[]");
        games.push(board);
        localStorage.setItem(storageName, JSON.stringify(games));
    }

    updateGame(board: Board) {
        const games: Board[] = JSON.parse(localStorage.getItem(storageName) || "[]");
        const game = games.find(a => a.guid == board.guid);
        
        if (game) {
            game.fields = board.fields;
            game.lastUpdate = new Date().toISOString();
            localStorage.setItem(storageName, JSON.stringify(games));
        }
    }
    
    deleteGame(board: Board){
        const games: Board[] = JSON.parse(localStorage.getItem(storageName) || "[]");
        
        const id = games.findIndex(a=>a.guid === board.guid);
        if(id!==-1){
            games.splice(id,1);
            console.log(games);
            localStorage.setItem(storageName, JSON.stringify(games));
        }
    }

    getAllGames(){
        const games: Board[] = JSON.parse(localStorage.getItem(storageName) || "[]");
        return games;
    }

    restoreGame(guid: string) {
        const games: Board[] = JSON.parse(localStorage.getItem(storageName) || "[]");
        return games.find(a => a.guid === guid);
    }
}

export default ResumeGame;