import { GameBoard } from '../gameboard/gameboard';

const player1Board = new GameBoard();
const player2Board = new GameBoard();

class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new GameBoard();
  }

  takeShot(x, y, board) {
    return board.recieveAttack(x, y);
  }
}

export { Player };
