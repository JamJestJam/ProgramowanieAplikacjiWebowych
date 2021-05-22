import GameMenager from "./main/gameMenager";
import ThemeMenager from "./main/themeMenager";
import "./styles/styles.scss";

class App {
    constructor(){
        new GameMenager();
        new ThemeMenager();
    }
}

new App();