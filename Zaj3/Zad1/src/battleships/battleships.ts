import { Game } from "../games/game.model";
import { disabled, disabledFunction } from "../games/gameDecorators/disabled";

@disabled
export class BattleShips implements Game {
    name: string;

    constructor() {
        this.name = "Statki";
    }
    
    @disabledFunction
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}