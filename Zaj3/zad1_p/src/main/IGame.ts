interface IGame {
  name: string;
  disabled: boolean;
  getGameElement: () => HTMLDivElement;
}

export default IGame;
