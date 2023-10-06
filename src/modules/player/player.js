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

  takeRandomShot(board) {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    return board.recieveAttack(randomX, randomY);
  }
}

export { Player };
