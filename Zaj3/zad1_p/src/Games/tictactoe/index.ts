import IGame from "../../main/IGame";
import Board from "./game/board";
import "../../styles/_tictactoe.scss";
import InputSize from "./input/inputSize";

class TicTacToe implements IGame {
  name: string;
  disabled: boolean;

  constructor() {
      this.disabled = false;
      this.name = "TicTacToe";
  }

  getGameElement = (): HTMLDivElement => {
    return new InputSize().content;
  };
}

export default TicTacToe;
