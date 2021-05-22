import BattleShips from "../Games/battleShips";
import TicTacToe from "../Games/tictactoe";
import GameEnum from "./gameEnum";
import GameList from "./gameList";
import Pong from "../Games/pong";
import IGame from "./IGame";
import { disabled } from "./disableGameD";

class GameMenager {
  gameDiv = document.querySelector<HTMLDivElement>("#Game") || document.createElement('div');

  constructor() {
    new GameList(this.playGame, this.gameList());
  }

  gameList = (): string[] => {
    const list: string[] = [];
    for (const enumMember in GameEnum) {
      const game = this.getGame(<GameEnum>enumMember);
      if (game?.disabled === undefined){
        list.push(enumMember);
      }
    }

    return list;
  }

  getGame = (gameName: GameEnum): IGame | undefined => {
    switch (gameName) {
      case GameEnum.BattleShips:
        return new BattleShips();
      case GameEnum.Pong:
        return new Pong();
      case GameEnum.TicTacToe:
        return new TicTacToe();
      default:
        return undefined;
    }
  }

  playGame = (gameName: GameEnum) => {
    const game = this.getGame(gameName);

    if (game && game?.disabled === undefined) {
      this.gameDiv.innerHTML = "";
      this.gameDiv.appendChild(game.getGameElement());
    }
  }
}

export default GameMenager;
