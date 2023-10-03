import {
  Ship,
  submarine,
  carrier,
  cargoShip,
  sailBoat,
  warShip,
} from '/Users/kylemosier/repos/battleship/src/modules/ships/ships';

const createGameBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let col = [];
    for (let j = 0; j < 10; j++) {
      let spot = j;
      col.push([i, j, 'empty']);
    }
    board.push(col);
  }
  return board;
};

class GameBoard {
  constructor() {
    this.board = createGameBoard();
  }

  placeShip(ship, orientation, x, y) {
    if (orientation == 'y') {
      for (let i = y; i < ship.len; i++) {
        this.board[x][i][2] = ship;
      }
    } else if (orientation == 'x') {
      for (let i = x; i < ship.len; i++) {
        this.board[i][y][2] = ship;
      }
    }
  }

  recieveAttack() {}

  shipsSunk() {}
}

const game = new GameBoard();
game.placeShip(submarine, 'y', 0, 0);
export { game };
