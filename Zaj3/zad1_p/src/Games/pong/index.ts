import IGame from "../../main/IGame";

class Pong implements IGame {
  name: string;
  disabled: boolean;

  constructor() {
      this.disabled = false;
      this.name = "Pong";
  }

  getGameElement = (): HTMLDivElement => {
    return document.createElement("div");
  };
}

export default Pong;
