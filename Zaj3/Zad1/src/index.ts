import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";
import "./styles/styles.scss";

class App {
    constructor() {
        this.init();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(
            document.querySelector("#LeftBar")
        ); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>document.querySelector("#Game"); // kontener główny ekranu z grą
        const button = <HTMLSpanElement>document.querySelector("#NB3>span");
        const list = document.createElement("ul"); // lista pozycji w menu dostępnych gier

        const keys = Object.keys(Games).splice(
            Object.keys(Games).length / 2,
            Object.keys(Games).length / 2
        );
        keys.forEach((element) => {
            const li = document.createElement("li");
            list.appendChild(li);
            li.innerText = element;
            li.addEventListener("click", () => {
                gameContainer.innerHTML = "";
                switch (element) {
                    case "TicTacToe":
                        gameContainer.appendChild(
                            new TicTacToe().getGameElement()
                        );
                        break;
                    case "BattleShips":
                        gameContainer.appendChild(
                            new BattleShips().getGameElement()
                        );
                        break;
                }
            });
        });

        button.addEventListener("click", () => {
            if(document.body.hasAttribute('data-theme'))
                document.body.removeAttribute('data-theme')
            else
                document.body.setAttribute('data-theme', 'Dark');
        });
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        menuContainer.appendChild(list);
        // document.body.appendChild(menuContainer);
        // document.body.appendChild(gameContainer);
    }
}
import { format } from "node:path";

new App();
