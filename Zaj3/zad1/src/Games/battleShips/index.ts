import { disabled } from "../../main/disableGameD";
import IGame from "../../main/IGame";

@disabled
class BattleShips implements IGame {
  name: string;

  constructor() {
      this.name = "BattleShips";
  }

  getGameElement = (): HTMLDivElement => {
    return document.createElement("div");
  };
}

export default BattleShips;
