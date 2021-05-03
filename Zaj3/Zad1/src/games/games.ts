import { BattleShips } from "../battleships/battleships";
import { Pong } from "../pong/pong";
import { TicTacToe } from "../tictactoe/tictactoe";
import { Game } from "./game.model";
import { Games } from "./games.enum";


export default class GamesControler {
    menuContainer: HTMLDivElement;
    gameContainer: HTMLDivElement;

    constructor(menuContainer: HTMLDivElement, gameContainer: HTMLDivElement) {
        this.menuContainer = menuContainer;
        this.gameContainer = gameContainer;

        this.init();
    }

    private init() {
        const ul = document.createElement('ul');
        this.getListGames().forEach(game => {
            const li = document.createElement('li');
            li.innerText = game;
            li.addEventListener('click', this.useGame);
            ul.appendChild(li);
        });

        this.menuContainer.innerHTML = "";
        this.menuContainer.appendChild(ul);
    }

    private getListGames(): string[] {
        const list: string[] = [];
        for (var enumMember in Games) {
            const game:Game = this.factory(<Games>enumMember);
            if(!game?.disabled)
                list.push(enumMember);
        }
        return list;
    }

    private factory(game: Games) {
        switch (game) {
            case Games.BattleShips:
                return new BattleShips();
            case Games.TicTacToe:
                return new TicTacToe();
            case Games.Pong:
                return new Pong();
        }
    }

    private useGame = (event: MouseEvent) => {
        const name = (<HTMLLIElement>event.target).innerText;
        const game = this.factory(<Games>name);

        this.gameContainer.innerHTML = "";
        this.gameContainer.appendChild(game.getGameElement());
    }
}