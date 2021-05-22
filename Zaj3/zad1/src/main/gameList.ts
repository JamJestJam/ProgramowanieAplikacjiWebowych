import gameEnum from "./gameEnum";
import GameEnum from "./gameEnum";

class GameList {
    list = document.querySelector('#LeftBar ul');
    playFn;

    constructor(playFn: (name: GameEnum) => void, names: string[]) {
        this.playFn = playFn;

        this.init(names);
    }

    init(names: string[]) {
        names.forEach(name => {
            const li = document.createElement("li");
            li.innerHTML = name;
            li.addEventListener("click", () => {
                this.playFn(<gameEnum>name);
            })

            this.list?.appendChild(li);
        });
    }
}

export default GameList;