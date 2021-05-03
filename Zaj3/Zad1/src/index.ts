import { Games } from "./games/games.enum";
import { Game } from "./games/game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";
import GamesControler from "./games/games";
import "./styles/styles.scss";


class App {
    constructor() {
        this.init();
    }

    private init(): void {
        const leftMenu = document.querySelector<HTMLDivElement>("#LeftBar") || document.createElement('div');
        const game = document.querySelector<HTMLDivElement>("#Game") || document.createElement('div');
        new GamesControler(leftMenu, game);

        (<HTMLSpanElement>document.querySelector("#NB3>span")).addEventListener("click", this.changeTheme);
    }

    private changeTheme() {
        if (document.body.hasAttribute('data-theme'))
            document.body.removeAttribute('data-theme')
        else
            document.body.setAttribute('data-theme', 'Dark');
    }
}

new App();
